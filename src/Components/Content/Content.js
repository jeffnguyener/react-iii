import React, { Component } from 'react'
import './Content.css'

export default function Contents(props){
    const mappedUser = props.filteredUser.map(user => (
        <div>
           <h1> {user.id}/25</h1>
        </div>
    ))

    return (
        <div className="content-container">
            <div className="page-count-container">
                {mappedUser.id}
            </div>
        </div>
    )
};