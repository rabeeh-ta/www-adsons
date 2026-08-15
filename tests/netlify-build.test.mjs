import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectUrl = new URL("../", import.meta.url);

test("build emits the Netlify server function and public assets", async () => {
  const functionEntry = new URL(
    ".netlify/functions-internal/server/server.mjs",
    projectUrl,
  );
  const functionBundle = new URL(
    ".netlify/functions-internal/server/main.mjs",
    projectUrl,
  );
  const publicAsset = new URL("dist/favicon.svg", projectUrl);

  await assert.doesNotReject(() => access(functionEntry));
  await assert.doesNotReject(() => access(functionBundle));
  await assert.doesNotReject(() => access(publicAsset));

  assert.match(await readFile(functionEntry, "utf8"), /path:\s*["']\/\*["']/);
});
