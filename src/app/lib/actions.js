"use server";

import { cookies } from "next/headers";

export async function createArticle(tags, state, formData) {
  // console.log(tags);
  // console.log(formData);
  console.log(formData.get("title"));
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
  } catch (error) {
    console.log("記事の生成に失敗しました");
    // return error;
  }
}
