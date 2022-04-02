import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Base({children, auth}) {
    return(
        <div className="relative min-h-screen flex items-stretch justify-center">
            <Nav auth={auth} />
            <div className="py-20 w-full">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
