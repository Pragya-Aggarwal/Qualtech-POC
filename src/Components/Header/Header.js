import React from 'react'
import { userLoginAction } from '../../Actions/User/action_user';
import { mli_logo } from '../../images/images'
import './Header.css';

export default function Header() {
    const onLogout = (e) => {
        e.preventDefault();
        this.props.history.push("/login");
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo">

                    <img src={mli_logo} alt="" />


                    {userLoginAction === true ? <form className="form-inline">
                        <button className="btn btn-outline-primary my-2 mr-sm-0" type="submit" onClick={e => onLogout(e)}>Logout</button>
                    </form> : null}
                </div>
            </nav>


        </div>
    )
}


