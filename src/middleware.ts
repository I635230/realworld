import { NextResponse, NextRequest } from "next/server";

// 引数をjsでどう書くかわからないので、このファイルだけtsになった
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(`${pathname}でmiddlewareを読み込み中`);
  const user = request.cookies.get("username");

  // headerに現在のpathを設定
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  // redirect
  if (pathname === "/editor" && !user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname.startsWith("/editor/") && !user) {
    const slug = pathname.split("/")[2];
    return NextResponse.redirect(new URL(`/article/${slug}`, request.url));
  }

  // マッチしなかったら表示
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image
   * - assets
   * - favicon.ico (favicon file)
   * - sw.js (Service Worker file)
   */
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
