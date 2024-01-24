"use client";

import { useState } from "react";
import { useFormState } from "react-dom";

export default function ArticleForm({ action, useTags, slug = "" }) {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const actionWithTags = action.bind(null, tags);
  const actionWithSlug = actionWithTags.bind(null, slug);
  const [error, formAction] = useFormState(actionWithSlug, "");

  function addTag(tag) {
    setTags([...tags, tag]);
    setTag("");
  }

  function deleteTag(tag) {
    setTags(tags.filter((element) => element != tag));
  }

  return (
    <>
      <form action={formAction}>
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

          {useTags && (
            <>
              <fieldset className="form-group">
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
                      <i
                        id={tag}
                        className="ion-close-round"
                        onClick={() => deleteTag(tag)}
                      ></i>{" "}
                      {tag}
                    </span>
                  ))}
                </div>
              </fieldset>

              <button type="button" onClick={() => addTag(tag)}>
                タグを追加
              </button>
            </>
          )}

          <button
            className="btn btn-lg pull-xs-right btn-primary"
            type="submit"
          >
            Publish Article
          </button>
        </fieldset>
      </form>
    </>
  );
}
