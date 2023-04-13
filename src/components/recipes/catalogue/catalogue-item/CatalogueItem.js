import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './CatalogueItem.module.css';
import { AuthContext } from '../../../../context/AuthContext';

export const CatalogueItem = ({ recipe }) => {
    const user = useContext(AuthContext);
    const userId = user?.uid;


    //TODO: remove "?", bcc it's impossible the recipe to be without auhtor
    const isCreator = userId === recipe.author?.id;
    console.log("user id", userId)
    return (
        <div className={styles.item}>
            <h4>{recipe.title}</h4>
            <img src={recipe.imageUrl} />
            <div className={styles.detailsDiv}>
                <Link to={`/details/${recipe.id}`}>
                    <button className={styles.detailsBtn}>Details</button>
                </Link>
            </div>

            {isCreator &&
                <div className={styles.editDelDiv}>
                    <Link to={`/edit/${recipe.id}`}>
                        <button className={styles.editBtn}>
                            <img src={process.env.PUBLIC_URL + '/images/editIcon.png'} />
                        </button>
                    </Link>

                    <Link to={`/delete/${recipe.id}`}>
                        <button className={styles.deleteBtn}>
                            <img src={process.env.PUBLIC_URL + '/images/deleteIcon.png'} />
                        </button>
                    </Link>
                </div>
            }
        </div>
    );
}