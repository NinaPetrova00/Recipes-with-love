import { Link, useNavigate } from 'react-router-dom';
import * as recipeService from '../../../service/RecipeService';

import styles from './CatalogueItem.module.css';

export const CatalogueItem = ({ recipe }) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        recipeService.deleteRecipe(recipe.id);

        navigate('/');
    };

    return (

        <div className={styles.item}>
            <h4>{recipe.title}</h4>
            <img src={recipe.imageUrl} />
            <div className={styles.detailsDiv}>
                <Link to={`/details/${recipe.id}`}>
                    <button className={styles.detailsBtn}>Details</button>
                </Link>
            </div>

            {/* //TODO: only show this button when this is current user's recipe */}
            <div className={styles.editDelDiv}>

                <Link to={`/edit/${recipe.id}`}>
                    <button className={styles.editBtn}>
                        <img src={process.env.PUBLIC_URL + '/images/editIcon.png'} />
                    </button>
                </Link>

                <button className={styles.deleteBtn} onClick={onClickHandler}>
                    <img src={process.env.PUBLIC_URL + '/images/deleteIcon.png'} />
                </button>

            </div>
        </div>
    );
}