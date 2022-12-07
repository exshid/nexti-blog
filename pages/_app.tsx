import "@/styles/globals.css";
import { MDXFrontMatter } from "@/lib/types";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Search from "@/components/Search";
import { listTags, TagContent } from "@/lib/tags";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
tag: string;
}

const MyApp: React.FC<HomeProps> = ({ Component, pageProps,posts, tags }) => {

  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      <a
        href="#main"
        className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Header posts={posts.slice(0, 4)} />
    
        <Search/>
        <main id="main" className="p-4">
          <Component {...pageProps} />
        </main>
        <Footer />
    </ThemeProvider>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  const tags = listTags();

  return {
    props: {
      posts: mdxFiles,
      tags,
    },
  };
};

export default MyApp;
