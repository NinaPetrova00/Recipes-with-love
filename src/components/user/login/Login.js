import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import * as authService from '../../services/AuthService';

export const Login = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (ev) => {
        ev.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(ev.target));

        authService.login(email, password);
        navigate('/');
    };

    return (
        <form className={styles.userForm} onSubmit={onSubmitHandler}>
            <div className={styles.container}>
                <h2>Login</h2>

                <label htmlFor="email"><b>Email</b></label>
                <input className={styles.email} type="text" id="email" placeholder="Enter Email" name="email" required />

                <label htmlFor="password"><b>Password</b></label>
                <input className={styles.password} type="password" id="password" placeholder="Enter Password" name="password" required />

                <p>
                    Don't have an account?
                    <Link to="/register">Register here</Link>
                </p>

                <div>
                    <button
                        type="submit"
                        className={styles.loginbtn}
                        name="login"
                    >
                        Login
                    </button>
                </div >
            </div>
        </form>
    );
}