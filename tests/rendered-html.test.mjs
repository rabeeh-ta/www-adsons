import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const handlerUrl = new URL(
    "../.netlify/functions-internal/server/main.mjs",
    import.meta.url,
  );
  handlerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: handler } = await import(handlerUrl.href);

  return handler(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
  );
}

test("server-renders the Adsons homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Connecting businesses\./i);
  assert.match(html, /Building lasting partnerships\./i);
  assert.match(html, /2001/);
  assert.match(html, /ADSONS and DIGIT/);
  assert.match(html, /consumer electronics accessories warehouse/i);
  assert.match(html, /mailto:contact@adsonsdubai\.com/);
  assert.match(html, /contact@adsonsdubai\.com/);
  assert.match(html, /\+971 55 505 5198/);
  assert.match(html, /wa\.me\/971555055198/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders every public route", async () => {
  const expected = [
    ["/trading", /Reliable supply\. Enduring partnerships\./],
    ["/categories", /Brands built around quality/],
    ["/retail", /principles behind every partnership/i],
    ["/about", /International trading experience since 2001/],
    ["/contact", /build the next lasting partnership/i],
  ];

  for (const [pathname, heading] of expected) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), heading, pathname);
  }
});

test("internal navigation avoids Vinext's broken next/link client shim", async () => {
  const source = await readFile(
    new URL("../components/SitePage.tsx", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(source, /from ["']next\/link["']/);
});
