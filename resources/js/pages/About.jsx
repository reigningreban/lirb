import Base from "@/Layouts/Base";
import react from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About = (props) => {
    return(
        <div>
            <h1 className="text-2xl text-center font-bold">An ABout Page cus... why not?</h1>
        </div>
    )
}

About.layout = page => <Base children={page} auth = {page.props.auth}/>

export default  About
