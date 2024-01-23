import { fetchArticle } from "@/app/lib/data";
import DeleteArticle from "@/app/ui/article/delete-article";
import { cookies } from "next/headers";

export default async function Page({ params }) {
  const slug = params.slug;
  const articleData = await fetchArticle({ slug: slug });
  const article = articleData.article;
  const user = cookies().get("username");
  return (
    <>
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>

            <div className="article-meta">
              <a href="/profile/eric-simons">
                <img src="http://i.imgur.com/Qr71crq.jpg" />
              </a>
              <div className="info">
                <a href="/profile/eric-simons" className="author">
                  {article.author.username}
                </a>
                <span className="date">January 20th</span>
              </div>
              {user && user.value == article.author.username && (
                <>
                  <a
                    href={`/editor/${slug}`}
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <i class="ion-edit"></i> Edit Article
                  </a>
                  <DeleteArticle slug={slug} />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <p>{article.description}</p>
              <p>{article.body}</p>
              <ul className="tag-list">
                {article.tagList.map((tag) => (
                  <li className="tag-default tag-pill tag-outline">{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
