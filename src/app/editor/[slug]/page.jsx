"use client";

import { updateArticle } from "@/app/lib/actions";
import ArticleForm from "@/app/ui/articles/form/article-form";

export default function Page({ params }) {
  return (
    <>
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <ul className="error-messages"></ul>

              <ArticleForm
                action={updateArticle}
                useTags={false}
                slug={params["slug"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
