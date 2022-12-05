import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext } from "next/document";
import { cx } from "@/lib/utils";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css" />

        </Head>
        <body
          className="bg-white dark:bg-nightish"
        >
          <Main />
          <NextScript />
          <script async src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
