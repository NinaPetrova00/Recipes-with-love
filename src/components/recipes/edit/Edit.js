import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as recipeService from '../../services/RecipeService';

import styles from '../create/Create.module.css';

export const Edit = () => {
    const [currentRecipe, setCurentRecipe] = useState({})
    const { recipeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setCurentRecipe(result);
            })
    }, []);

    // console.log('Current recipe:');
    // console.log('Current recipe: vegan ', currentRecipe.vegan);
    // console.log('Current recipe: vegetarian ', currentRecipe.vegetarian);
    // console.log('Current recipe: highProtein ', currentRecipe.highProtein);
    // console.log('Current recipe: lowSugar ', currentRecipe.lowSugar);
    // console.log('Current recipe: glutenFree ', currentRecipe.glutenFree);
    // console.log('Current recipe: lacotseFree ', currentRecipe.lactoseFree)



    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isHighProtein, setIsHighProtein] = useState(false);
    const [isLowSugar, setIsLowSugar] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const onSubmitHandler = async (ev) => {

        ev.preventDefault();

        const updatedData = Object.fromEntries(new FormData(ev.target));

        updatedData.vegan = isVegan ? "yes" : "no";
        updatedData.vegetarian = isVegetarian ? "yes" : "no";
        updatedData.highProtein = isHighProtein ? "yes" : "no";
        updatedData.lowSugar = isLowSugar ? "yes" : "no";
        updatedData.glutenFree = isGlutenFree ? "yes" : "no";
        updatedData.lactoseFree = isLactoseFree ? "yes" : "no";

        recipeService.editRecipe(recipeId, updatedData);

        navigate('/catalogue/myRecipes');
    };


    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.createContainer}>
                <h1>Edit your recipe</h1>

                <label htmlFor="title">Title</label>
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Recipe title"
                    defaultValue={currentRecipe.title}
                />

                <label htmlFor="imageUrl">ImageUrl</label>
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Recipe imageUrl"
                    defaultValue={currentRecipe.imageUrl}
                />

                <label htmlFor="cookingTime">Cooking time</label>
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="cookingTime"
                    name="cookingTime"
                    placeholder="Cooking time"
                    defaultValue={currentRecipe.cookingTime}
                />

                <label htmlFor="ingredients" className={styles.customLabel}>
                    Please, write every ingredient on new line!</label>
                <textarea
                    name="ingredients"
                    id="ingredients"
                    placeholder="Ingredients"
                    defaultValue={currentRecipe.ingredients}>
                </textarea>

                <label htmlFor="cookingSteps" className={styles.customLabel}>
                    Please, write every cooking step on new line!</label>
                <textarea
                    name="cookingSteps"
                    id="cookingSteps"
                    placeholder="Cooking steps"
                    defaultValue={currentRecipe.cookingSteps} >
                </textarea>


                {/* //TODO: check if onclick is clicked */}

                <div className={styles.recipeTypeContainer}>
                    <h4>Choose recipe's type</h4>
                    <div className={styles.recipeTypeSwitch}>
                        <label htmlFor="vegan">
                            <input type="checkbox" id="vegan" name="vegan" checked={isVegan} onChange={(ev) => setIsVegan(ev.target.checked)} />  Vegan
                            <span className={styles.checkmark}></span>
                        </label>
                        <label htmlFor="vegetarian">
                            <input type="checkbox" id="vegetarian" name="vegetarian" checked={isVegetarian} onChange={(ev) => setIsVegetarian(ev.target.checked)} />Vegetarian
                        </label>
                        <label htmlFor="highProtein">
                            <input type="checkbox" id="highProtein" name="highProtein" checked={isHighProtein} onChange={(ev) => setIsHighProtein(ev.target.checked)} />High Protein
                        </label>
                        <label htmlFor="lowSugar">
                            <input type="checkbox" id="lowSugar" name="lowSugar" checked={isLowSugar} onChange={(ev) => setIsLowSugar(ev.target.checked)} />Low Sugar
                        </label>
                        <label htmlFor="glutenFree">
                            <input type="checkbox" id="glutenFree" name="glutenFree" checked={isGlutenFree} onChange={(ev) => setIsGlutenFree(ev.target.checked)} />Gluten Free
                        </label>
                        <label htmlFor="lactoseFree">
                            <input type="checkbox" id="lactoseFree" name="lactoseFree" checked={isLactoseFree} onChange={(ev) => setIsLactoseFree(ev.target.checked)} />Lacotose Free
                        </label>

                    </div>

                </div>
                {/* //todo: checkboxes */}
                <input
                    className={styles.createBtn}
                    type="submit"
                    value="Save recipe"
                />
            </div>
        </form>
    );
}