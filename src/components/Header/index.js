import React, { useState } from 'react';
import './index.css';
import Navbar from '../Menu';
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
    const [sNav, setsNav] = useState(false)
    return(
        <>
            <div className="header">
                <div className="logo">
                    <img src="xxx" alt="Logo"/>
                    <h5>Sri Mandir</h5>
                </div>
                <div>
                    <GiHamburgerMenu onClick={() => setsNav(!sNav)} />
                </div>
            </div>
            {sNav && <Navbar show={sNav} />}
        </>
);
}

export default Header;
