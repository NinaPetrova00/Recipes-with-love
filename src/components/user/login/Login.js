import styles from "./Login.module.css";

export const Login = () => {
    return (
        <form className={styles.userForm}>
            <div className={styles.container}>
                <h2>Login</h2>

                <label htmlFor="email"><b>Email</b></label>
                <input className={styles.email} type="text" id="email" placeholder="Enter Email" name="email" required />

                <label htmlFor="password"><b>Password</b></label>
                <input className={styles.password} type="password" id="password" placeholder="Enter Password" name="password" required />

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