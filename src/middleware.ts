import { NextResponse, NextRequest } from "next/server";

// 引数をjsでどう書くかわからないので、このファイルだけtsになった
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("middlewareが読み込まれました");
  const user = request.cookies.get("username");
  console.log(user);

  // redirect
  if (pathname === "/editor" && !user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname.startsWith("/editor/") && !user) {
    const slug = pathname.split("/")[2];
    return NextResponse.redirect(new URL(`/article/${slug}`, request.url));
  }

  // マッチしなかったら、そのまま表示
  return NextResponse.next();
}

export const config = {
  matcher: ["/editor", "/editor/:slug*"],
};
