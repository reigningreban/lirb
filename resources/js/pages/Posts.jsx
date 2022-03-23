import { Link } from "@inertiajs/inertia-react";
import react, {useState, useEffect, useRef} from "react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { timestampToDate } from "../utils/Format";

function TableRow(props) {
    let post = props.post
    let index = (props.index + 1)
    return(
        <tr>
            <td className="border border-slate-500 p-3">{index}</td>
            <td className="border border-slate-500 p-3">{post.title}</td>
            <td className="border border-slate-500 p-3">{timestampToDate(post.created_at, true)}</td>
            <td className="border border-slate-500 p-3">
                <div className="grid grid-cols-3 gap-5">
                    <Link href={post.url}  className="btn rounded bg-blue-500 text-white px-2 py-1"><button className="w-full">View</button></Link>
                    <Link as="button" type="button" className="btn rounded bg-yellow-500 text-white px-2 py-1">Edit</Link>
                    <Link as="button" type="button" className="btn rounded bg-red-500 text-white px-2 py-1">Delete</Link>
                </div>
            </td>
        </tr>
    )
}

export default function Posts(props) {
    const [values, setValues] = useState({
      filter: "",
    })
    const cbRef = useRef();

    const setValuesCustom = (newValues, callback) => {
        cbRef.current = callback;
        setValues(newValues);
    };

    useEffect(() => {
        if (cbRef.current) {
            cbRef.current(values);
        }
        cbRef.current = undefined;
    }, [values]);

    function handleChange(e) {
      const key = e.target.id;
      const value = e.target.value
      setValuesCustom(values => ({
          ...values,
          [key]: value,
      }), function(values) {Inertia.post('/posts/filter', values, {preserveScroll: true,});})
    }

    return(
        <div className="relative min-h-screen">
            <Nav/>
            <div className="sm:px-48 px-10 pb-48">
                <h2 className="text-2xl my-10 text-center font-bold">Manage Posts...</h2>
                <table className="table-auto mt-10 border-collapse border border-slate-500 w-full">
                    <thead>
                        <tr>
                            <td colSpan={4}>
                                <div className="flex justify-end p-2 align-items-center">
                                    <div className="font-bold flex mr-5"><span className="inline">Filter Posts</span></div>
                                    <div>
                                        <input id="filter" type="text" className="w-48 rounded p-2 border border-blue-400" onChange={handleChange} value={values.filter} placeholder="filter" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-500 p-3">S/N</td>
                            <td className="border border-slate-500 p-3">Title</td>
                            <td className="border border-slate-500 p-3">Date and Time</td>
                            <td className="border border-slate-500 p-3">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.posts.map((post, index) => <TableRow post = {post} index = {index} key = {index} />)}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}
