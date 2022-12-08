import styles from '@/components/Home.module.css'
import Topic from '@/components/UI/Topic';
import TagLink from "@/components/TagLink";
import { TagContent } from "@/lib/tags";

type Props = {
    tags: TagContent[];
  };
  

    const Topics: React.FC<Props> = ({tags}) => {
    return (<div className="flex mb-4 w-full">
    <div className="w-2/6 h-auto mr-4">
    <ul className="block p-3 bg-white rounded-lg dark:border-none border border-grayish dark:bg-midnightish h-auto">
    {tags.map((it, i) => (
<li key={i} className="rounded-lg mb-3 dark:bg-evening bg-daylight dark:hover:bg-lightnight dark:text-white w-full h-1/3 p-6 pt-4">            <TagLink tag={it} />
</li>
))}
</ul>
</div>
    </div>
    )
    }

export default Topics