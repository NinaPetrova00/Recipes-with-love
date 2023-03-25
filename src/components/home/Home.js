import styles from './Home.module.css';

export const Home = () => {
    return (
        <>
            <div className={styles.text}>
                <h1>  Welcome to Recipes with love, where you can find awesome healthy recipies and meals!</h1>
            </div>
            <div className={styles.image}></div>
            {/* <img src="./images/background_5.jpg" alt="" /> */}
            <div className={styles.footer}>
                All rights reserved ©2023
            </div>
        </>
    );
}