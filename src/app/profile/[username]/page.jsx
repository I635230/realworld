import { Suspense } from "react";
import FeedToggle from "@/app/ui/articles/feed/feed-toggle";
import Feed from "@/app/ui/articles/feed/feed";
import Loading from "@/app/ui/articles/feed/loading";

export default async function Page({ params, searchParams }) {
  const page = searchParams["page"];
  const limit = searchParams["limit"];
  const offset = searchParams["offset"];
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
                  <FeedToggle feedName={"My Articles"} active={"active"} />
                  <FeedToggle feedName={"Favorited Articles"} />
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
