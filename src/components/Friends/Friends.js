import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friend.css'

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])


    return (
        <div>
            <h2>I have {friends.length} Friends</h2>
            <div className='friend-container'>
            {
                friends.map(friend => <Friend
                    key = {friend.key}
                    friend = {friend}
                    >
                </Friend>)
            }
            </div>
            
        </div>
    );
};

export default Friends;