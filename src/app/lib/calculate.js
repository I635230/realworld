export function getMaxPage({ articlesCount, limit = 20 }) {
  return Math.ceil(articlesCount / limit);
}
