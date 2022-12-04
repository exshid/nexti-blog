import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { cx, slugify } from "@/lib/utils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { components } from "@/components/MDX";
import { Tag } from "@/components/Tag";
import { Prose } from "@/components/Prose";
import PostSidebar from "@/components/PostSidebar";
import TOC from "@/components/TOC";
import { getMdxNode } from "next-mdx/server"
import { getTableOfContents } from "next-mdx-toc"
import { MdxNode } from "next-mdx/server"
import { TableOfContents } from "next-mdx-toc"
interface ContextProps extends ParsedUrlQuery {
  slug: string;
}
interface Doc extends MdxNode {
  toc: TableOfContents
}


interface PostProps {
  frontMatter: MDXFrontMatter;
  mdx: any;
  posts: Array<MDXFrontMatter>;
  previous: MDXFrontMatter | null;
  next: MDXFrontMatter | null;
}


type Props = Doc | PostProps;

//@ts-nocheck
const Post: NextPage<Props> = ({ frontMatter, mdx, posts, previous, next, doc, tableOfContents }) => {
  return (
    <article className="px-6 md:px-0 w-full">
    <div className="flex">
<div className="w-9/12 mr-4 border border-grayish dark:border-none bg-white dark:bg-midnightish rounded-lg pt-9 p-12 h-auto">
  
    <Page {...frontMatter}>
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
        {previous || next ? (
          <nav
            className={cx(
              "mt-8 pt-8 grid grid-cols-2 gap-8 border-t",
              "border-gray-200",
              "dark:border-gray-700"
            )}
          >
            {previous ? (
              <div>
                <p
                  className={cx(
                    "mb-2 uppercase tracking-wider text-sm",
                    "text-gray-500",
                    "dark:text-gray-400"
                  )}
                >
                  Previous
                </p>
                <Link href={`/posts/${previous?.slug}`}>
                  <a className="font-bold">{previous?.title}</a>
                </Link>
              </div>
            ) : null}
            {next ? (
              <div className="col-start-2 text-right">
                <p
                  className={cx(
                    "mb-2 uppercase tracking-wider text-sm",
                    "text-gray-500",
                    "dark:text-gray-400"
                  )}
                >
                  Next
                </p>
                <Link href={`/posts/${next?.slug}`}>
                  <a className="font-bold">{next?.title}</a>
                </Link>
              </div>
            ) : null}
          </nav>
        ) : null}

          <nav
            className={cx(
              "mt-8 pt-8 grid grid-cols-2 gap-8 border-t",
              "border-gray-200",
              "dark:border-gray-700"
            )}
          >
                      {posts.slice(0, 2).map((post,index) => (
<div key={index}
>
                <p
                  className={cx(
                    "mb-2 uppercase tracking-wider text-sm",
                    "text-gray-500",
                    "dark:text-gray-400"
                  )}
                >
                  {post.title}
                </p>
                <Link href={`/posts/${post.slug}`}>
                  <a className="font-bold">{post.title}</a>
                </Link>
              </div>
))}            
          </nav>
        


      </Page>
      </div>
        
      <div className="w-3/12 h-auto rounded-lg"> 
         <PostSidebar author={frontMatter.author} date={frontMatter.date}>
         {frontMatter.tags ? frontMatter.tags.map((tag, index) => {
                    return (
                      <li className="inline-block mx-1 mr-1" key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  }) : ''}
                  </PostSidebar>
                  <TOC tree={tableOfContents} />
</div>
                  </div>

      </article>
    
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const doc = await getMdxNode("doc", context, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-autolink-headings"),
      ],
    },
  })
  const mdxFile = getAllMdx().map((post) => post["frontMatter"]);
  const { slug } = context.params as ContextProps;
  const mdxFiles = getAllMdx();
  const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
  const post = mdxFiles[postIndex];
  const { frontMatter, content } = post;
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: frontMatter,
  });
  return {
    props: {
      posts: mdxFile,
      doc,
      tableOfContents: await getTableOfContents(doc),
      frontMatter,
      mdx: mdxContent,
      previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      next: mdxFiles[postIndex - 1]?.frontMatter || null,
    },
  };
};

export default Post;
