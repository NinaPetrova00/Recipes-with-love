import { Link } from "react-router-dom";
import { auth } from '../../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "../login/Login.module.css";
import * as authService from '../../services/AuthService';

export const Register = () => {
    const navigate = useNavigate();
    const onSubmitHandler = async (ev) => {
        ev.preventDefault();

        // const formData = new FormData(ev.target);

        // const email = formData.get('email');
        // const password = formData.get('password');
        // const confirmPassword = formData.get('confirm-password');
        const { email, password, repeatPassword } = Object.fromEntries(new FormData(ev.target));
        console.log(email, ",pass: ", password, ",repPass: ", repeatPassword);

        // if (password !== confirmPassword) {
        //     return;
        //     // or navigate('/404);
        //}

        // try {
        //     const user = await createUserWithEmailAndPassword(auth, email, password);
        //     console.log("NEW USER: ", user);
        // } catch (error) {
        //     console.log(error.message);
        // }
        authService.register(email, password);
        navigate('/');
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
                <input className={styles.repeatPassword} type="password" id="repeatPassword" placeholder="Re-enter password" name="repeatPassword" required />

                <p>
                    Already have an account?
                    <Link to="/login"> Login here</Link>
                </p>

                <div>
                    <button type="submit" className={styles.loginbtn} name="login">Register</button>
                </div >
            </div>

        </form>
    );
}