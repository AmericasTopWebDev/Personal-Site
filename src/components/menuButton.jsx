import React, { useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline'

import '../styles/Navbar.css'
import '../styles/MenuButton.css'

function MenuButton(props) {
    //bring in state for displaying dropdown menu
    const [display, setDisplay] = useState('none')
    //get a reference to ourselves
    const menuRef = React.useRef(null)
    //handle click event
    function handleClick() {
        if (display === 'none') {
            setDisplay('block')
            const menuHeight = menuRef.current.scrollHeight;
            menuRef.current.style.maxHeight = `${menuHeight}px`
            const menuWidth = menuRef.current.scrollWidth;
            menuRef.current.style.maxWidth = `${menuWidth}px`
        }
        else {
            setDisplay('none')
            menuRef.current.style.maxHeight = '0px'
        }
    }


    const Icon = props.menuIcon
    var offset;
    if (props.offset === 'left') {
        offset = '-2%'
    }
    else if (props.offset === 'right') {
        offset = '-67%'
    }
    return (
        <div>
            <Icon onClick={handleClick} className='menuButton' />
            <ul id='dropdown' className={`${display}`}
                style={{ transform: `translateX(${offset})` }} ref={menuRef}>
                {/* build list items from props */}
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
                {/* if objects are passed, build them too! */}
                {props.menuObjects && props.menuObjects.map((item, index) => {
                    return (
                        <div key={index}> {item} </div>
                    )
                })}


            </ul>
        </div >


    )
}

export default MenuButton

