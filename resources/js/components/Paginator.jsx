import react from "react";
import { Link } from "@inertiajs/inertia-react";
import { decodeEntity } from "../utils/Format";

function PageLink(props) {
    let link = props.link;
    if (link.url == null || link.active) {
        return(
            <li key={link.label} className="border-r border-blue-600 last:border-r-0"><button type="button" className={`h-10 px-5 transition-colors duration-150 ${link.active ? `text-white bg-blue-600 border border-r-0 border-blue-600 focus:shadow-outline` :`text-blue-600 focus:shadow-outline hover:bg-blue-100`}`}>{decodeEntity(link.label)}</button></li>
        )
    }else{
        return(
            <li className="border-r border-blue-600 last:border-r-0"><Link href={link.url} only={['posts']}><button className="h-10 px-5 transition-colors duration-150 text-blue-600 focus:shadow-outline hover:bg-blue-100"> {decodeEntity(link.label)}</button></Link></li>
        )
    }
}

export default function Paginator(props) {
    let links = props.links;
    return(
        <nav className="border border-blue-600 rounded">
          <ul className="inline-flex">
            {props.links.map((link) => <PageLink link={link} key={link.label} />)}
          </ul>
        </nav>
    )
}
