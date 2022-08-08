import React, { useEffect, useState } from "react"
//import { Link } from "react-router-dom"
import {client} from "../Client.js"
import createImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"


const builder = createImageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source)
}

export default function About() {
        const [authorData, setAuthor] = useState(null);

        useEffect(() => {
            client
                .fetch(`*[_type == "author"]{
                   name,
                   slug,
                   bio,
                   image{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`
            )
            .then((data) => setAuthor(data))
            .catch(console.error)
        }, []);

        return (
            <main className="p-12 overflow-auto">
                <section className="container mx-auto">
                    <h1 className="text-6xl text-center">Our Team</h1>
                {authorData && authorData.map((author, index) => (
                    <article className="relative shadow-xl bg-white p-16 mt-4">
                        <h2 className="cursive flex align-center justify-center">{author.name}</h2>
                        <img 
                            src={urlFor(author.image).height(150).url()}
                            alt={author.name}
                            className="rounded-full"
                        />
                        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                        <BlockContent
                        blocks={author.bio}
                        projectId="6s5gzirx"
                        dataset="production"
                        />
                        </div>
                    </article>
                    ))}
                </section>
            </main>
        )
    }