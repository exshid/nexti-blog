 const Post: React.FC<{title:string, subtitle:string}> = ({title,subtitle,children}) => {
return (<a href="#" className="block p-6 bg-white w-full transition rounded-lg hover:bg-daylight dark:bg-midnightish dark:hover:bg-lightnight h-full">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-midnightish dark:text-white">{title}</h5>
<p className="font-normal overflow-hidden text-muted" style={{height:'50px'}}>{subtitle}</p>
<p className="font-normal text-midnightish dark:text-white">{children}</p>
</a>
)
}

export default Post