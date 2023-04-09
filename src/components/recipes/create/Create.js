import { useNavigate } from "react-router-dom";

import * as recipeService from '../../services/RecipeService';

import styles from './Create.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export const Create = () => {
    const navigate = useNavigate();
    const user = useContext(AuthContext);
    const creatorId = user.uid;

    const onSubmitHandler = (ev) => {

        ev.preventDefault();

        const recipeData = Object.fromEntries(new FormData(ev.target));
        // console.log('title: ', recipeData.title);
        // console.log('vegan ', recipeData.vegan);
        // console.log('vegetarian ', recipeData.vegetarian);
        // console.log('highProtein ', recipeData.highProtein);
        // console.log('lowSugar ', recipeData.lowSugar);
        // console.log('glutenFree ', recipeData.glutenFree);
        // console.log('lacotseFree ', recipeData.lactosefree);
        // console.log('testing: ', recipeData.highProtein ? "yes" : "no");
        // console.log('highProtein vol 2', recipeData.highProtein);
        recipeData.creatorId = creatorId;
        setChechboxesValue(recipeData);
        recipeService.addNewRecipe(recipeData);
    };

    const setChechboxesValue = (recipeData) => {
        recipeData.vegan = recipeData.vegan ? "yes" : "no";
        recipeData.vegetarian = recipeData.vegetarian ? "yes" : "no";
        recipeData.highProtein = recipeData.highProtein ? "yes" : "no";
        recipeData.lowSugar = recipeData.lowSugar ? "yes" : "no";
        recipeData.glutenFree = recipeData.glutenFree ? "yes" : "no";
        recipeData.lactoseFree = recipeData.lactoseFree ? "yes" : "no";
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.createContainer}>
                <h1>Add new recipe</h1>

                <label htmlFor="title">Title</label>
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Vegan pancakes"
                />

                <label htmlFor="imageUrl">ImageUrl</label>
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="https://kitchen.com/vegan-pancakes.jpg"
                />

                <label htmlFor="cookingTime">Cooking time</label>
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="cookingTime"
                    name="cookingTime"
                    placeholder="40 min"
                />

                <label htmlFor="ingredients" className={styles.customLabel}>
                    Please, write every ingredient on new line!</label>
                <textarea
                    name="ingredients"
                    id="ingredients"
                    placeholder="Ingredients:
                flour 
                sugar 
                eggs"></textarea>

                <label htmlFor="cookingSteps" className={styles.customLabel}>
                    Please, write every cooking step on new line!</label>
                <textarea
                    name="cookingSteps"
                    id="cookingSteps"
                    placeholder="Cooking steps:
                Wash 
                Cut 
                Bake"></textarea>

                <div className={styles.recipeTypeContainer}>
                    <h4>Choose recipe's type</h4>
                    <div className={styles.recipeTypeSwitch}>
                        <label htmlFor="vegan">
                            <input type="checkbox" id="vegan" name="vegan" value="yes" />  Vegan
                            <span className={styles.checkmark}></span>
                        </label>
                        <label htmlFor="vegetarian">
                            <input type="checkbox" id="vegetarian" name="vegetarian" value="yes" />Vegetarian
                        </label>
                        <label htmlFor="highProtein">
                            <input type="checkbox" id="highProtein" name="highProtein" value="yes" />High Protein
                        </label>
                        <label htmlFor="lowSugar">
                            <input type="checkbox" id="lowSugar" name="lowSugar" value="yes" />Low Sugar
                        </label>
                        <label htmlFor="glutenFree">
                            <input type="checkbox" id="glutenFree" name="glutenFree" value="yes" />Gluten Free
                        </label>
                        <label htmlFor="lactoseFree">
                            <input type="checkbox" id="lactoseFree" name="lactoseFree" value="yes" />Lacotse Free
                        </label>
                    </div>
                </div>

                <input
                    className={styles.createBtn}
                    type="submit"
                    value="Add recipe"
                />
            </div>
        </form>
    );
}


