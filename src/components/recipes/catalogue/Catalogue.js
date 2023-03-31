import styles from './catalogue-item/CatalogueItem.module.css';
//import * as recipeService from "../../service/RecipeService";
import { CatalogueItem } from './catalogue-item/CatalogueItem';

export const Catalogue = ({ recipes }) => {
    // recipeService.getAllRecipes();

    return (

        // <div>
        //     {recipes.map((x) => (
        //         <div>
        //             <h1>{x.title}</h1>
        //             <h1>{x.imageUrl}</h1>
        //             <h1>{x.cookingTime}</h1>
        //             {/* <h1>{x.cookingSteps.map(x => <h2>{x}</h2>)}</h1>
        //             <h1>{x.ingredients.map(x => <h2>{x}</h2>)}</h1> */}
        //         </div>
        //     ))}
        // </div>

        <div className={styles.catalogue}>
            {recipes.length > 0
                ? recipes.map(x => <CatalogueItem key={x._id} recipe={x} />)
                : <h3>No recipes yet!</h3>
            }
        </div>


        // <div className={styles.catalogue}>
        //     <div className={styles.item}>
        //         <h4>Vegan panckaes</h4>
        //         <img src="./images/pancakes.jpg" alt="" />

        //         <div className={styles.detailsDiv}>
        //             <button className={styles.detailsBtn}>Details</button>
        //         </div>
        //     </div>
        //     <div className={styles.item}>
        //         <h4>Vegan panckaes</h4>
        //         <img src="./images/pancakes.jpg" alt="" />
        //         <div className={styles.detailsDiv}>
        //             <button className={styles.detailsBtn}>Details</button>
        //         </div>
        //     </div>
        //     <div className={styles.item}>
        //         <h4>Vegan panckaes</h4>
        //         <img src="./images/pancakes.jpg" alt="" />
        //         <div className={styles.detailsDiv}>
        //             <button className={styles.detailsBtn}>Details</button>
        //         </div>
        //     </div>
        //     <div className={styles.item}>
        //         <h4>Vegan panckaes</h4>
        //         <img src="./images/pancakes.jpg" alt="" />
        //         <div className={styles.detailsDiv}>
        //             <button className={styles.detailsBtn}>Details</button>
        //         </div>
        //     </div>
        //     <div className={styles.item}>
        //         <h4>Vegan panckaes</h4>
        //         <img src="./images/pancakes.jpg" alt="" />
        //         <div className={styles.detailsDiv}>
        //             <button className={styles.detailsBtn}>Details</button>
        //         </div>
        //     </div>

        //     <div className={styles.item}>
        //         <h4>Vegan panckaes</h4>
        //         <img src="./images/pancakes.jpg" alt="" />
        //         <div className={styles.detailsDiv}>
        //             <button className={styles.detailsBtn}>Details</button>
        //         </div>
        //     </div>
        // </div>
    );
}