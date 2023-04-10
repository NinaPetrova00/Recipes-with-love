import { useParams, Link, useNavigate } from "react-router-dom";
import * as recipeService from '../../services/RecipeService';
import * as commentService from '../../services/CommentService';

import styles from "./Details.module.css";
import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../../context/AuthContext";

export const Details = () => {
    const user = useContext(AuthContext);
    const userEmail = user?.email;
    const userId = user?.uid;

    const { recipeId } = useParams();
    const [currentRecipe, setCurentRecipe] = useState({});
    const [currentComment, setCurrentComment] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setCurentRecipe(result);
            });
    }, []);

    useEffect(() => {
      
        commentService.getCurrentRecipeComments(recipeId)
            .then(result => {
                setCurrentComment(result);
            });
    }, []);

    //Add comment
    function onSubmitHandler(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const comment = formData.get('comment');

        commentService.addComment(userId, recipeId, comment);
        //TODO: decide where to navigate
        //  navigate('/catalogue/myRecipes');
        console.log("Current comment: ", currentComment);

    };

    //Check if user is the author 
    let isCurrentUserTheAuthor;
    if (userId == currentRecipe.author?.id) {
        isCurrentUserTheAuthor = true;
    } else {
        isCurrentUserTheAuthor = false;
    }


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

            <div className={styles.commentsContainer}>
                <div className={styles.userComment}>
                    {user
                        ? isCurrentUserTheAuthor
                            ? <h3 className={styles.userIsAuthor}>You cannot write comment on your own recipe!</h3>
                            : <>
                                <h3>Write your comment in the field below:</h3>
                                <form onSubmit={onSubmitHandler}>
                                    <textarea name="comment" placeholder="Nice recipe!" ></textarea>
                                    <button>Add comment</button>
                                </form>
                            </>
                        : <p>
                            To add comment,
                            please <Link to="/login">login</Link> or <Link to="/register">register</Link></p>
                    }
                </div>
                {/* //TODO: display real comments */}
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
                        {currentComment?.map(x => <li>{x.comment}</li>)}
                        {/* {currentGame.comments?.map(x =>
                            <li key={x} className="comment">
                                <p>{x}</p>
                            </li>
                        )}
                        
                        myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
                        */}
                    </ul>
                </div>

            </div>
        </>
    );
}