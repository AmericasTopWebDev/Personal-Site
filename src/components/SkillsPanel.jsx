import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import '../styles/SkillsPanel.css'


function SkillsPanel() {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start({ y: 0 })
        }
    }, [control, inView]);

    return (
        <motion.div
            className="Skills"
            ref={ref}
            animate={control}
            initial={{ y: -100 }}
            transition={{ type: "spring", stiffness: 200, duration: 5 }} >
            <h2> Skills: </h2>
            <ul className="gallery">
                <li> <img id="JS" className="placeholder" src={"./skills/JS.png"} alt={"JS"} />
                    JavaScript</li>
                <li> <img id="React" className="placeholder" src={"./skills/React.png"} alt={"React"} />
                    React </li>
                <li> <img id="HTML" className="placeholder" src={"./skills/HTML.png"} alt={"HTML"} />
                    HTML </li>
                <li> <img id="CSS" className="placeholder" src={"./skills/CSS.png"} alt={"CSS"} />
                    CSS </li>
                <li> <img id="C" className="placeholder" src={"./skills/C.png"} alt={"C"} />
                    C </li>
                <li> <img id="Python" className="placeholder" src={"./skills/Python.png"} alt={"Python"} />
                    Python </li>
            </ul>
        </motion.div>
    )
}

export default SkillsPanel
