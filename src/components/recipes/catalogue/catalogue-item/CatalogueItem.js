import styles from './CatalogueItem.module.css';

export const CatalogueItem = ({ recipe }) => {
    return (
        <div className={styles.item}>
            <h4>{recipe.title}</h4>
            <img src={recipe.imageUrl} />
            <div className={styles.detailsDiv}>
                <button className={styles.detailsBtn}>Details</button>
            </div>
        </div>
    );
}