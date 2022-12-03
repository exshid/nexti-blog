import {Tag} from '@/components/Tag';
import { cx, slugify } from "@/lib/utils";
import Post from '@/components/Post'

const TopSection:React.FC = () => {
    return <div className="flex my-2">
    <div className="w-2/6 h-52 h-auto mr-4 dark:border-none border border-grayish rounded-lg">
    <Post title="About Us" subtitle="Know more about us">As you can see the paragraphs gracefully wrap around the floated image.</Post></div>
    <div className="w-4/6 h-52 h-auto dark:border-none border border-grayish rounded-lg">
    <Post title="About Us" subtitle="Know more about us">As you can see the paragraphs gracefully wrap around the floated image.  Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.</Post>
    </div>
    </div>
    }

export default TopSection