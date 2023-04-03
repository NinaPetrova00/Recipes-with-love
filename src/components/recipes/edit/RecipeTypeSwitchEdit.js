// import Form from 'react-bootstrap/Form';
// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from "react-router-dom"
// import * as recipeService from '../../service/RecipeService';

// function RecipeTypeSwitchEdit() {
//     const [currentRecipe, setCurentRecipe] = useState({})
//     const { recipeId } = useParams();


//     useEffect(() => {
//         recipeService.getOne(recipeId)
//             .then(result => {
//                 setCurentRecipe(result);
//             })
//     }, []);

//     const onClickHandler = async (ev) => {

//         ev.preventDefault();
//         document.getElementById("custom-switch-vegetarian").checked = true;

//         //const updatedData = Object.fromEntries(new FormData(ev.target));
//         const formData = new FormData(ev.target);
//         const test = formData.get('custom-switch-vegan');
//         console.log("test", test);
//         // console.log({ updatedData });
//         // recipeService.editRecipe(recipeId, updatedData);

//         // TODO: fix the navigate
//     };



//     function checkRecipeType() {
//         let isVegan = currentRecipe.vegan ? true : false;
//         let isVegetarian = currentRecipe.vegetarian ? true : false;
//         let isHighProtein = currentRecipe.highProtein ? true : false;
//         let isLowSugar = currentRecipe.lowSugar ? true : false;
//         let isGlutenFree = currentRecipe.isGlutenFree ? true : false;
//         let isLactoseFree = currentRecipe.isLactoseFree ? true : false;

//         if (isVegan) {
//             document.getElementById("custom-switch-vegan").checked = true;
//         }
//         if (isVegetarian) {
//             document.getElementById("custom-switch-vegetarian").checked = true;
//         }
//         if (isHighProtein) {
//             document.getElementById("custom-switch-highProtein").checked = true;
//         }
//         if (isLowSugar) {
//             document.getElementById("custom-switch-lowSugar").checked = true;
//         }
//         if (isGlutenFree) {
//             document.getElementById("custom-switch-glutenFree").checked = true;
//         }
//         if (isLactoseFree) {
//             document.getElementById("custom-switch-lactoseFree").checked = true;
//         }
//     }

//     return (
//         <>
//             <Form>
//                 <Form.Check type="switch" id="custom-switch-vegan" label="Vegan" onLoad={checkRecipeType()} />
//                 <Form.Check type="switch" id="custom-switch-vegetarian" label="Vegetarian" onLoad={checkRecipeType()} />
//                 <Form.Check type="switch" id="custom-switch-highProtein" label="High Protein" onLoad={checkRecipeType()} />
//             </Form>
//             <Form>
//                 <Form.Check type="switch" id="custom-switch-lowSugar" label="Low Sugar" onLoad={checkRecipeType()} />
//                 <Form.Check type="switch" id="custom-switch-glutenFree" label="Gluten Free" onLoad={checkRecipeType()} />
//                 <Form.Check type="switch" id="custom-switch-lactoseFree" label="Lactoce Free" onLoad={checkRecipeType()} />
//                 {/* <Form.Check type="switch" id="custom-switch" label="Regular recipe" /> */}
//             </Form>
//         </>
//     );
// }

// export default RecipeTypeSwitchEdit;