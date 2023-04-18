import { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../catalogue/Catalogue.module.css';
import * as recipeService from '../../services/RecipeService';
import { AuthContext } from '../../../context/AuthContext';
import { CatalogueItem } from "../catalogue/catalogue-item/CatalogueItem";

export const UserRecipes = () => {
    const user = useContext(AuthContext);
    const userId = user.uid;
    const [userRecipes, setUserRecipes] = useState([]);

    useEffect(() => {
        if (userId != undefined) {
            recipeService.getCurretUserRecipes(userId)
                .then(result =>
                    setUserRecipes(result));
        }
    });
    //TODO: loader/spinner
    return (
        <>
            {userRecipes.length > 0
                ? <div className={styles.catalogue}>
                    {userRecipes.map(x => <CatalogueItem key={x.id} recipe={x} />)}
                </div>
                : <div className={styles.noRecipesContainer}>
                    <h2>You have not added any recipes yet. If you want to add,  <Link to="/create" className={styles.link}>
                        click here!
                    </Link>
                        <img src={process.env.PUBLIC_URL + '/images/clickIcon.png'} />
                    </h2>
                </div>
            }
        </>
    )
}