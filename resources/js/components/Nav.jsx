import react from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import Dropdown from "./Dropdown";

export default function Nav(props) {
    const {url, component} = usePage();
    return(
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 dark:bg-blue-800 fixed top-0 w-full">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href={route('home')} className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Test Blog</span>
                </Link>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-white">
                        <li>
                            <Link href={route('home')} className={`block py-2 pr-4 pl-3  md:border-0 hover:text-gray-300 ${component === 'Home' ? "underline" : ""}`}>Home</Link>
                        </li>
                        <li>
                            <Link href={route('about')} className={`block py-2 pr-4 pl-3 border-b md:border-0 hover:text-gray-300 ${component === 'About' ? "underline" : ""}`}>About</Link>
                        </li>
                        {props.auth.user ?
                            <li>
                                <Link href={route('posts.all')} className={`block py-2 pr-4 pl-3 border-b md:border-0 hover:text-gray-300 ${component === 'Posts' ? "underline" : ""}`}>Manage Posts</Link>
                            </li>
                            :
                            <li>
                                <Link href={route('login')} className={`block py-2 pr-4 pl-3 border-b md:border-0 hover:text-gray-300 ${url === '/login' ? "underline" : ""}`}>Login</Link>
                            </li>
                        }
                        {props.auth.user &&
                        <li>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {props.auth.user.name}

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
