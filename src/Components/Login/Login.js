import React, { Component } from 'react'
import './Login.css'
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { userLoginAction } from './../../Actions/User/action_user';
// import { withRouter } from 'react-router-dom';
import { showLoader } from '../../Actions/User/loaderAction';

const mapDispatchToProps = (dispatch) => {
    return {
        loggedIn: (data) => dispatch(userLoginAction(data))
    }
    // bindActionCreators({ userLoginAction, showLoader }, dispatch);
};


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            submitted: false,
        };
    }


    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        // this.props.showLoader(true);
        console.log("props", this.props);
        e.preventDefault();

        this.setState({
            submitted: true,
            // submitted: (this.state.username == "admin" & this.state.password == "admin") ? true : false
        });
        this.props.loggedIn(true);
        // this.props.history.push("/dashboard");
        console.log("props ....");
    }
    render() {
        return (
            <div className='container'>
                <h1>Login Form</h1>
                <div className='userName'>
                    <label htmlFor='username'>
                        <input
                            type="email"
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInput}
                            placeholder="username"
                        /></label><br />

                </div>
                <div className='password'>
                    <label htmlFor='password'>
                        <input
                            type="password"
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInput}
                            placeholder="Password"
                        /></label><br />

                </div>
                <div>
                    <button className='loginButton'
                        type='button'
                        onClick={this.handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}



export default connect(null, mapDispatchToProps)(Login)

