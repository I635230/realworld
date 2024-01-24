import { fetchArticles } from "@/app/lib/data";
import Link from "next/link";
import Pagination from "@/app/ui/pagination";
import { headers } from "next/headers";
import { getMaxPage } from "@/app/lib/calculate";
import Feed from "@/app/ui/article/feed";

export default async function Page({ params, searchParams }) {
  const pathname = headers().get("x-pathname") || "";
  const page = searchParams["page"];
  const articlesData = await fetchArticles({
    author: params.username,
    page: page,
  });
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

              <Feed articles={articlesData.articles} />

              <Pagination pathname={pathname} page={page} maxPage={maxPage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
