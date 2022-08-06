import React from "react"
import { SocialIcon } from "react-social-icons";


export default function Footer() {
    return (
        <footer className="bg-gray-800 opacity-75">
            <div className="min-h-fit container mx-auto flex justify-end items-end text-center p-4">
                <div>
                    <SocialIcon url="" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    bgColor="blue"
                    style={{height: 35, width: 35}}
                    />
                    <SocialIcon url="" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    bgColor="blue"
                    style={{height: 35, width: 35}}
                    />
                    <SocialIcon url="" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    bgColor="blue"
                    style={{height: 35, width: 35}}
                    />

                <p className="text-white">Created by Clinton Cregger 7/11/22</p>
                </div>
            </div>
        </footer>
    )
}