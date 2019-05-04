import React, { Component } from 'react'
import './Content.css'
import data from '../../data'

export default function Contents(props) {
    const mappedUser = props.filteredUser.map(user => {
        const userData = data[user.id - 1]
        return (
            <div>
                <h1 className="page-index"> {user.id}/25</h1>
                <div className="user">
                    <h1>{userData.name.first} {userData.name.last}
                    </h1>
                    <div className="from">
                        <h1>From</h1>{userData.city}
                    </div>
                </div>

            </div>
        )
    });





    return (
        <div className="content-container">
            {mappedUser}
        </div>
    )
};