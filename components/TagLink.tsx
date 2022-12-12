import Link from "next/link";
import { TagContent } from "../lib/tags";
import { slugify } from "@/lib/utils";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={`/posts/tagged/${slugify(tag.slug)}`}>
      <a></a>
    </Link>
  );
}