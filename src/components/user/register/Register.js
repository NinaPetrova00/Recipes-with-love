import styles from "../login/Login.module.css";

export const Register = () => {
    return (
        <form>
            <div className={styles.container}>
                <h2>Register</h2>

                <label for="email"><b>Email</b></label>
                <input type="text" id="email" placeholder="Enter Email" name="email" required />

                <label for="password"><b>Password</b></label>
                <input type="password" id="password" placeholder="Enter Password" name="password" required />

                <label for="repeatPassword"><b>Repeat password</b></label>
                <input type="repeatPassword" id="repeatPassword" placeholder="Re-enter password" name="repeatPassword" required />

                <p>
                    Already have an account?
                    <a href="#">Login here</a>
                </p>

                <div className={styles.clearfix}>
                    <button type="submit" className={styles.loginbtn} name="login">Login</button>
                </div >
            </div>
        </form>
    );
}