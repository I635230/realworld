import { fetchArticle } from "@/app/lib/data";

export default async function Page() {
  const slug = "How-to-train-dragons"; // 本当は、このページにpropsとしてslugを渡してあげる必要があるが、Article一覧ページがまだないので、仮で置いておく。
  const article = await fetchArticle({ slug: slug });
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
