import Link from "next/link";
import Image from "next/future/image";
import { slugify } from "@/lib/utils";

const RecentPosts: React.FC<{title:string, subtitle?:string, author:string, background:string, slug:string, alt:string}> = ({title,subtitle,author,background, slug, alt}) => {
return <Link href={`/posts/${slugify(slug)}`}><a className='my-2 relative md:even:ml-2 md:odd:mr-2 rounded-lg' style={{height:'190px'}}><Image
className='recent-image rounded-lg'
src={background}
height={200}
width={720}
alt={alt}
/>
<figure style={{position: 'absolute', height: '190px', background: 'linear-gradient(70deg, rgba(20, 20, 20, 1), rgba(20, 20, 20, 0))'}} className="transition group recent-posts rounded-lg flex flex-col items-center justify-center px-8 text-center dark:border-none border border-grayish transition">
                <blockquote className="max-w-2xl mx-auto text-left text-white">
            <h3 className="inline-block group-hover:translate-x-1 transition font-bold transition rounded-lg text-xl sm:text-2xl lg:text-3xl text-white p-2">{title}</h3>
            <p className="hidden lg:block font-light transition rounded-lg p-2 overflow-hidden" style={{maxHeight:'60px'}}>{subtitle}</p>
        </blockquote>
    </figure>
    </a>
    </Link>
}

export default RecentPosts