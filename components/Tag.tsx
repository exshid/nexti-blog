import Link from "next/link";
import { cx, slugify } from "@/lib/utils";

interface TagProps {
  href: string;
  children: string;
}

export const Tag: React.FC<TagProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        className={cx(
          "inline-block text-sm py-0.5 prose dark:prose-invert px-2.5 rounded-full hover:underline",
          "bg-reddish hover:bg-darker-reddish transition text-white"
        )}
      >
        #{slugify(children)}
      </a>
    </Link>
  );
};
