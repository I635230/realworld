import { headers } from "next/headers";
import { fetchArticles } from "@/app/lib/data";
import { getMaxPage } from "@/app/lib/calculate";
import Banner from "@/app/ui/top/banner";
import FeedToggle from "@/app/ui/articles/feed/feed-toggle";
import Feed from "@/app/ui/articles/feed/feed";
import Pagination from "@/app/ui/articles/feed/pagination";

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
        <Banner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <FeedToggle feedName={"Global Feed"} active={"active"} />
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
