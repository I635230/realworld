import Link from "next/link";
import ArticleMeta from "@/app/ui/articles/article-meta";
import Favorite from "@/app/ui/favorite/favorite";
import FeedContent from "@/app/ui/articles/feed/feed-content";

export default function Feed({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <div className="article-preview">
          <div className="article-meta">
            <ArticleMeta article={article} />
            <Favorite article={article} />
          </div>

          <FeedContent article={article} />
        </div>
      ))}
    </>
  );
}
