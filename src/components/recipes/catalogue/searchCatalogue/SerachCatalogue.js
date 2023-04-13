import { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from '../catalogue-item/CatalogueItem.module.css';
import * as recipeService from "../../../services/RecipeService";
import { CatalogueItem } from '../catalogue-item/CatalogueItem';


export const SearchCatalogue = ({ searchData }) => {
    const [recipeBySearch, setRecipeBySearch] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    useEffect(() => {
        setLoadingSpinner(true);
        if (searchData != undefined) {
            recipeService.getRecipesBySearchBar(searchData)
                .then(result =>
                    setRecipeBySearch(result))
        }
        setTimeout(() => {
            setLoadingSpinner(false);
        }, 1000); //1sec
    }, []);

    console.log(recipeBySearch);
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
                    {recipeBySearch?.length > 0
                        ? recipeBySearch.map(x => x)
                        : <h3>No results!</h3>
                    }
                </div>
            }
        </>
    );
}