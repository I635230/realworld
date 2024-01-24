import Link from "next/link";
import Favorite from "@/app/ui/favorite/favorite";

export default function Feed({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <div className="article-preview">
          <div className="article-meta">
            <Link href={`/profile/${article.author.username}`}>
              <img src="http://i.imgur.com/Qr71crq.jpg" />
            </Link>
            <div className="info">
              <Link
                href={`/profile/${article.author.username}`}
                className="author"
              >
                {article.author.username}
              </Link>
              <span className="date">January 20th</span>
            </div>
            <Favorite article={article} />
          </div>

          <Link href={`/article/${article.slug}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
            <ul className="tag-list">
              {article.tagList.map((tag) => (
                <li className="tag-default tag-pill tag-outline">{tag}</li>
              ))}
            </ul>
          </Link>
        </div>
      ))}
    </>
  );
}
