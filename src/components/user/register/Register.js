import styles from "../login/Login.module.css";

export const Register = () => {
    return (
        <form className={styles.userForm}>
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
                    <a href="#">Login here</a>
                </p>

                <div className={styles.clearfix}>
                    <button type="submit" className={styles.loginbtn} name="login">Register</button>
                </div >
            </div>
        </form>
    );
}