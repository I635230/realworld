export async function fetchArticle({ slug }) {
  // console.log(slug);
  try {
    const response = await fetch(`http://api:3000/api/articles/${slug}`, {
      method: "GET",
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

export async function fetchArticles() {
  try {
    const response = await fetch(`http://api:3000/api/articles`, {
      method: "GET",
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
