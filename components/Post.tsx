 const Post: React.FC<{title:string, subtitle:string}> = ({title,subtitle,children}) => {
return (<a href="#" className="block p-5 bg-white w-full transition rounded-lg hover:bg-daylight dark:bg-midnightish dark:hover:bg-lightnight h-full">
<h3 className="mb-2 text-2xl font-bold tracking-tight text-midnightish dark:text-white">{title}</h3>
<p className="font-normal text-muted">{subtitle}</p>
<p className="font-normal overflow-hidden text-midnightish dark:text-white" style={{height:'50px'}}>{children}</p>
</a>
)
}

export default Post