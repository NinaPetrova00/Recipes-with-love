import styles from "./Login.module.css";

export const Login = () => {
    return (
        <form>
            <div className={styles.container}>
                <h2>Login</h2>

                <label for="email"><b>Email</b></label>
                <input type="text" id="email" placeholder="Enter Email" name="email" required />

                <label for="password"><b>Password</b></label>
                <input type="password" id="password" placeholder="Enter Password" name="password" required />

                <p>
                    Don't have an account?
                    <a href="#"> Sign up here</a>
                </p>

                <div className={styles.clearfix}>
                    <button type="submit" className={styles.loginbtn} name="login">Login</button>
                </div >
            </div>
        </form>
    );
}