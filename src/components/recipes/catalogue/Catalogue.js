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

    return (
        <div className={styles.catalogue}>
            {recipeByType.length > 0
                ? recipeByType.map(x => <CatalogueItem key={x.id} recipe={x} />)
                : <h3>No recipes of this category yet!</h3>
            }
            {
                // <ul>
                //     <li>
                //     {
                //     recipeByType.map((x) => x.test.split(","))
                //     }
                //     </li>
                // </ul>

            }
        </div>
    );
}