//@ts-nocheck
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Search from "@/components/Search";
import Contact from "@/components/Contact";
import { MDXFrontMatter } from "@/lib/types";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

type Props = AppProps | HomeProps;


function MyApp({ Component, pageProps, posts }: Props) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      <Header posts={posts.slice(0, 4)} />
      <a
        href="#main"
        className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </a>
          <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};


export default MyApp;
