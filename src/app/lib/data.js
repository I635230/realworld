export async function fetchArticle({ slug }) {
  // console.log(slug);
  try {
    const response = await fetch(`http://api:3000/api/articles/${slug}`, {
      method: "GET",
    });
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data.article;
  } catch (error) {
    console.log(error);
    console.log("Article取得エラー");
  }
}
