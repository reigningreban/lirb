import { timestampToDate } from "@/utils/Format"
import { Link } from "@inertiajs/inertia-react"

export default function TableRow(props) {
    let post = props.post
    let index = (props.index + 1)
    return(
        <tr>
            <td className="border border-slate-500 p-3">{index}</td>
            <td className="border border-slate-500 p-3">{post.title}</td>
            <td className="border border-slate-500 p-3">{timestampToDate(post.created_at, true)}</td>
            <td className="border border-slate-500 p-3">
                <div className="grid grid-cols-3 gap-5">
                    <Link href={route('post.show', {uuid: post.id})}  className="rounded bg-blue-500 text-white py-1"><button className="w-full">View</button></Link>
                    <button as="button" type="button" className="rounded bg-yellow-500 text-white py-1" onClick={props.initEdit}>Edit</button>
                    <button as="button" type="button" className="rounded bg-red-500 text-white py-1" method="delete" onClick={props.initDelete}>Delete</button>
                </div>
            </td>
        </tr>
    )
}
