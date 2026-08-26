import type { MetadataRoute } from "next";

const siteUrl = "https://www.brunosimone.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/wiki", priority: 0.9 },
    { path: "/search", priority: 0.8 },
    { path: "/case/jubigestor", priority: 0.7 },
    { path: "/case/canela", priority: 0.7 },
    { path: "/case/portfolio", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority,
  }));
}
