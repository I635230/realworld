"use client";

import { deleteArticle } from "@/app/lib/actions";

export default function DeleteArticle({ slug }) {
  return (
    <>
      <button
        onClick={() => deleteArticle(slug)}
        class="btn btn-sm btn-outline-danger"
      >
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </>
  );
}
