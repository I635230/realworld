"use client";

import { favorite } from "@/app/lib/actions";
import { usePathname } from "next/navigation";

export default function Favorite({ article }) {
  console.log("aaa");
  const pathname = usePathname();
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
