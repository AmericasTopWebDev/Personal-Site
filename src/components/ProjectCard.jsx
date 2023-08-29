import React from 'react'
import { motion } from 'framer-motion'
import '../styles/ProjectsPanel.css'

function ProjectCard({ title, description, imageRef, link, altlink = null, linkText = null }) {
    if (altlink) console.log(altlink);
    return (
        <>
            <article className="project">

                <div className="img-container">
                    <a id="proj-link" href={link} target="_blank">
                        <img id="card-img" src={imageRef} alt="red panda" />
                    </a>
                </div>
                <h2 id="a-title"> {title} </h2>


                <p id="info">
                    {description}
                    {altlink && <a id="alt-link" href={altlink} target="_blank"> {linkText} </a>}
                </p>

            </article>
        </>
    )
}

export default ProjectCard
