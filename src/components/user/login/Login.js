import { auth } from "../../../config/firebase";
import { loginUser } from 'firebase/auth';

import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import { useState } from "react";

export const Login = () => {


   

    return (
        <form className={styles.userForm} >
            <div className={styles.container}>
                <h2>Login</h2>

                <label htmlFor="email"><b>Email</b></label>
                <input className={styles.email} type="text" id="email" placeholder="Enter Email" name="email" required />

                <label htmlFor="password"><b>Password</b></label>
                <input className={styles.password} type="password" id="password" placeholder="Enter Password" name="password" required />

                <p>
                    Don't have an account?
                    <Link to="/register"> Register here</Link>
                </p>

                <div className={styles.clearfix}>
                    <button
                        type="submit"
                        className={styles.loginbtn}
                        name="login"
                       // onClick={loginHandler} 
                         >
                        Login
                    </button>
                </div >
            </div>
        </form>
    );
}