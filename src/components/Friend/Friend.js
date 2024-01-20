import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Friend = (props) => {
    const {id,name, email, website, address} = props.friend;
    console.log(props);

    const fiendStyle = {
        border: '3px solid goldenrod',
        padding: '10x',
        borderRadius: '10px'
    }

    return (
        <div style={fiendStyle}>
            <h2>I am {name}</h2>
            <h3>Mail me: {email}</h3>
            <h3>Website: {website}</h3>
            <p><small>Address: {address.city}</small></p>
            <Link to={`/friend/${id}`}>Visit me</Link>
        </div>
    );
};

export default Friend;