import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/posts/tagged/[[...slug]]"} as={`/posts/tagged/${tag.slug}`}>
      <a>{tag.name}</a>
    </Link>
  );
}