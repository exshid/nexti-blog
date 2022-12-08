import styles from '@/components/Home.module.css'
import Topic from '@/components/UI/Topic';
import TagLink from "@/components/TagLink";
import { TagContent } from "@/lib/tags";

type Props = {
    tags: TagContent[];
  };
      const Topics: React.FC<Props> = ({tags}) => {
    return (<div className="flex mb-4 w-full">
    <div className="w-full h-auto">
    <ul className="flex justify-around flex-wrap px-3 pb-3 bg-white rounded-lg dark:border-none border border-grayish dark:bg-midnightish h-auto">
    {tags.map((it, i) => (
<li key={i} style={{width: '32.5%'}} className="flex justify-center rounded-lg mt-3 dark:bg-evening bg-daylight dark:hover:bg-lightnight dark:text-white inline-block h-1/3 p-6 pt-4">            <TagLink tag={it} />
</li>
))}
</ul>
</div>
    </div>
    )
    }

export default Topics