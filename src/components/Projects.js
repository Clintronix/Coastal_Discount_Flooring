import React, { useEffect, useState } from "react"
import SanityClient from "../Client.js"

export default function Projects() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        SanityClient
        .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, [])
    
    
    return (
        <main className="min-h-fit p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Project Page</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={project.link}
                            alt={project.title}
                            rel="noopener noreferrer"
                            target="_blank"
                            >{project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Comapany</strong>{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                                <a 
                                href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-red-500 font-bold hover:underline hover:text-red-400"
                                >View The Project{" "}
                                <span role="img" aria-label="right pointer">👉</span>
                                </a>
                            </p>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
}