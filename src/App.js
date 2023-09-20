import React, { Component } from 'react';
import firebase from './config/fire.js';
import Login from './Login.js';
import Home from './Home.js'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }else{
        this.setState({user:null})
      }
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    )
  }
}
