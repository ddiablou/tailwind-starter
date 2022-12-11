import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

export interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export default function Layout({
  title = "Lorem",
  children,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <Head>
        <title>{`${title} | Ipsum`}</title>
      </Head>
      <div id="__layout">{children}</div>
    </>
  );
}
