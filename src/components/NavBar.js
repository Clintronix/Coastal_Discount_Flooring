import React from "react"
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <header className="bg-gray-800 opacity-75 top-0">
            <div className="container mx-auto flex justify-center">
                <nav>
                    <NavLink 
                    to="/" 
                    exact  
                    className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-white text-4xl font-bold tracking-wide "
                    activeClassName="text-black">
                        Home
                    </NavLink>
                    <NavLink 
                    to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white" 
                    >
                        Blog Post
                    </NavLink>
                    <NavLink to="/projects" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white">
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}