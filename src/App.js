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
      users: users,
      page: 1
    }
  }

  next = () => {
    this.setState({
      page: this.state.page + 1
    });
  };

  prev = () => {
    this.setState({
      page: this.state.page - 1
    });
  };

  render (){
    const filteredUser = this.state.users.filter(user => (
      user.id === this.state.page
    ));
    return(
      <div className="app-container">
        <Navbar />
        <Content filteredUser={filteredUser} />
        <Buttons next={this.next} prev={this.prev} />

      </div>
    )
  }

};
