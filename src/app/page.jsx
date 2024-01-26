import { Suspense } from "react";
import Banner from "@/app/ui/top/banner";
import FeedToggle from "@/app/ui/articles/feed/feed-toggle";
import Feed from "@/app/ui/articles/feed/feed";
import Loading from "@/app/ui/articles/feed/loading";

export default async function Page({ searchParams }) {
  const page = searchParams["page"];
  const limit = searchParams["limit"];
  const offset = searchParams["offset"];
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

              <Suspense fallback={<Loading />}>
                <Feed page={page} limit={limit} offset={offset} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
