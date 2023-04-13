import { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from './catalogue-item/CatalogueItem.module.css';
import * as recipeService from "../../services/RecipeService";
import { CatalogueItem } from './catalogue-item/CatalogueItem';

export const Catalogue = ({ recipeType }) => {
    const [recipeByType, setrecipeByType] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    useEffect(() => {
        setLoadingSpinner(true);

        recipeService.getRecipesByType(recipeType)
            .then(result =>
                setrecipeByType(result))

        setTimeout(() => {
            setLoadingSpinner(false);
        }, 1000); //1sec
    }, []);

    return (
        <>
            {loadingSpinner
                ? <div className={styles.loadingSpinner}>
                    <h1>Loading</h1>
                    <PropagateLoader
                        color={"#7c94ac"}
                        loading={loadingSpinner}
                        size={30}
                    />
                </div>
                : <div className={styles.catalogue}>
                    {recipeByType.length > 0
                        ? recipeByType.map(x => <CatalogueItem key={x.id} recipe={x} />)
                        : <h3>No recipes in this category yet!</h3>
                    }
                </div>
            }
        </>

    );
}