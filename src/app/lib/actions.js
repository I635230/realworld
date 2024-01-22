"use server";

import { cookies } from "next/headers";

export async function createArticle(tags, state, formData) {
  // console.log(tags);
  // console.log(formData);
  // console.log(formData.get("title"));
  try {
    const response = await fetch(`http://api:3000/api/articles`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies().get("session").value}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        article: {
          title: formData.get("title"),
          description: formData.get("description"),
          body: formData.get("body"),
          tagList: tags,
        },
      }),
    });
    console.log("記事の作成に成功しました");
  } catch (error) {
    console.log("記事の作成に失敗しました");
    // return error;
  }
}

export async function updateArticle(tags, slug, state, formData) {
  console.log(tags);
  try {
    const response = await fetch(`http://api:3000/api/articles/${slug}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cookies().get("session").value}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        article: {
          title: formData.get("title"),
          description: formData.get("description"),
          body: formData.get("body"),
          tagList: tags,
        },
      }),
    });
    console.log("記事の更新に成功しました");
  } catch (error) {
    console.log("記事の更新に失敗しました");
    // return error;
  }
}

export async function deleteArticle(slug) {
  try {
    const response = await fetch(`http://api:3000/api/articles/${slug}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookies().get("session").value}`,
      },
    });
    console.log("記事の削除に成功しました");
  } catch (error) {
    console.log("記事の削除に失敗しました");
  }
}
