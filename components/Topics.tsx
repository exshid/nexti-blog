import Post from '@/components/Post';
import styles from '@/components/Home.module.css'
import Topic from '@/components/UI/Topic';


const Topics: React.FC = () => {
return (<div className="flex mb-4 w-full">
<div className="w-2/6 h-auto mr-4">
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