import { Link } from "react-router-dom";
import { auth } from '../../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

import styles from "../login/Login.module.css";

export const Register = () => {

    const onSubmitHandler = async (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        // if (password !== confirmPassword) {
        //     return;
        //     // or navigate('/404);
        //}

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className={styles.userForm} onSubmit={onSubmitHandler}>
            <div className={styles.container}>
                <h2>Register</h2>

                <label htmlFor="email"><b>Email</b></label>
                <input className={styles.email} type="text" id="email" placeholder="Enter Email" name="email" required />

                <label htmlFor="password"><b>Password</b></label>
                <input className={styles.password} type="password" id="password" placeholder="Enter Password" name="password" required />

                <label htmlFor="repeatPassword"><b>Repeat password</b></label>
                <input className={styles.repeatPassword} type="repeatPassword" id="repeatPassword" placeholder="Re-enter password" name="repeatPassword" required />

                <p>
                    Already have an account?
                    <Link to="/login"> Login here</Link>
                </p>

                <div className={styles.clearfix}>
                    <button type="submit" className={styles.loginbtn} name="login">Register</button>
                </div >
            </div>
        </form>
    );
}