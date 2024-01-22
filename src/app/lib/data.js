"use server";

import { cookies } from "next/headers";

export async function fetchArticle({ slug }) {
  // console.log(slug);
  try {
    const response = await fetch(`http://api:3000/api/articles/${slug}`, {
      method: "GET",
      cache: "no-store",
    });
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log("Article取得エラー");
  }
}

export async function fetchArticles({
  tag,
  author,
  favorited,
  limit = 20,
  offset = 0,
}) {
  console.log(author);

  let url;

  if (tag) {
    url = `http://api:3000/api/articles?tag=${tag}&limit=${limit}&offset=${offset}`;
  } else if (author) {
    url = `http://api:3000/api/articles?author=${author}&limit=${limit}&offset=${offset}`;
  } else if (favorited) {
    url = `http://api:3000/api/articles?favorited=${favorited}&limit=${limit}&offset=${offset}`;
  } else {
    url = `http://api:3000/api/articles?limit=${limit}&offset=${offset}`;
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });
    // console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log("Article取得エラー");
  }
}

export async function getCurrentUser() {
  try {
    const response = await fetch(`http://api:3000/api/user`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${cookies().get("session").value}`,
      },
    });
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log("CurrentUser取得エラー");
  }
}
