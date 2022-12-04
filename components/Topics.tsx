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
    {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}

        <Topic/>
    </div>
    <div className="w-2/6 h-auto mr-4">
    <Topic/>
    </div>
    <div className="w-2/6 h-auto">
    <Topic/>
    </div>
    </div>
    )
    }

export default Topics