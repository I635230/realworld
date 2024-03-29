import "@/app/global.css";
import { authenticated } from "@/app/lib/auth";
import Header from "@/app/ui/header";
import HeaderWithLogin from "@/app/ui/header-with-login";
import Footer from "@/app/ui/footer";

export default async function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <title>Conduit</title>
        <link
          href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
      </head>
      <body>
        {(await authenticated()) ? <HeaderWithLogin /> : <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
