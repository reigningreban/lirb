import react from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paginator from "../components/Paginator";
import Post from "../components/Post";

export default function Home(props) {
    let posts = props.posts;
    return(
        <div className="">
            <div className="sm:px-48">
                <h1 className="text-2xl my-10 text-center font-bold">View Our Posts...</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
                    {posts.data.map((post) => <Post key = {post.id} post = {post}/> )}
                </div>
                <div className="flex justify-center mt-20">
                    <Paginator links = {posts.links}/>
                </div>
            </div>
        </div>
    )
}
//use layout for nav, footer and container
