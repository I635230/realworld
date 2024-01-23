"use client";

import { favorite, unfavorite } from "@/app/lib/actions";
import { usePathname } from "next/navigation";

export default function Favorite({ article }) {
  const pathname = usePathname();

  if (article.favorited) {
    return (
      <>
        <button
          className="btn btn-outline-primary-hover btn-sm pull-xs-right"
          onClick={() => unfavorite(article.slug, pathname)}
        >
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          className="btn btn-outline-primary btn-sm pull-xs-right"
          onClick={() => favorite(article.slug, pathname)}
        >
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </>
    );
  }
}
