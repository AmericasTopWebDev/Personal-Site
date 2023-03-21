import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Footer.css'

function Footer() {
    return (
        <section className="Contact">
            <motion.div className="signup"
                whileHover={{ scale: 1.1 }}>
                <div className="signup-stack">
                    <div className="dot">Further inquiry:</div>
                    <div style={{ fontSize: "25" }}> Click to view my resume
                    </div>
                </div>
                <a href="./skills/resume-02-07-23.pdf" target="_blank">
                    <motion.button id="resume-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                        View Resume
                    </motion.button>
                </a>
            </motion.div>
        </section>
    )
}

export default Footer
