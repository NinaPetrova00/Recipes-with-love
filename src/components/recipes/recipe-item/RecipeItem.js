import styles from './RecipeItem.module.css';

export const RecipeItem = () => {
    return (
        <div className={styles.item}>
            <h4>Vegan panckaes</h4>
            <img src="./images/pancakes.jpg" alt="" />
        </div>
    );
}