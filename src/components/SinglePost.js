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
                    <header className="h-full flex justify-center flex justify-center items-center">
                        <div className="bg-white bg-opacity-75 m-1 p-12">
                        <img 
                            src={urlFor(singlePost.authorImage).url()}
                            alt={singlePost.name}
                            className="flex items-center-100 w-100 h-100 rounded-full"
                            />
                            {/* <div className="flex justify-center text-gray-800">
                            </div> */}
                            <h1 className="text-3xl lg:text-6xl mb-4">
                                {singlePost.title}
                            </h1>
                            <p className="flex justify-center items-center pl-2 text-2xl">
                                {singlePost.name}
                            </p>
                        </div>
                    </header>
                </div>
                {singlePost && singlePost.mainImage.map((item, i) => (
              <img key={i} src={urlFor(item)} />
                ))}
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent
                    blocks={singlePost.body}
                    projectId="6s5gzirx"
                    dataset="production"
                    />
                </div>
                
                {/* <img 
                        src={urlFor(singlePost.mainImage).url()}
                        alt={singlePost.title}
                        className="w-full h-full object-cover flex justify-center"
                        style={{ height: "800px" }}
                    /> */}
            </article>
        </main>
    )
}