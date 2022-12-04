import Head from "next/head";
import Image from "next/image";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/data/siteConfig";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";

interface PageProps {
  date?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;
}

export const TagTitle: React.FC<PageProps> = ({
  date,
  title,
  description,
  thumbnail,
  children,
}) => {
  const metaTitle = onlyText(title);
  const metaDescription = description
    ? onlyText(description)
    : siteConfig.siteDescription;
  const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
  return (
    <>
      <Head>
        <title>
          {metaTitle} - {siteConfig.siteName}
        </title>
        <meta name="og:url" content={siteConfig.siteUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content={`${siteConfig.siteUrl}${metaThumbnail}`}
        />
      </Head>
      <header
        className="p-8 mb-4 rounded-lg dark:bg-midnightish"
      >
        {date ? (
          <time
            className={cx("block mb-2", "text-gray-500", "dark:text-gray-400")}
          >
            {formatDate(date)}
          </time>
        ) : null}
        <h1 className="font-bold prose prose-invert text-3xl">{title}</h1>
        {description ? (
          <div className="mt-4">
            <Prose>
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
                      {thumbnail && (
    <Image
    className="postImage w-full mb-3 rounded-lg"
    src={thumbnail}
    alt='Post thumbnail'
    layout='fill'
    objectFit='contain'
  />)}


            </Prose>
          </div>
        ) : null}
      </header>
      {children}
    </>
  );
};
