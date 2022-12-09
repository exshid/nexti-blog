const RecentPosts: React.FC<{title:string, subtitle?:string, author:string, background:string}> = ({title,subtitle,author,background}) => {
return <figure style={{background: `linear-gradient(70deg, rgba(20, 20, 20, 1), rgba(20, 20, 20, 0)), url(${background}})`}} className="my-2 even:ml-2 rounded-lg odd:mr-2 flex flex-col items-center justify-center p-8 text-center dark:border-none border border-grayish transition">
        <blockquote className="max-w-2xl mx-auto text-white">
            <h3 className="inline-block  transition rounded-lg text-lg font-semibold text-white p-2">{title}</h3>
            <p className="my-4 font-light  transition rounded-lg p-2 overflow-hidden" style={{maxHeight:'60px'}}>{subtitle}</p>
        </blockquote>
    </figure>
}

export default RecentPosts