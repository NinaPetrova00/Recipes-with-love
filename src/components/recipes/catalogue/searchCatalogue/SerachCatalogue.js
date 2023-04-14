import { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from '../catalogue-item/CatalogueItem.module.css';
import * as recipeService from "../../../services/RecipeService";
import { CatalogueItem } from '../catalogue-item/CatalogueItem';


export const SearchCatalogue = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [searchData, setSerachData] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        recipeService.getAll()
            .then(result =>
                setAllRecipes(result));
    }, []);


    //TODO: set loading spinner
    // useEffect(() => {
    //     setLoadingSpinner(true);
    //     if (searchData != undefined) {

    //     }

    //     setTimeout(() => {
    //         setLoadingSpinner(false);
    //     }, 1000); //1sec
    // }, []);


    const onSubmitHandler = (ev) => {
        ev.preventDefault();

        const { search } = Object.fromEntries(new FormData(ev.target));
        setSerachData(search);
        setIsClicked(true);
    };

    let resultRecipes = allRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchData));

    return (
        <>
            <div className={styles.searchContainer}>
                <form onSubmit={onSubmitHandler}>
                    <h2>What are you looking for?</h2>
                    <input
                        type="search"
                        name="search"
                        id="serach"
                        placeholder="Search recipe"
                    />
                    {/* //TODO: change btn css */}
                    <button>Search</button>
                </form>
            </div>

            {isClicked
                ? loadingSpinner
                    ? <div className={styles.loadingSpinner}>
                        <h1>Loading</h1>
                        <PropagateLoader
                            color={"#7c94ac"}
                            loading={loadingSpinner}
                            size={30}
                        />
                    </div>
                    : <div className={styles.catalogue}>
                        {resultRecipes?.length > 0
                            ? resultRecipes.map(x => <CatalogueItem key={x.id} recipe={x} />)
                            : <div className={styles.noResults}>

                                <h2>  <img src={process.env.PUBLIC_URL + '/images/notFoundIcon.png'} />  No results!</h2>
                            </div>
                        }
                    </div>
                : <>
                </>
                // : <div className={styles.noResults}>

                //     <h2>Results will appear here!</h2>
                // </div>


            }
        </>
    );
}