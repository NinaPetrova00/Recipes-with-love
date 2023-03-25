import styles from './catalogue-item/CatalogueItem.module.css';
export const Catalogue = () => {
    return (
        <div className={styles.catalogue}>
            <div className={styles.item}>
                <h4>Vegan panckaes</h4>
                <img src="./images/pancakes.jpg" alt="" />

                <div className={styles.detailsDiv}>
                    <button className={styles.detailsBtn}>Details</button>
                </div>
            </div>
            <div className={styles.item}>
                <h4>Vegan panckaes</h4>
                <img src="./images/pancakes.jpg" alt="" />
                <div className={styles.detailsDiv}>
                    <button className={styles.detailsBtn}>Details</button>
                </div>
            </div>
            <div className={styles.item}>
                <h4>Vegan panckaes</h4>
                <img src="./images/pancakes.jpg" alt="" />
                <div className={styles.detailsDiv}>
                    <button className={styles.detailsBtn}>Details</button>
                </div>
            </div>
            <div className={styles.item}>
                <h4>Vegan panckaes</h4>
                <img src="./images/pancakes.jpg" alt="" />
                <div className={styles.detailsDiv}>
                    <button className={styles.detailsBtn}>Details</button>
                </div>
            </div>
            <div className={styles.item}>
                <h4>Vegan panckaes</h4>
                <img src="./images/pancakes.jpg" alt="" />
                <div className={styles.detailsDiv}>
                    <button className={styles.detailsBtn}>Details</button>
                </div>
            </div>
            <div className={styles.item}>
                <h4>Vegan panckaes</h4>
                <img src="./images/pancakes.jpg" alt="" />
                <div className={styles.detailsDiv}>
                    <button className={styles.detailsBtn}>Details</button>
                </div>
            </div>
        </div>
    );
}