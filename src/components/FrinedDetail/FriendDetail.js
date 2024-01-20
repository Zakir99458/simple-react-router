import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    // console.log(friendId);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    },[])

    return (
        <div>
            <h2>Detail of: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h1>Website: {friend.website}</h1>
            <h1>Company: {friend?.company?.name}</h1>
        </div>
    );
};

export default FriendDetail;