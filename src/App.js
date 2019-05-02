import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import users from './data'


//Components
import Navbar from './Components/Navbar/Navbar'
import Content from './Components/Content/Content'
import Buttons from './Components/Buttons/Buttons'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      users: users

    }
  }


  render (){
    return(
      <div className="app-container">
        <Navbar />
        <Content />
        <Buttons />

      </div>
    )
  }

};
