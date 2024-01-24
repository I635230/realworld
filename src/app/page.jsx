import { fetchArticles } from "@/app/lib/data";
import Link from "next/link";
import Pagination from "@/app/ui/pagination";
import { headers } from "next/headers";
import { getMaxPage } from "@/app/lib/calculate";
import Feed from "@/app/ui/article/feed";

export default async function Page({ searchParams }) {
  const pathname = headers().get("x-pathname") || "";
  const page = searchParams["page"];
  const articlesData = await fetchArticles({ page: page });
  const maxPage = getMaxPage({
    articlesCount: articlesData.articlesCount,
    limit: searchParams["limit"],
  });
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

              <Feed articles={articlesData.articles} />

              <Pagination pathname={pathname} page={page} maxPage={maxPage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
