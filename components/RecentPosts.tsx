const RecentPosts: React.FC<{title:string, subtitle?:string, author:string, background:string}> = ({title,subtitle,author,background}) => {
return <figure style={{backgroundImage: `linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8)) fixed, url(${background}}) fixed`}} className="my-2 even:ml-2 rounded-lg odd:mr-2 flex flex-col items-center justify-center p-8 text-center bg-white dark:border-none border border-grayish hover:rounded-lg dark:bg-midnightish dark:hover:bg-lightnight transition hover:bg-daylight">
        <blockquote className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            <h3 className="inline-block bg-white dark:bg-midnightish hover:bg-daylight dark:hover:bg-lightnight hover:bg-darker-white dark:bg-midnightish hover:bg-daylight dark:hover:bg-lightnight transition rounded-lg text-lg font-semibold text-gray-900 dark:text-white p-2">{title}</h3>
            <p className="my-4 font-light bg-white dark:bg-midnightish hover:bg-daylight dark:hover:bg-lightnight hover:bg-darker-white dark:bg-midnightish hover:bg-daylight dark:hover:bg-lightnight transition rounded-lg p-2 overflow-hidden" style={{maxHeight:'60px'}}>{subtitle}</p>
        </blockquote>
    </figure>
}

export default RecentPosts