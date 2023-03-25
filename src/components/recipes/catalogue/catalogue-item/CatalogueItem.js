import styles from './CatalogueItem.module.css';

export const CatalogueItem = () => {
    return (
        <div className={styles.item}>
            <h4>Vegan panckaes</h4>
            <img src="./images/pancakes.jpg" alt="" />
        </div>
    );
}