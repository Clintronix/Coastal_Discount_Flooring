import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {client, urlFor} from "../Client.js"
import { Tile, Button  } from "@carbon/ibm-security";


export default function Post() {
        const [postData, setPost] = useState(null);

        useEffect(() => {
            client
                .fetch(`*[_type == "post"]{
                    title,
                    slug,
                    mainImage,
                    description,
                }`
            )
            .then((data) => setPost(data))
            .catch(console.error)
        }, []);

        return (
            <main className="p-12">
                <section className="container mx-auto">
                    <h1 className="text-5xl cursive flex justify-center">
                    Flooring in Stock
                    </h1>
                    <h2 className="text-lg text-gray-600 flex justify-center m-12">
                    <ul className="p-4 border-solid border-2 border-sky-600">
                        <li>
                        SPC Luxury Vinyl Flooring
                        </li>
                        <li>
                        Waterproof
                        </li>
                        <li>
                        Scratch Resistant
                        </li>
                        <li>
                        Double UV Coating - Aluminum Oxide
12 Mil Wear Layer - Stone Core
                        </li>
                        <li>
Advance Technology Mimics Natural Wood
                        </li>
                    </ul>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 p-12">
                        {postData && postData.map((post, index) => (
                        <Tile className="mr-10 border-solid border-4 hover:border-gray-50 rounded">
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <div className="block h-96 realtive rounded shadow leading-snug flex items-end justify-end" 
                                    key={index}
                                    style={{
                                        backgroundImage: `url(` + urlFor(post.mainImage && post.mainImage[0]) + `)`,
                                        height: '400px'
                                    }}>
                                    <Button className="pr-6 pb-6 w-fit">
                                        <h3 className="text-gray-50">{post.title}</h3>
                                        <p className="text-sm text-gray-50 bg-gray-400 bg-opacity-50">{post.description}</p>
                                    </Button>
                                </div>
                            </Link>
                        </Tile>
                        ))}
                    </div>
                </section>
            </main>
        )
    }