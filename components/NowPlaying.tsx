"use client";

import { useEffect, useState } from "react";

import type { Track } from "@/app/api/now-playing/route";

const SPOTIFY_LOGO =
  "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.196c2.905-.881 6.517-.454 8.987 1.063a.624.624 0 0 1 .205.86zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z";

// Renders nothing until a track arrives, so the page is unchanged when
// Spotify isn't configured, the request fails, or the API is rate limited.
export function NowPlaying({ className }: { className?: string }) {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const res = await fetch("/api/now-playing");
        if (!res.ok) return;
        const json = (await res.json()) as { track: Track | null };
        if (active) setTrack(json.track);
      } catch {
        // Offline or unreachable — leave whatever was last shown.
      }
    };

    load();
    const timer = setInterval(load, 60_000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);

  if (!track) return null;

  const state = track.playing ? "Now playing" : "Last played";

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${state}: ${track.title} — ${track.artist}`}
      className={`flex min-w-0 items-center gap-2 font-mono text-xs transition-colors text-ink-faint hover:text-accent-ink ${className ?? ""}`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden
        className="shrink-0"
      >
        <path d={SPOTIFY_LOGO} />
      </svg>

      {track.playing ? (
        <span aria-hidden className="equaliser shrink-0">
          <i />
          <i />
          <i />
        </span>
      ) : null}

      {/* The visible text is just the track; the state is announced instead of
          taking up a label's worth of horizontal space. */}
      <span className="sr-only">{state}:</span>
      <span className="truncate">
        {track.title} — {track.artist}
      </span>
    </a>
  );
}

export default NowPlaying;
