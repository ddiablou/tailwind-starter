import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

// CSS
import "../public/css/nprogress.css";
import "../public/css/global.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
