import { Link } from "react-router-dom";
import styles from './UserRecipes.module.css';

export const UserSrecipes = () => {
    return (
        <>
        //TODO: check if the user have recipes or no 
            <div className={styles.noRecipesContainer}>
                <h2>You have not added any recipes yet. If you want to add,  <Link to="/create" className={styles.link}>
                    click here!
                </Link>
                    <img src={process.env.PUBLIC_URL + '/images/clickIcon.png'} />
                </h2>
            </div>
        </>
    )
}