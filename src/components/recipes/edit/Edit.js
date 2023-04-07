import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as recipeService from '../../services/RecipeService';

import styles from '../create/Create.module.css';

export const Edit = () => {
    const [currentRecipe, setCurentRecipe] = useState({})
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setCurentRecipe(result);
            })
    }, []);

    const onSubmitHandler = async (ev) => {

        ev.preventDefault();

        const updatedData = Object.fromEntries(new FormData(ev.target));
        updatedData.vegan = currentRecipe.vegan == "yes" ? "yes" : "no";
        // let v = ev.target.checked ? "yes" : "no";
        // updatedData.vegan = v;
        updatedData.vegetarian = updatedData.vegetarian ? "yes" : "no";
        updatedData.highProtein = updatedData.highProtein ? "yes" : "no";
        updatedData.lowSugar = updatedData.lowSugar ? "yes" : "no";
        updatedData.glutenFree = updatedData.glutenFree ? "yes" : "no";
        updatedData.lactoseFree = updatedData.lactoseFree ? "yes" : "no";
        // const uData = setChechboxesValue(currentRecipe);
        // const formData = new FormData(ev.target);
        // const title = formData.get('title');
        // console.log(title);
        // console.log({updatedData});
        // console.log("After edit")
        // console.log('title: ', updatedData.title);
        // console.log('vegan ', updatedData.vegan);
        // console.log('vegetarian ', updatedData.vegetarian);
        // console.log('highProtein ', updatedData.highProtein);
        // console.log('lowSugar ', updatedData.lowSugar);
        // console.log('glutenFree ', updatedData.glutenFree);
        // console.log('lacotoseFree ', updatedData.lactosefree);
        console.log("Ingredients: ", updatedData.ingredients);
        recipeService.editRecipe(recipeId, updatedData);

        // TODO: fix the navigate
        navigate('/catalogue/vegan');
    };

    // TODO: fix recipe types
    // const setChechboxesValue = (updatedData) => {
    //     updatedData.vegan = updatedData.vegan ? "yes" : "no";
    //     updatedData.vegetarian = updatedData.vegetarian ? "yes" : "no";
    //     updatedData.highProtein = updatedData.highProtein ? "yes" : "no";
    //     updatedData.lowSugar = updatedData.lowSugar ? "yes" : "no";
    //     updatedData.glutenFree = updatedData.glutenFree ? "yes" : "no";
    //     updatedData.lactoseFree = updatedData.lactoseFree ? "yes" : "no";
    //     console.log('vegan ', updatedData.vegan);
    //     console.log('vegetarian ', updatedData.vegetarian);
    //     console.log('highProtein ', updatedData.highProtein);
    //     console.log('lowSugar ', updatedData.lowSugar);
    //     console.log('glutenFree ', updatedData.glutenFree);
    //     console.log('lacotoseFree ', updatedData.lactoseFree);

    //     return updatedData;
    // };

    // console.log('title: ', currentRecipe.title);
    // console.log('vegan ', currentRecipe.vegan);
    // console.log('vegetarian ', currentRecipe.vegetarian);
    // console.log('highProtein ', currentRecipe.highProtein);
    // console.log('lowSugar ', currentRecipe.lowSugar);
    // console.log('glutenFree ', currentRecipe.glutenFree);
    // console.log('lacotseFree ', currentRecipe.lacoseFree);

    const handleChange = event => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
        } else {
            console.log('⛔️ Checkbox is NOT checked');
        }

        // todo: тук се взима стойността на новото цъкване/ънцъкване
        //Todo: променят се в базата, само трябва да направя така че да се визуализират, май се промянят няколко наведнъж
        // setIsSubscribed(current => !current);
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
                            <input type="checkbox" id="vegan" name="vegan" value={currentRecipe.vegan ? "yes" : "no"} checked={currentRecipe.vegan ? true : false} />  Vegan
                            <span className={styles.checkmark}></span>
                        </label>
                        <label htmlFor="vegetarian">
                            <input type="checkbox" id="vegetarian" name="vegetarian" value={currentRecipe.vegetarian ? "yes" : "no"}  checked={currentRecipe.vegetarian ? true : false}/>Vegetarian
                        </label>
                        <label htmlFor="highProtein">
                            <input type="checkbox" id="highProtein" name="highProtein" value={currentRecipe.highProtein ? "yes" : "no"} />High Protein
                        </label>
                        <label htmlFor="lowSugar">
                            <input type="checkbox" id="lowSugar" name="lowSugar" value={currentRecipe.lowSugar ? "yes" : "no"} />Low Sugar
                        </label>
                        <label htmlFor="glutenFree">
                            <input type="checkbox" id="glutenFree" name="glutenFree" value={currentRecipe.glutenFree ? "yes" : "no"} />Gluten Free
                        </label>
                        <label htmlFor="lactoseFree">
                            <input type="checkbox" id="lactoseFree" name="lactoseFree" value={currentRecipe.lactoseFree ? "yes" : "no"} />Lacotose Free
                        </label>

                    </div>

                </div>
                {/* //todo: checkboxes */}
                <input
                    className={styles.createBtn}
                    type="submit"
                    value="Add recipe"
                />
            </div>
        </form>
    );
}