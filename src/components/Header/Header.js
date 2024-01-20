import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink
                to="/friends"
                activeStyle={activeStyle}
                >
                Friends
            </NavLink>
        </nav>
    );
};

export default Header;