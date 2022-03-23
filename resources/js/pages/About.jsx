import react from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function About(props) {
    return(
        <div className="min-h-screen relative">
            <Nav/>
            <h1 className="text-2xl my-10 text-center font-bold">An ABout Page cus... why not?</h1>
            <Footer/>
        </div>
    )
}
