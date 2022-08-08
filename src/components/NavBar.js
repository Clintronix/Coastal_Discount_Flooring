import React from "react"
import { NavLink } from "react-router-dom";
import Logo from "../images/CDF-Logo.jpeg"


export default function NavBar() {
    return (
        <header className="p-2 bg-gray-800 opacity-75 top-0 flex justify-center">
            <img src={Logo} className="h-16 rounded-full flex justify-start items-start"></img>
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
                        Available Flooring
                    </NavLink>
                    <NavLink to="/projects" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white">
                        Our Team
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}