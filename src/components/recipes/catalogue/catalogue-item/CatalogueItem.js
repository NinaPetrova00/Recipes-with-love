import { Link } from 'react-router-dom';
import * as recipeService from '../../../services/RecipeService';

import styles from './CatalogueItem.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';

export const CatalogueItem = ({ recipe }) => {
    const user = useContext(AuthContext);

    const isCreator = user.uid === recipe.creatorId;
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