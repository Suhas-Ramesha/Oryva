import type { MetadataRoute } from "next";

const BASE_URL = "https://www.oryva.com";
const ROUTES = [
  "",
  "/about",
  "/forge",
  "/forge/apply",
  "/product",
  "/our-approach",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "/forge" || route === "/product" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
