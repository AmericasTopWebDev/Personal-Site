import React, { useState } from 'react'
import { UserCircleIcon, MenuIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import Card from './BizCard'
import '../styles/Navbar.css'

import MenuButton from './menuButton'

function Navbar() {
    const menuItems = [
        'This is a dynamic component,',
        'To show I can add some life to a site!',
        'I think it\'s pretty cool!']
    const userItems = []
    const userObjects = [<Card />]

    const [display, setDisplay] = useState('none')
    function handleClick() {
        if (display === 'none') {
            setDisplay('block')
        }
        else {
            setDisplay('none')
        }
    }
    return (

        <nav className="navbar">
            <motion.div className="user"
                // inital={{ scale: 1 }}
                animate={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 400, duration: 2 }}
            >
                <MenuButton menuItems={userItems} menuIcon={UserCircleIcon} menuObjects={userObjects} offset={'left'} />
            </motion.div>
            <div className="menu">
                <MenuButton menuItems={menuItems} menuIcon={MenuIcon} offset={'right'} />
            </div>
        </nav>


    )
}

function NavItem(props) {
    return (
        <li className="nav-item" onClick={props.onClick}>
            <a href="#" className="icon-button">
                {props.icon}
            </a>
        </li>
    )
}

export default Navbar

