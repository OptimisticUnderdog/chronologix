import React, { Component } from 'react'
import firebase from './config/fire';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    logout = () =>{
        firebase.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>Welcome to ChronoLogix</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}