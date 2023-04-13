import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Delete.module.css';
import * as recipeService from '../../services/RecipeService';
import { Details } from "../details/Details";

export const Delete = () => {
    const { recipeId } = useParams();
    const [currentRecipe, setCurentRecipe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setCurentRecipe(result);
            });
    }, []);

    const onDeleteHandler = () => {
        recipeService.deleteRecipe(recipeId);
        navigate('/');
    };

    const onCancelHandler = () => {
        navigate('/');
    };

    return (
        <>
            <div className={styles.confirmDeleteContainer}>

                <div className={styles.warningContainer}>
                    <img src={process.env.PUBLIC_URL + '/images/warning.png'} />
                    <h3>Are you sure you want to delete this recipe?</h3>
                </div>

                <button className={styles.edit} onClick={onCancelHandler}>Cancel</button>
                <button className={styles.del} onClick={onDeleteHandler}>Delete</button>
            </div>
            <Details />
        </>
    );

}