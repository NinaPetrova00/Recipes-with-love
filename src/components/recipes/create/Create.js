import * as recipeService from '../../service/RecipeService';
import RecipeTypeSwitch from './RecipeTypeSwitch';

import styles from './Create.module.css';

export const Create = () => {

    const onSubmitHandler = async (ev) => {
        ev.preventDefault();
        const recipeData = Object.fromEntries(new FormData(ev.target));

        recipeService.addNewRecipe({ "title": "pancake" });

        /*
                gameService.create(gameData)
            .then(result => {
                addGameHandler(result);
            });
             */
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

                <label htmlFor="image" />
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Recipe image"
                />

                <label htmlFor="time" />
                <input
                    className={styles.inputRecipe}
                    type="text"
                    id="time"
                    name="time"
                    placeholder="Cooking time"
                />

                <input
                    className={styles.inputRecipe}
                    type="text"
                    name="ingredient"
                    placeholder="Ingredients"
                // value="{}"
                // onChange={onChangeHandler}
                />
                <input
                    className={styles.addInputBtn} type="submit" value="Add ingredient" />

                <input
                    className={styles.inputRecipe}
                    type="text"
                    name="cookingSteps"
                    placeholder="Cooking steps"
                // value="{}"
                // onChange={onChangeHandler}
                />
                <input
                    className={styles.addInputBtn} type="submit" value="Add cooking step" />


                <div className={styles.recipeTypeContainer}>
                    <h4>Choose recipe's type</h4>
                    <div className={styles.recipeTypeSwitch}>
                        <RecipeTypeSwitch></RecipeTypeSwitch>
                    </div>
                </div>


                <input
                    className={styles.createBtn}
                    type="submit"
                    value="Add recipe"
                //  onClick={addRecipe}
                />
            </div>
        </form>
    );
}


