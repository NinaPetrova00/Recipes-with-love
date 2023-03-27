import styles from './Create.module.css';

export const CreateRecipe = () => {
    return (
        <form action="">
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
                    placeholder="1tbs sugar"
                // value="{}"
                // onChange={onChangeHandler}
                />
                <input
                    className={styles.addInputBtn} type="submit" value="Add ingredient" />

                <input
                    className={styles.inputRecipe}
                    type="text"
                    name="cookingSteps"
                    placeholder="Boil the water"
                // value="{}"
                // onChange={onChangeHandler}
                />
                <input
                    className={styles.addInputBtn} type="submit" value="Add cooking step" />

                <input
                    className={styles.createBtn}
                    type="submit"
                    value="Add recipe"
                />
            </div>
        </form>
    );
}