import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as recipeService from '../../service/RecipeService';
import Form from 'react-bootstrap/Form';

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

    const onSubmitHandler = async (ev) => {

        ev.preventDefault();

        const updatedData = Object.fromEntries(new FormData(ev.target));

        // const formData = new FormData(ev.target);
        // const title = formData.get('title');
        // console.log(title);
        // console.log({updatedData});
        console.log(updatedData.title);

        recipeService.editRecipe(recipeId, updatedData);
        console.log(Boolean(updatedData.vegan));
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
                    Please, write every step on new line!</label>
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
                        {/* <Form>
                            <Form.Check type="switch" id="vegan" name="vegan" label="Vegan" onLoad={checkRecipeType()} />
                            <Form.Check type="switch" id="custom-switch-vegetarian" label="Vegetarian" onLoad={checkRecipeType()} />
                            <Form.Check type="switch" id="custom-switch-highProtein" label="High Protein" onLoad={checkRecipeType()} />
                        </Form>
                        <Form>
                            <Form.Check type="switch" id="custom-switch-lowSugar" label="Low Sugar" onLoad={checkRecipeType()} />
                            <Form.Check type="switch" id="custom-switch-glutenFree" label="Gluten Free" onLoad={checkRecipeType()} />
                            <Form.Check type="switch" id="custom-switch-lactoseFree" label="Lactoce Free" onLoad={checkRecipeType()} /> */}
                        {/* <Form.Check type="switch" id="custom-switch" label="Regular recipe" /> */}
                        {/* </Form> */}

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