import Head from 'next/head';

const SEO:React.FC<{title:string, description:string}> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}

export default SEO