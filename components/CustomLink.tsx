import Link from 'next/link';

const CustomLink: React.FC<{as:string,href:string}> = ({ as, href, ...otherProps }) => {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
    </>
  );
}

export default CustomLink