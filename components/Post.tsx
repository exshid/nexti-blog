
export const Post: React.FC = ({largTitle,subtitle,children}) => {
return (<a href="#" className="block p-6 bg-white rounded-lg hover:bg-slate-100 dark:bg-midnightish dark:hover:bg-lightnight h-full">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{props.largeTitle}</h5>
<p className="font-normal text-muted">{props.subtitle}</p>
<p className="font-normal text-neutral-800 dark:text-neutral-100">{props.children}</p>
</a>
)
}
