import react from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { timestampToDate } from "../utils/Format";

export default function Post(props) {
    let post = props.post
    return(
        <div className="relative">
            <Nav/>
            <div className="px-10 sm:px-48 py-20 flex justify-center flex-wrap">
                <h1 className="font-bold text-center text-4xl w-full capitalize">{post.title}</h1>
                <img src={post.imagelink} alt={`image for ${post.title}`} className="w-4/5 my-10" />
                <div className="w-3/4">
                    <div dangerouslySetInnerHTML={{__html: post.body}}></div>
                    <p className="text-sm text-right text-gray-500 mt-5"> - {timestampToDate(post.created_at)}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
