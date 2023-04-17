import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Details.module.css";
import * as recipeService from '../../services/RecipeService';
import * as commentService from '../../services/CommentService';
import { AuthContext } from "../../../context/AuthContext";

export const Details = () => {
    const user = useContext(AuthContext);
    const userEmail = user?.email;
    const userId = user?.uid;

    const { recipeId } = useParams();
    const [currentRecipe, setCurentRecipe] = useState({});
    const [currentComment, setCurrentComment] = useState({});

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setCurentRecipe(result);
            });
    }, []);

    useEffect(() => {
        let isMounted = true;

        commentService.getCurrentRecipeComments(recipeId)
            .then(result => {
                if (isMounted) {
                    setCurrentComment(result);
                }
            });

        return () => {
            isMounted = false;
        }
    }, []);

    //Add comment
    function onSubmitHandler(ev) {
        const formData = new FormData(ev.target);
        const comment = formData.get('comment');

        commentService.addComment(userId, userEmail, recipeId, comment);
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
            <div className={styles.tagsContainer}>
                <div className={styles.categoryDiv}>
                    <h5>Categories:</h5>
                    <img src={process.env.PUBLIC_URL + '/images/arrowIcon.png'} />
                </div>
                {currentRecipe.vegan == "yes" ? <div className={styles.tagsDiv}>Vegan</div> : <></>}
                {currentRecipe.vegetarian == "yes" ? <div className={styles.tagsDiv}>Vegetarian</div> : <></>}
                {currentRecipe.highProtein == "yes" ? <div className={styles.tagsDiv}>High Protein</div> : <></>}
                {currentRecipe.glutenFree == "yes" ? <div className={styles.tagsDiv}>Gluten Free</div> : <></>}
                {currentRecipe.lowSugar == "yes" ? <div className={styles.tagsDiv}>Low Sugar</div> : <></>}
                {currentRecipe.lactoseFree == "yes" ? <div className={styles.tagsDiv}>Lactose Free</div> : <></>}
            </div>

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
                            please <Link to="/login">login</Link> or <Link to="/register">register</Link>!
                        </p>
                    }
                </div>

                <div className={styles.comments}>
                    <h3>Customers' comments:</h3>
                    <ul>
                        {Object.keys(currentComment).length > 0
                            ?
                            currentComment.map(x =>
                                <li>
                                    <p>{x.comment}</p>
                                    <hr />
                                    <h5>By: {x.user.userEmail}</h5>
                                </li>)
                            : <h5>No comments yet!</h5>
                        }
                    </ul>
                </div>

            </div>
        </>
    );
}