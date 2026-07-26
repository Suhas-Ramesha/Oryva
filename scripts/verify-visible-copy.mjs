import { readFile } from "node:fs/promises";
import { join } from "node:path";

const pages = [
  "index.html",
  "about.html",
  "product.html",
  "forge.html",
  "how-it-works.html",
  "contact.html",
  "_not-found.html",
];

const buildDirectory = join(process.cwd(), ".next", "server", "app");
const dashPattern = /[–—]|\b[A-Za-z]+-[A-Za-z]+\b/g;
const oldBrandPattern = /ORYVA-AI|contact@oryva-ai\.com/g;

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&apos;", "'")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&nbsp;", " ")
    .replaceAll("&copy;", "©");
}

function extractRenderedText(html) {
  return decodeEntities(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
  );
}

const failures = [];

for (const page of pages) {
  let html;

  try {
    html = await readFile(join(buildDirectory, page), "utf8");
  } catch {
    throw new Error(`Missing ${page}. Run "npm run build" before verifying copy.`);
  }

  const renderedText = extractRenderedText(html);
  const oldBrandMatches = html.match(oldBrandPattern) ?? [];
  const dashMatches = renderedText.match(dashPattern) ?? [];

  if (oldBrandMatches.length > 0 || dashMatches.length > 0) {
    failures.push({
      page,
      matches: [...new Set([...oldBrandMatches, ...dashMatches])],
    });
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`${failure.page}: ${failure.matches.join(", ")}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Visible copy verified across ${pages.length} generated pages.`);
}
