import { useParams } from "react-router-dom";
import * as recipeSerive from '../../service/RecipeService';

import styles from "./Details.module.css";
import { useEffect, useState } from "react";

export const Details = () => {
    const { recipeId } = useParams();
    const [currentRecipe, setCurentRecipe] = useState({});

    useEffect(() => {
        recipeSerive.getOne(recipeId)
            .then(result => {
                setCurentRecipe(result);
            });
    }, []);

    return (

        <>
            <div className={styles.detailsItemContainer}>
                <h2>{currentRecipe.title}</h2>
                <img className={styles.detailsImg} src={currentRecipe.imageUrl} />
                <h3>Cooking time: {currentRecipe.cookingTime}</h3>
            </div >

            <div className={styles.recipeContainer}>
                <div className={styles.ingredientsContainer}>
                    <h3>Ingredients:</h3>
                    <ul>
                        {/* {currentRecipe.ingredients?.map(x => <li>{x}</li>)} */}
                        {(currentRecipe.ingredients?.split(/\r?\n/).map(x => <li>{x}</li>))}
                    </ul>
                </div>

                <div className={styles.howToContainer}>
                    <h3>How to prerate it:</h3>
                    <ul>
                        {/* {currentRecipe.cookingSteps?.map(x => <li>{x}</li>)} */}
                        {(currentRecipe.cookingSteps?.split(/\r?\n/).map(x => <li>{x}</li>))}
                    </ul>
                </div>
            </div>

            <div className={styles.comments}>
                <h3>Customers' comments:</h3>
                <ul>
                    <li>
                        <h5>Nikol</h5>
                        <p>Very good recipe!</p> </li>
                    <li>
                        <h5>Maria</h5>
                        <p>Easy and delicious!</p>
                    </li>
                </ul>
            </div>
        </>
    );
}