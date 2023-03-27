import styles from "./Details.module.css";

export const Details = () => {
    return (
        <div className={styles.detailsItemContainer}>
            <h4>Vegan panckaes</h4>
            <img className={styles.detailsImg} src="./images/pancakes.jpg" alt="" />
            <p>Cooking time: 40min</p>

            <div className={styles.ingredientsContainer}>
                <h3>Ingredients:</h3>
                <ul>
                    <li>300g self-raising flour
                        <li> 1 tsp baking powder</li>
                        <li> 1 tbsp sugar (any kind)</li>
                        <li> 1 tbsp vanilla extract</li>
                        <li> 400ml plant-based milk (such as oat, almond or soya)</li>
                        <li> 1 tbsp vegetable oil for cooking</li>
                    </li>
                </ul>
            </div>

            <div className={styles.howToContainer}>
                <h3>How to prerate it:</h3>
                <ul>
                    <li>
                        Whisk the flour, baking powder, sugar, vanilla extract and a pinch of salt in a bowl using a balloon whisk until mixed. Slowly pour in the milk until you get a smooth, thick batter.
                    </li>
                    <li>
                        Heat a little of the oil in a non-stick frying pan over a medium-low heat, and add 2 tbsp batter into the pan at a time to make small, round pancakes. You will need to do this in batches of two-three at a time. Cook for 3-4 mins until the edges are set, and bubbles are appearing on the surface. Flip the pancakes over and cook for another 2-3 mins until golden on both sides and cooked through. Keep warm in a low oven while you cook the remaining pancakes.
                    </li>

                    <li>
                        Serve stacked with lots of toppings of your choice, or serve with bowls of toppings for everyone to help themselves.
                    </li>
                </ul>
            </div>

        </div >
    );
}