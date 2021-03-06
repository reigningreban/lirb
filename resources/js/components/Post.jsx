import { Link } from "@inertiajs/inertia-react";
import react from "react";
import { timestampToDate } from "../utils/Format";

export default function Post(props) {
    let post = props.post;
    return(
        <Link href={post.url}>
            <div className="rounded-sm overflow-hidden shadow shadow-stone-200 hover:shadow-lg hover:scale-105 ease-in-out duration-300">
                <div className="h-40 w-full bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${post.imagelink})`}} role="image" alt={post.title}></div>
                <div className="p-6">
                    <p className="font-bold truncate ...">{post.title}</p>
                    <p className="text-xs text-gray-400 text-right mt-3">{timestampToDate(post.created_at)}</p>
                </div>
            </div>
        </Link>
    )
}
