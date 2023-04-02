import styles from './catalogue-item/CatalogueItem.module.css';
import * as recipeService from "../../service/RecipeService";
import { CatalogueItem } from './catalogue-item/CatalogueItem';
import { useState, useEffect } from 'react';

export const Catalogue = ({ recipeType }) => {
    const [recipeByType, setrecipeByType] = useState([]);

    useEffect(() => {
        recipeService.getRecipesByType(recipeType)
            .then(result =>
                setrecipeByType(result));
    }, []);

    console.log(recipeByType);
    return (
        <div className={styles.catalogue}>
            {recipeByType.length > 0
                ? recipeByType.map(x => <CatalogueItem key={x.id} recipe={x} />)
                : <h3>No recipes yet!</h3>
            }
        </div>

        // <div className={styles.catalogue}>
        //     {veganRecipes.length > 0
        //         ? veganRecipes.map(x => <CatalogueItem key={x.id} recipe={x} />)
        //         : <h3>No recipes yet!</h3>
        //     }
        // </div>
    );
}