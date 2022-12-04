import { TableOfContents } from "next-mdx-toc"

export default function TOC({ tree }: { tree: TableOfContents }) {
  //@ts-ignore
    return tree?.items.length ? (
    <ul>
      {tree.items.map((item) => {
        return (
          <li key={item.title}>
            <a href={item.url}>{item.title}</a>
            {item.items?.length ? <TOC tree={item} /> : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
