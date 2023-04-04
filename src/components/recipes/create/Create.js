import { useNavigate } from "react-router-dom";

import * as recipeService from '../../service/RecipeService';

import styles from './Create.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Create = () => {
    const navigate = useNavigate();
    const onSubmitHandler = async (ev) => {

        ev.preventDefault();

        const recipeData = Object.fromEntries(new FormData(ev.target));
        recipeService.addNewRecipe(recipeData);
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
                        <label for="vegan">
                            <input type="checkbox" id="vegan" name="vegan" value="yes" />  Vegan
                            <span className={styles.checkmark}></span>
                        </label>
                        <label for="vegetarian">
                            <input type="checkbox" id="vegetarian" name="vegetarian" value="yes" />Vegetarian
                        </label>
                        <label for="highProtein">
                            <input type="checkbox" id="highProtein" name="highProtein" value="yes" />High Protein
                        </label>
                        <label for="lowSugar">
                            <input type="checkbox" id="lowSugar" name="lowSugar" value="yes" />Low Sugar
                        </label>
                        <label for="glutenFree">
                            <input type="checkbox" id="glutenFree" name="glutenFree" value="yes" />Gluten Free
                        </label>
                        <label for="lactoseFree">
                            <input type="checkbox" id="lactoseFree" name="lactoseFree" value="yes" />Lacotse Free
                        </label>
                        {/* <InputGroup className="mb-3">
                            <InputGroup.Checkbox  value="yes" name="vegan" />Vegan
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" value="yes" name="vegetarian" />Vegetarian
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" value="yes" name="highProtein" />High Protein
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" value="yes" name="lowSugar" />lowSugar
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" value="yes" name="glutenFree" />Gluten Free
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" value="yes" name="lactoseFree" />Lactose Free
                        </InputGroup> */}
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


