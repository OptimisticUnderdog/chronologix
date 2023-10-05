import React, { Component } from 'react';
import firebase from './config/fire.js';
import './login.css';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname:"",
            email: "",
            password: ""
        };
    }

    signup = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Signed up user:", user);
            })
            .catch((error) => {
                console.error("Signup error:", error);
            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div class="hero">
                <div className="form-container">
                {this.state.showSignup ? (
                <Signup />
                ) : (
                    <form className="form">
                    <h2>Sign-Up</h2>
                    
                    <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChange}
                        value={this.state.name}>
                    </input>

                    <input
                        type="surname"
                        id="surname"
                        name="surname"
                        placeholder="Surname"
                        onChange={this.handleChange}
                        value={this.state.surname}>
                    </input>


                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email}>
                    </input>


                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}>
                    </input>
                <button onClick={this.login}>
                 Submit
                </button>
            </form>
          )}
            <p>
                Already have an account? <a onClick={this.handleSignupClick}>Login</a>
            </p>
            </div>
        </div>
        );
    }
}

