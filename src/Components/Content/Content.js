import React, { Component } from 'react'
import './Content.css'
import data from '../../data'

export default function Contents(props) {
    const mappedUser = props.filteredUser.map(user => {
        const userData = data[user.id - 1]
        return (
            <div>
                <h1 className="page-index">{user.id}/25</h1>
                <div className="user">
                    <h1 id="username">{userData.name.first} {userData.name.last}
                    </h1>
                    <div className="from">
                        <h1>From: <span>{userData.city}</span></h1><br></br>
                        <h1>Job Title: <span>{userData.title}</span></h1><br></br>
                        <h1>Employer: <span>{userData.employer}</span></h1><br></br>
                    </div>
                    <div className="movies">
                        <h1>Favorite Movies:</h1>
                        <ul>{userData.favoriteMovies}</ul>
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