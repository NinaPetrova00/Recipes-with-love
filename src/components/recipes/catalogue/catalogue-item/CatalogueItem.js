import styles from './CatalogueItem.module.css';
import { Link } from 'react-router-dom';
export const CatalogueItem = ({ recipe }) => {
    return (
        <div className={styles.item}>
            <h4>{recipe.title}</h4>
            <img src={recipe.imageUrl} />
            <div className={styles.detailsDiv}>
                <Link to={`/catalogue/${recipe.id}`}>
                    <button className={styles.detailsBtn}>Details</button>
                </Link>

            </div>
        </div>
    );
}