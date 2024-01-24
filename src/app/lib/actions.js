"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createArticle(tags, slug, state, formData) {
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
  }

  redirect("/");
}

export async function updateArticle(tags, slug, state, formData) {
  console.log(tags, slug, formData);
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
  }

  redirect(`/`);
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

export async function favorite(slug) {
  try {
    const response = await fetch(
      `http://api:3000/api/articles/${slug}/favorite`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookies().get("session").value}`,
        },
      }
    );
    console.log("お気に入り登録に成功しました");
    return true;
  } catch (error) {
    console.log("お気に入り登録に失敗しました");
    return false;
  }
}

export async function unfavorite(slug) {
  try {
    const response = await fetch(
      `http://api:3000/api/articles/${slug}/favorite`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookies().get("session").value}`,
        },
      }
    );
    console.log("お気に入り解除に成功しました");
    return true;
  } catch (error) {
    console.log("お気に入り解除に失敗しました");
    return false;
  }
}
