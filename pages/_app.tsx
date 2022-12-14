import Link from "next/link";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Search from "@/components/Search";
import Contact from "@/components/Contact";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
<Link href={`#main-content`}>
              <a
                className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </a>
</Link>
          <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
  );
}



export default MyApp;
