import { useNavigate } from "react-router-dom";

import * as recipeService from '../../service/RecipeService';
import RecipeTypeSwitchCreate from './RecipeTypeSwitchCreate';

import styles from './Create.module.css';

export const Create = () => {
    const navigate = useNavigate();
    const onSubmitHandler = async (ev) => {

        ev.preventDefault();

        const recipeData = Object.fromEntries(new FormData(ev.target));
        recipeService.addNewRecipe(recipeData);

        navigate('/');
    };

    const addIngredientHandler = (ev) => {
        // ev.preventDefault();
        // const ingredients = new FormData(document.getElementById("ingredients"));
        recipeService.addIngredient();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.createContainer}>
                <h1>Add new recipe</h1>

                <label htmlFor="title" />
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Recipe title"
                />

                <label htmlFor="imageUrl" />
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Recipe imageUrl"
                />

                <label htmlFor="cookingTime" />
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="cookingTime"
                    name="cookingTime"
                    placeholder="Cooking time"
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
                    Please, write every step on new line!</label>
                <textarea
                    name="cookingSteps"
                    id="cookingSteps"
                    placeholder="Cooking steps:
                Wash 
                Cut 
                Bake"></textarea>

                {/* //todo: fix checkboxes */}
                <div className={styles.recipeTypeContainer}>
                    <h4>Choose recipe's type</h4>
                    <div className={styles.recipeTypeSwitch}>
                        <RecipeTypeSwitchCreate></RecipeTypeSwitchCreate>
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


