import { headers } from "next/headers";
import { fetchArticles } from "@/app/lib/data";
import { getMaxPage } from "@/app/lib/calculate";
import ArticleMeta from "@/app/ui/articles/article-meta";
import Favorite from "@/app/ui/favorite/favorite";
import FeedContent from "@/app/ui/articles/feed/feed-content";
import Pagination from "@/app/ui/articles/feed/pagination";

export default async function Feed({ page, limit, offset }) {
  const pathname = headers().get("x-pathname") || "";
  const articlesData = await fetchArticles({ page: page });
  const articles = articlesData.articles;
  const maxPage = getMaxPage({
    articlesCount: articlesData.articlesCount,
    limit: limit,
  });

  return (
    <>
      {articles.map((article) => (
        <div className="article-preview" key={article.slug}>
          <div className="article-meta">
            <ArticleMeta article={article} />
            <Favorite article={article} />
          </div>

          <FeedContent article={article} />
        </div>
      ))}

      <Pagination pathname={pathname} page={page} maxPage={maxPage} />
    </>
  );
}
