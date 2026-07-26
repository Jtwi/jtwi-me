// One-time helper to mint a Spotify refresh token.
//
//   node scripts/spotify-token.mjs
//
// Reads the client ID and secret from .env.local, opens a local callback
// server, walks you through the consent screen, then writes the refresh token
// straight back into .env.local. Refresh tokens don't expire, so this only
// needs running once.

import { createServer } from "node:http";
import { randomBytes } from "node:crypto";
import { readFileSync, appendFileSync, existsSync } from "node:fs";

const PORT = 8888;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPES = "user-read-currently-playing user-read-recently-played";
const ENV_FILE = ".env.local";

function readEnvFile(file) {
  if (!existsSync(file)) return {};
  const out = {};
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    out[trimmed.slice(0, eq).trim()] = trimmed
      .slice(eq + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }
  return out;
}

const fileEnv = readEnvFile(ENV_FILE);
const clientId = process.env.SPOTIFY_CLIENT_ID || fileEnv.SPOTIFY_CLIENT_ID;
const clientSecret =
  process.env.SPOTIFY_CLIENT_SECRET || fileEnv.SPOTIFY_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error(
    `\nCouldn't find SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET in ${ENV_FILE} or the environment.\n`,
  );
  process.exit(1);
}

if (fileEnv.SPOTIFY_REFRESH_TOKEN) {
  console.log(
    `\nHeads up: ${ENV_FILE} already has a SPOTIFY_REFRESH_TOKEN.\n` +
      "Continuing will append a second one — delete the old line first if you don't want that.\n",
  );
}

const state = randomBytes(8).toString("hex");
const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
  client_id: clientId,
  response_type: "code",
  redirect_uri: REDIRECT_URI,
  scope: SCOPES,
  state,
})}`;

console.log(
  `\nAdd this exact redirect URI to your Spotify app settings first:\n\n  ${REDIRECT_URI}\n`,
);
console.log(`Then open this URL and approve:\n\n  ${authUrl}\n`);
console.log("Waiting for the redirect...\n");

const reply = (res, status, message) => {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(message);
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://127.0.0.1:${PORT}`);
  if (url.pathname !== "/callback") return reply(res, 404, "Not found");

  const error = url.searchParams.get("error");
  if (error) {
    reply(res, 400, `Spotify returned: ${error}`);
    console.error(`\nAuthorisation failed: ${error}\n`);
    server.close();
    process.exit(1);
  }

  if (url.searchParams.get("state") !== state) {
    reply(res, 400, "State mismatch — start again.");
    console.error("\nState mismatch. Re-run the script.\n");
    server.close();
    process.exit(1);
  }

  const code = url.searchParams.get("code");
  if (!code) return reply(res, 400, "No code in callback");

  const token = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const json = await token.json();

  if (!token.ok || !json.refresh_token) {
    reply(res, 500, "Token exchange failed — check the terminal.");
    console.error("\nToken exchange failed:\n", json, "\n");
    server.close();
    process.exit(1);
  }

  reply(res, 200, "Done. You can close this tab and return to the terminal.");

  appendFileSync(ENV_FILE, `\nSPOTIFY_REFRESH_TOKEN=${json.refresh_token}\n`);

  console.log(`Written to ${ENV_FILE}:\n`);
  console.log(`SPOTIFY_REFRESH_TOKEN=${json.refresh_token}\n`);
  console.log(
    "Restart the dev server to pick it up. For production, add the same\n" +
      "three variables in Vercel → Settings → Environment Variables.\n",
  );

  server.close();
  process.exit(0);
});

server.listen(PORT);
