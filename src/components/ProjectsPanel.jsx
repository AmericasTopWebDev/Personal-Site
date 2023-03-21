import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import ProjectCard from './ProjectCard'
import '../styles/ProjectsPanel.css'



{
    class ProjectCard {
        constructor(title, description, imageRef, link = "project_cards.html") {
            this.title = title;
            this.description = description;
            this.imageRef = imageRef;
            this.link = link;
        }
    }

    var projects = [];
    var card_index = 0;

    let project_tetris = new ProjectCard("Tetris", "Play Tetris! A simple demo in JS", "./projects/tetris.png", "https://americastopwebdev.github.io/Tetris/");
    let project_odin_recipes = new ProjectCard("Recipes Site", "The first page I ever built, with 1990s style html", "./projects/pbnj.jpg");
    let project_github_link = new ProjectCard("My GitHub Account", "See my other posted projects", "./projects/GitHub-Mark.png", "https://github.com/AmericasTopWebDev")
    let project_little_library = new ProjectCard("Local Library Catalog", "A simple site with backend to manage and view a library's book catalog. Uses Express and Mongoose, deployed on render (link may take a while). Part of an MDN Docs tutorial", "./projects/local_library.png", "https://local-library-site.onrender.com");
    let project_minitar = new ProjectCard("Minitar", "A tar archive utility capabale of extraction and archival. Written in C, developed in a team of two.", "./projects/GitHub-Mark.png", "https://github.umn.edu/harr2512/mini-tar")
    let project_swish = new ProjectCard("SWISH", "A simple shell featuring program execution and process management. Written in C, heavy use of system calls. Also developed in a team of two", "./projects/GitHub-Mark.png", "https://github.umn.edu/harr2512/SWISH")


    projects.push(project_little_library);
    projects.push(project_tetris);
    projects.push(project_minitar);
    projects.push(project_swish);
    projects.push(project_odin_recipes);
    projects.push(project_github_link);
}


function ProjectsPanel() {
    const [currCardIndex, setCurrCardIndex] = useState(0);

    const handleBack = () => {
        if (currCardIndex > 0) {
            setCurrCardIndex(currCardIndex - 1);
        }
    }

    const handleNext = () => {
        if (currCardIndex < projects.length - 1) {
            setCurrCardIndex(currCardIndex + 1);
        }
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start({ opacity: 1, scale: 1 })
        }
    }, [control, inView]);

    return (
        <motion.div className="bigtainer"
            ref={ref}
            animate={control}
            initial={{ opacity: 0, scale: 0 }} >
            <h1 className="title">Have a look at my other projects:</h1>
            <section className="bigtainer">
                <ProjectCard {...projects[currCardIndex]} />

                {/* <!-- prev/next --> */}
                <div className="container">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="prev-btn" onClick={handleBack}>
                        Prev
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="next-btn" onClick={handleNext}>
                        Next
                    </motion.button>
                </div>
            </section>
        </motion.div>
    )
}

export default ProjectsPanel
