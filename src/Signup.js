import React, { Component } from 'react';
import firebase from './config/fire.js';
import './Signup.css';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <div className="signup">
                <form className="form-container">
                    <h2>Sign-Up</h2>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        />
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        />
                    <button onClick={this.signup}>Submit</button>
                </form>
            </div>
        );
    }
}
