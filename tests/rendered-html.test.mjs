import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Adsons homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Connecting markets\./);
  assert.match(html, /Powering everyday technology\./);
  assert.match(html, /20\+/);
  assert.match(html, /Retail Network/);
  assert.match(html, /WhatsApp/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders every public route", async () => {
  const expected = [
    ["/trading", /Trading &amp; Distribution/],
    ["/categories", /Focused categories/],
    ["/retail", /Three shops/],
    ["/about", /Built over two decades/],
    ["/contact", /Let’s discuss/],
  ];

  for (const [pathname, heading] of expected) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), heading, pathname);
  }
});
