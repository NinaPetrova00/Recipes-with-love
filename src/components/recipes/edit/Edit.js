import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as recipeService from '../../service/RecipeService';

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

    // function checkRecipeType() {
    //   //  let isVegan = currentRecipe.vegan ? true : false;
    //     let isVegetarian = currentRecipe.vegetarian ? true : false;
    //     let isHighProtein = currentRecipe.highProtein ? true : false;
    //     let isLowSugar = currentRecipe.lowSugar ? true : false;
    //     let isGlutenFree = currentRecipe.isGlutenFree ? true : false;
    //     let isLactoseFree = currentRecipe.isLactoseFree ? true : false;

    //     // if (isVegan) {
    //     //     document.getElementById("custom-switch-vegan").checked = true;
    //     // }
    //     if (isVegetarian) {
    //         document.getElementById("custom-switch-vegetarian").checked = true;
    //     }
    //     if (isHighProtein) {
    //         document.getElementById("custom-switch-highProtein").checked = true;
    //     }
    //     if (isLowSugar) {
    //         document.getElementById("custom-switch-lowSugar").checked = true;
    //     }
    //     if (isGlutenFree) {
    //         document.getElementById("custom-switch-glutenFree").checked = true;
    //     }
    //     if (isLactoseFree) {
    //         document.getElementById("custom-switch-lactoseFree").checked = true;
    //     }
    // }
    console.log('title: ', currentRecipe.title);
    console.log('vegan ', currentRecipe.vegan);
    console.log('vegetarian ', currentRecipe.vegetarian);
    console.log('highProtein ', currentRecipe.highProtein);
    console.log('lowSugar ', currentRecipe.lowSugar);
    console.log('glutenFree ', currentRecipe.glutenFree);
    console.log('lacotseFree ', currentRecipe.lactosefree);
    const onSubmitHandler = async (ev) => {

        ev.preventDefault();

        const updatedData = Object.fromEntries(new FormData(ev.target));

        // const formData = new FormData(ev.target);
        // const title = formData.get('title');
        // console.log(title);
        // console.log({updatedData});
        console.log("After edit")
        console.log('title: ', updatedData.title);
        console.log('vegan ', updatedData.vegan);
        console.log('vegetarian ', updatedData.vegetarian);
        console.log('highProtein ', updatedData.highProtein);
        console.log('lowSugar ', updatedData.lowSugar);
        console.log('glutenFree ', updatedData.glutenFree);
        console.log('lacotseFree ', updatedData.lactosefree);
        recipeService.editRecipe(recipeId, updatedData);

        // TODO: fix the navigate
        //navigate('/catalogue/vegan');
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
                            <input type="checkbox" id="vegan" name="vegan" value="yes" checked={currentRecipe.vegan} />  Vegan
                            <span className={styles.checkmark}></span>
                        </label>
                        <label htmlFor="vegetarian">
                            <input type="checkbox" id="vegetarian" name="vegetarian" value="yes" checked={currentRecipe.vegetarian} />Vegetarian
                        </label>
                        <label htmlFor="highProtein">
                            <input type="checkbox" id="highProtein" name="highProtein" value="yes" checked={currentRecipe.highProtein} />High Protein
                        </label>
                        <label htmlFor="lowSugar">
                            <input type="checkbox" id="lowSugar" name="lowSugar" value="yes" checked={currentRecipe.lowSugar} />Low Sugar
                        </label>
                        <label htmlFor="glutenFree">
                            <input type="checkbox" id="glutenFree" name="glutenFree" value="yes" checked={currentRecipe.glutenFree} />Gluten Free
                        </label>
                        <label htmlFor="lactoseFree">
                            <input type="checkbox" id="lactoseFree" name="lactoseFree" value="yes" checked={currentRecipe.lactosefree} />Lacotse Free
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