import styles from '@/components/Home.module.css'
import Topic from '@/components/UI/Topic';
import TagLink from "@/components/TagLink";
import { TagContent } from "@/lib/tags";
import Link from "next/link";


type Props = {
    tags: TagContent[];
  };
      const Topics: React.FC<Props> = ({tags}) => {
    return (<div className="flex mb-4 w-full">
    <div className="w-full h-auto border-t border-reddish border-t-8 rounded-lg">
    <ul className="flex justify-around flex-wrap px-3 pb-3 bg-white rounded-lg dark:border-none border border-grayish dark:bg-midnightish h-auto">
    {tags.slice(0,9).map((it, i) => (
      
      <Link key={i} href={`/posts/tagged/${it.slug}`}>
      <a style={{width: '32.5%'}} className="inline-block h-1/3">
<li className="flex justify-center rounded-lg mt-3 font-bold md:text-2xl transition dark:border-none border border-grayish dark:bg-evening hover:bg-daylight dark:hover:bg-lightnight text-midnightish dark:text-white inline-block h-1/3 p-6 pt-4"
>{it.name}</li>
</a>
</Link>
))}
</ul>
</div>
    </div>
    )
    }

export default Topics