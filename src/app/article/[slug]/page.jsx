import { cookies } from "next/headers";
import { fetchArticle } from "@/app/lib/data";
import ArticleMeta from "@/app/ui/articles/article-meta";
import EditArticle from "@/app/ui/articles/article/edit-article";
import DeleteArticle from "@/app/ui/articles/article/delete-article";
import ArticleContent from "@/app/ui/articles/article/article-content";

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
              <ArticleMeta article={article} />
              {user && user.value == article.author.username && (
                <>
                  <EditArticle slug={slug} />
                  <DeleteArticle slug={slug} />
                </>
              )}
            </div>
          </div>
        </div>

        <ArticleContent article={article} />
      </div>
    </>
  );
}
