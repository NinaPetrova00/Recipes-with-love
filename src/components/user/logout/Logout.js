import { useNavigate, Link } from "react-router-dom";

import * as authService from '../../services/AuthService';

import styles from './Logout.module.css';

export const Logout = () => {
    const navigate = useNavigate();

    const onCancelHandler = () => {
        navigate('/');
    };

    const onLogoutHandler = () => {
        authService.logout();
        navigate('/');
    };

    return (
        <form className={styles.logoutForm}>

            <div className={styles.container}>
                <img src={process.env.PUBLIC_URL + '/images/logoutIcon.png'} />
                <h3>Are you sure you want to logout?</h3>

                <div className={styles.btnContainer}>
                    <button type="submit" className={styles.cancelBtn} name="cancel" onClick={onCancelHandler} >
                        Cancel
                    </button>

                    <button type="submit" className={styles.logoutBtn} name="login" onClick={onLogoutHandler}  >
                        Logout
                    </button>
                </div >
            </div>
        </form>
    );
}