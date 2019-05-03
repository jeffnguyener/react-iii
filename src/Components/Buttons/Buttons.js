import React, { Component } from 'react'
import './Buttons.css'

export default function Buttons(props) {
    return (
        <div class="buttons-container">
            <buttons onClick={props.prev}>{`< Previous`}</buttons>
            <buttons onClick={props.next}>{`Next >`}</buttons>

        </div>
    )
};
