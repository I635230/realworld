"use server";

import { cookies } from "next/headers";

export async function fetchArticle({ slug }) {
  try {
    const response = await fetch(`http://api:3000/api/articles/${slug}`, {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    console.log("Article取得に成功しました");
    return data;
  } catch (error) {
    console.log(error);
    console.log("Article取得に失敗しました");
  }
}

export async function fetchArticles({
  tag,
  author,
  favorited,
  limit = 20,
  offset = 0,
  page = 1,
}) {
  let url;

  if (tag) {
    url = `http://api:3000/api/articles?tag=${tag}&limit=${limit}&offset=${offset}&page=${page}`;
  } else if (author) {
    url = `http://api:3000/api/articles?author=${author}&limit=${limit}&offset=${offset}&page=${page}`;
  } else if (favorited) {
    url = `http://api:3000/api/articles?favorited=${favorited}&limit=${limit}&offset=${offset}&page=${page}`;
  } else {
    url = `http://api:3000/api/articles?limit=${limit}&offset=${offset}&page=${page}`;
  }

  let session;
  if (cookies().get("session")) {
    session = cookies().get("session").value;
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${session}`,
      },
    });
    const data = await response.json();
    console.log("Articles取得に成功しました");
    return data;
  } catch (error) {
    console.log(error);
    console.log("Articles取得に失敗しました");
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
    const data = await response.json();
    console.log("CurrentUser取得に成功しました");
    return data;
  } catch (error) {
    console.log(error);
    console.log("CurrentUser取得に失敗しました");
  }
}
