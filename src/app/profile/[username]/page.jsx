import { fetchArticles } from "@/app/lib/data";
import Favorite from "@/app/ui/favorite/favorite";
import Link from "next/link";
import Pagination from "@/app/ui/pagination";
import { headers } from "next/headers";
import { getMaxPage } from "@/app/lib/calculate";

export default async function Page({ params, searchParams }) {
  const pathname = headers().get("x-pathname") || "";
  const page = searchParams["page"];
  const articlesData = await fetchArticles({
    author: params.username,
    page: page,
  });
  const articles = articlesData.articles;
  const maxPage = getMaxPage({
    articlesCount: articlesData.articlesCount,
    limit: searchParams["limit"],
  });
  return (
    <>
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  className="user-img"
                />
                <h4>{params.username}</h4>
                <p>bio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <Link className="nav-link active" href="">
                      My Articles
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="">
                      Favorited Articles
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
