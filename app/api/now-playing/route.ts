// Spotify's tokens expire hourly, so the long-lived credential is a refresh
// token kept server-side. The client never sees it — it only ever calls this
// route, which returns the current track or the last one played.

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

export const dynamic = "force-dynamic";

type SpotifyItem = {
  name?: string;
  artists?: { name?: string }[];
  external_urls?: { spotify?: string };
};

export type Track = {
  playing: boolean;
  title: string;
  artist: string;
  url: string;
};

function toTrack(
  item: SpotifyItem | undefined,
  playing: boolean,
): Track | null {
  if (!item?.name) return null;
  return {
    playing,
    title: item.name,
    artist: (item.artists ?? [])
      .map((a) => a.name)
      .filter(Boolean)
      .join(", "),
    url: item.external_urls?.spotify ?? "https://open.spotify.com",
  };
}

async function getAccessToken(id: string, secret: string, refresh: string) {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh,
    }),
    cache: "no-store",
  });
  if (!res.ok) return null;
  const json = (await res.json()) as { access_token?: string };
  return json.access_token ?? null;
}

// Always 200 with a null track when unset or failing: the widget is a nice
// extra, not something worth showing an error state for.
const empty = () => Response.json({ track: null });

export async function GET() {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!id || !secret || !refresh) return empty();

  try {
    const token = await getAccessToken(id, secret, refresh);
    if (!token) return empty();

    const headers = { Authorization: `Bearer ${token}` };
    let track: Track | null = null;

    // 204 means nothing is playing right now, which is not an error.
    const current = await fetch(NOW_PLAYING, { headers, cache: "no-store" });
    if (current.status === 200) {
      const json = (await current.json()) as {
        item?: SpotifyItem;
        is_playing?: boolean;
        currently_playing_type?: string;
      };
      if (json.currently_playing_type === "track") {
        track = toTrack(json.item, Boolean(json.is_playing));
      }
    }

    if (!track) {
      const recent = await fetch(RECENTLY_PLAYED, {
        headers,
        cache: "no-store",
      });
      if (recent.ok) {
        const json = (await recent.json()) as {
          items?: { track?: SpotifyItem }[];
        };
        track = toTrack(json.items?.[0]?.track, false);
      }
    }

    return Response.json(
      { track },
      {
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      },
    );
  } catch {
    return empty();
  }
}
