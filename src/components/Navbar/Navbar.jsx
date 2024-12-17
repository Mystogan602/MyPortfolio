import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    const handleMenuChange = (newMenu) => {
        setMenu(newMenu);
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <ul className="nav-menu">
                {[
                    { label: 'Home', value: 'home' },
                    { label: 'About Me', value: 'about' },
                    { label: 'Services', value: 'services' },
                    { label: 'Portfolio', value: 'work' },
                    { label: 'Contact', value: 'contact' },
                ].map((item) => (
                    <li key={item.value}>
                        <AnchorLink className='anchor-link' offset={50} href={`#${item.value}`}>
                            <p onClick={() => handleMenuChange(item.value)}>
                                {item.label}
                            </p>
                            {menu === item.value ? <img src={underline} alt="" /> : <></>}
                        </AnchorLink>
                    </li>
                ))}
            </ul>
            <AnchorLink className='anchor-link' offset={50} href={`#contact`}>
                <div className="nav-connect">
                    Connect with me
                </div>
            </AnchorLink>
        </div>
    )
}

export default Navbar
