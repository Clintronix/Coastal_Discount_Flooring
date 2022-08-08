import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {client} from "../Client"
import createImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"


const builder = createImageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source)
}


export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        client
            .fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage,
            body,
            "name": author->name,
            "authorImage": author->image
        }`)
            .then((data) => setSinglePost(data[0]))
            .catch(console.error)
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;


    return (
        <main className="min-h-screen">
            <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg">
                <div className="relative">
                    <header className="h-full flex justify-center flex">
                        <div className="w-2/3 bg-white bg-opacity-75 m-1 p-12 ">
                        <h1 className="flex justify-center text-3xl lg:text-6xl mb-4">
                                {singlePost.title}
                            </h1>
                            <div className="w-fit flex justify-start items-center">
                            <img 
                            src={urlFor(singlePost.authorImage).height(75).url()}
                            alt={singlePost.name}
                            className="flex justify-center w-100 h-100 rounded-full"
                            />
                            <p className="flex justify-center items-center pl-2 text-2xl">
                                {singlePost.name}
                            </p>
                            </div>
                        
                        </div>
                    </header>
                </div>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent
                    blocks={singlePost.body}
                    projectId="6s5gzirx"
                    dataset="production"
                    />
                </div>
                <div  className="h-800 grid md:grid-cols-2 lg:grid-cols-3 p-12 overflow-x-scroll">
                {singlePost && singlePost.mainImage.map((item, i) => (
                    <div className="mr-12">
                    <img className="block rounded" key={i} src={urlFor(item).width(500)} />
                    </div>
                ))}
                </div>
            </article>
        </main>
    )
}