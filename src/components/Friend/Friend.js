import React from 'react';

const Friend = (props) => {
    const {name, email, website, address} = props.friend;
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
        </div>
    );
};

export default Friend;