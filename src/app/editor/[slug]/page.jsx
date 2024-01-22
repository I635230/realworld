"use client";

import { useFormState } from "react-dom";
import { useState } from "react";
import { updateArticle } from "@/app/lib/actions";

export default function Page({ params }) {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const updateArticleWithTags = updateArticle.bind(null, tags);
  const updateArticleWithSlug = updateArticleWithTags.bind(
    null,
    params["slug"]
  );
  const [error, updateAction] = useFormState(updateArticleWithSlug, "");
  console.log(params);

  function addTag(tag) {
    setTags([...tags, tag]);
    setTag("");
  }

  function deleteTag(tag) {
    setTags(tags.filter((element) => element != tag));
  }

  return (
    <>
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <ul className="error-messages"></ul>

              <form action={updateAction}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="title"
                      placeholder="Article Title"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      placeholder="What's this article about?"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      name="body"
                      placeholder="Write your article (in markdown)"
                    ></textarea>
                  </fieldset>

                  {/* <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tags"
                      value={tag}
                      onChange={(event) => setTag(event.target.value)}
                    />
                    <div className="tag-list">
                      {tags.map((tag) => (
                        <span className="tag-default tag-pill">
                          {" "}
                          <i
                            id={tag}
                            className="ion-close-round"
                            onClick={() => deleteTag(tag)}
                          ></i>{" "}
                          {tag}{" "}
                        </span>
                      ))}
                    </div>
                  </fieldset> */}

                  {/* <button type="button" onClick={() => addTag(tag)}>
                    タグを追加
                  </button> */}

                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="submit"
                  >
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
