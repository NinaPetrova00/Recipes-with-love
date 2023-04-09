import { Link } from "react-router-dom";
import styles from '../catalogue/catalogue-item/CatalogueItem.module.css';

import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import * as recipeService from '../../services/RecipeService';
import { CatalogueItem } from "../catalogue/catalogue-item/CatalogueItem";

export const UserSrecipes = () => {
    const user = useContext(AuthContext);
    const userId = user.uid;
    console.log("User id", userId);
    // console.log("User email", user.email);
    const [userRecipes, setUserRecipes] = useState([]);

    //TODO: fix this, it should be asyncronous 
    useEffect(() => {
        if (userId != undefined) {
            recipeService.getCurretUserRecipes(userId)
                .then(result =>
                    setUserRecipes(result));
        }
    });

    // useEffect(() => {

    //     recipeService.getCurretUserRecipes(userId)
    //         .then(result =>
    //             setUserRecipes(result));
    // }, []);

    // console.log("users recipes ", userRecipes);

    return (
        <>
            {/* <div className={styles.catalogue}>
                {recipeByType.length > 0
                    ? recipeByType.map(x => 
                    : <h3>No recipes in this category yet!</h3>
                }
            </div> */}
            {/* //TODO: check if the user have recipes or no  */}

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