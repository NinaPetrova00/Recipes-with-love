import styles from './CatalogueItem.module.css';
import { Link } from 'react-router-dom';

export const CatalogueItem = ({ recipe }) => {
    return (

        <div className={styles.item}>
            <h4>{recipe.title}</h4>
            <img src={recipe.imageUrl} />
            <div className={styles.detailsDiv}>
                <Link to={`/details/${recipe.id}`}>
                    <button className={styles.detailsBtn}>Details</button>
                </Link>
            </div>

            {/* //TODO: only show this button when this is current user's recipe */}
            <div className={styles.editDelDiv}>

                <Link to={`/edit/${recipe.id}`}>
                    <button className={styles.editBtn}>
                        <img src={process.env.PUBLIC_URL + '/images/editIcon.png'} />
                    </button>
                </Link>

                <Link to={`/delete/${recipe.id}`}>
                    <button className={styles.deleteBtn}>
                        <img src={process.env.PUBLIC_URL + '/images/deleteIcon.png'} />
                    </button>
                </Link>
            </div>
        </div>
    );
}