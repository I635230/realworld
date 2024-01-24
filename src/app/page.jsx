import { fetchArticles } from "@/app/lib/data";
import Favorite from "@/app/ui/favorite/favorite";
import Link from "next/link";
import Pagination from "@/app/ui/pagination";
import { headers } from "next/headers";

export default async function Page({ searchParams }) {
  const pathname = headers().get("x-pathname") || "";
  const page = searchParams["page"];
  const limit = searchParams["limit"] || 20;
  const articlesData = await fetchArticles({ page: page });
  const articles = articlesData.articles;
  const articlesCount = articlesData.articlesCount;
  const maxPage = Math.ceil(articlesCount / limit);
  return (
    <>
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <Link className="nav-link active" href="">
                      Global Feed
                    </Link>
                  </li>
                </ul>
              </div>

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
                  <Link
                    href={`/article/${article.slug}`}
                    className="preview-link"
                  >
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      {article.tagList.map((tag) => (
                        <li className="tag-default tag-pill tag-outline">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              ))}

              <Pagination pathname={pathname} page={page} maxPage={maxPage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
