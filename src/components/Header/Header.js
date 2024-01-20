import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/friends">Friends</Link>
        </div>
    );
};

export default Header;