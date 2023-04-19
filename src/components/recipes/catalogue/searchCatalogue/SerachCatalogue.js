import { useState, useEffect } from 'react';
import styles from '../Catalogue.module.css';
import * as recipeService from "../../../services/RecipeService";
import { CatalogueItem } from '../catalogue-item/CatalogueItem';


export const SearchCatalogue = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [searchData, setSerachData] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        recipeService.getAll()
            .then(result =>
                setAllRecipes(result));
    }, []);


    const onSubmitHandler = (ev) => {
        ev.preventDefault();

        const { search } = Object.fromEntries(new FormData(ev.target));
        setSerachData(search);
        setIsClicked(true);
    };

    let resultRecipes = allRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchData.toLowerCase()));

    return (
        <>
            <form onSubmit={onSubmitHandler} className={styles.searchForm}>
                <h2>What are you looking for?</h2>
                <input
                    type="search"
                    name="search"
                    id="serach"
                    placeholder="Enter recipe..."
                />
                <button>Search</button>
            </form>

            {isClicked
                ? <div className={styles.catalogue}>
                    {resultRecipes?.length > 0
                        ? resultRecipes.map(x => <CatalogueItem key={x.id} recipe={x} />)
                        : <div className={styles.noResults}>

                            <h2>  <img src={process.env.PUBLIC_URL + '/images/notFoundIcon.png'} />  No results!</h2>
                        </div>
                    }
                </div>
                : <> </>
            }
        </>
    );
}