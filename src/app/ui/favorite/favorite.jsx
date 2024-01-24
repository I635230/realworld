"use client";

import { favorite, unfavorite } from "@/app/lib/actions";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Favorite({ article }) {
  const pathname = usePathname();
  let [favoritesCount, setFavoritesCount] = useState(article.favoritesCount);
  let [favorited, setFavorited] = useState(article.favorited);

  if (favorited) {
    return (
      <>
        <button
          className="btn btn-outline-primary-hover btn-sm pull-xs-right"
          onClick={() => {
            setFavoritesCount(favoritesCount - 1);
            setFavorited(false);
            unfavorite(article.slug, pathname);
          }}
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
          onClick={() => {
            setFavoritesCount(favoritesCount + 1);
            setFavorited(true);
            favorite(article.slug, pathname);
          }}
        >
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </>
    );
  }
}
