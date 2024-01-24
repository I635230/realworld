"use client";

import { favorite, unfavorite } from "@/app/lib/actions";
import { useState } from "react";

export default function Favorite({ article }) {
  let [favoritesCount, setFavoritesCount] = useState(article.favoritesCount);
  let [favorited, setFavorited] = useState(article.favorited);

  async function applyFavorite(diff) {
    setFavoritesCount(favoritesCount + diff);
    setFavorited(!favorited);
    let isOk;
    if (diff == +1) {
      isOk = await favorite(article.slug);
    } else if (diff == -1) {
      isOk = await unfavorite(article.slug);
    }
    if (!isOk) {
      setFavoritesCount(favoritesCount);
      setFavorited(favorited);
    }
  }

  if (favorited) {
    return (
      <>
        <button
          className="btn btn-outline-primary-hover btn-sm pull-xs-right"
          onClick={() => applyFavorite(-1)}
        >
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          className="btn btn-outline-primary btn-sm pull-xs-right"
          onClick={() => applyFavorite(+1)}
        >
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </>
    );
  }
}
