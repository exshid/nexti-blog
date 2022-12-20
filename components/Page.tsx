import Head from "next/head";
import Image from "next/future/image";
import siteConfig from "@/data/siteConfig";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";

interface PageProps {
className?: string;
  date?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;
  alt: string;

}

export const Page: React.FC<PageProps> = ({
  className,
  date,
  title,
  description,
  thumbnail,
  alt,
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
      <div className={className}>
      <header
        className="mb-3 rounded-lg dark:bg-midnightish"
      >
        <h1 className="text-3xl md:text-5xl text-midnightish dark:text-white mb-3 font-bold">{title}</h1>
        {description ? (
          <div className="mt-4">
            <Prose>
              {typeof description === "string" ? (
                <p className="lead">{description}</p>
              ) : (
                description
              )}
                      {thumbnail && (
   <>
   <Image
    className="postImage w-full mb-3 rounded-lg"
    src={thumbnail}
    alt={alt ? alt : ''}
    width={1100}
    height={700}
  />
  <span className="bg-midnightish opacity-60">{alit}</span>
  </>
  )}


            </Prose>
          </div>
        ) : null}
      </header>
      </div>
      {children}
    </>
  );
};
