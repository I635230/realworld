import { NextResponse, NextRequest } from "next/server";

// 引数をjsでどう書くかわからないので、このファイルだけtsになった
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // console.log("middlewareが読み込まれました");
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

// export const config = {
//   matcher: ["/editor", "/editor/:slug*"],
// };
