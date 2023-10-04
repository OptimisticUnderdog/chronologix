import React, { Component } from 'react';
import './login.css';
import firebase from './config/fire.js';
import Signup from './Signup';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            showSignup: false,
        }
    }
    login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
        })
    }

    signup =(e) =>{
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSignupClick = () => {
        // When the "Register" link is clicked, set showSignup to true to render the Signup component
        this.setState({ showSignup: true });
    };


    render() {
        return (
            <div class="hero">
                <h1>Welcome to ChronoLogix</h1>
                <h3 class="sub-heading">Empowering Efficiency, Elevating Time.</h3>
                <div className="form-container">
                {this.state.showSignup ? (
                <Signup />
                ) : (
            <form className="form">
                <h2>Login</h2>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
                ></input>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
                ></input>
                <button onClick={this.login}>
                 Submit
                </button>
            </form>
          )}
          <a>Forgot password?</a>
          <a onClick={this.handleSignupClick}>Register</a> {/* Handle click to show the Signup form */}
            </div>
        </div>
        )
    }
}