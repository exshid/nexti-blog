const RecentPosts: React.FC<{title:string, subtitle?:string, author:string, background:string}> = ({title,subtitle,author,background}) => {
return <figure style={{backgroundImage: background}} className="flex flex-col items-center justify-center p-8 text-center bg-white dark:border-none border border-grayish hover:rounded-lg dark:bg-midnightish dark:hover:bg-lightnight transition hover:bg-daylight">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="my-4 font-light">{subtitle}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>{author}</div>
            </div>
        </figcaption>    
    </figure>
}

export default RecentPosts