import { useParams, Link } from "react-router-dom";
import * as recipeSerive from '../../services/RecipeService';

import styles from "./Details.module.css";
import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../../context/AuthContext";

export const Details = () => {
    const user = useContext(AuthContext);

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

            {/* //TODO: add comments */}
            {/* //TODO: if there is logged in user - add comment btn is opened */}


            <div className={styles.commentsContainer}>
                <div className={styles.userComment}>
                    {user ?
                        <>
                            <h3>Write your comment in the field below:</h3>
                            <textarea placeholder="Nice recipe!"></textarea>
                            <button>Add comment</button>
                        </>
                        : <p>
                            To add comment,
                            please <Link to="/login">login</Link> or <Link to="/register">register</Link></p>
                    }
                </div>
                <div className={styles.comments}>
                    <h3>Customers' comments:</h3>
                    <ul>
                        <li>
                            <h5>Nikol</h5>
                            <p>Very good recipe!</p> </li>
                        <li>
                            <h5>Maria</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, minima.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}