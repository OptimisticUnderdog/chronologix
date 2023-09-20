import React, { Component } from 'react';
import './login.css';
import firebase from './config/fire.js'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
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
    render() {
        return (
            <div class="login-container">
                <h1>Welcome to ChronoLogix</h1>
                <p>Empowering Efficiency, Elevating Time.</p>
                <form class="form">
                    <h2>Check-In</h2>
                    <input type="email" id="email" name="email" placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email}>
                    </input>
                    <input type="password" id="password" name="password" placeholder="Passsword"
                        onChange={this.handleChange}
                        value={this.state.password}>
                    </input>
                    <button onClick={this.login}>Submit</button>
                </form>
                <a>Forgot password?</a>
                <a>Register</a>
            </div>
        )
    }
}