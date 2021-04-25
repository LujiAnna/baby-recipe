import React from 'react';
import './App.css';


const recipeData = [
    { strMeal: "Japanese gohan rice", strMealThumb: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg", strIngredient1: "penne rigate" },
    { strMeal: "Pizza Express Margherita", strMealThumb: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg", strIngredient1: "Water" },
    { strMeal: "Spicy Arrabiata Penne", strMealThumb: "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg", strIngredient1: "Sushi Rice" }
];

// RecipeList Component
const RecipeList = ({ recipe }) => ( <
        div > {
            recipe.map(meal => < Recipe {...meal }
                />)}</div >
            );

            // Recipe Card Component
            class Recipe extends React.Component {
                render() {
                    const recipe = this.props;
                    return ( <
                        article >
                        <
                        img src = { recipe.strMealThumb }
                        alt = ""
                        style = {
                            { height: 65 }
                        }
                        /> <
                        section className = "info" >
                        <
                        h3 > Meal: { recipe.strMeal } < /h3>  <
                        p className = "ingredient" > Ingredient: { recipe.strIngredient1 } < /p>                     </section >
                        <
                        /article>
                    )
                }
            }
//Form Component
   class Form extends React.Component {

                render() {
                    return ( <
                        form action = '' > <
                        input type = 'text'
                        placeholder = 'meal name' / >
                        <
                        button > Add recipe < /button> < /
                        form >
                    )
                }
            }

            //  App Component: Add form element Add state to be used by both form and recipeList component in App component
            class App extends React.Component {
                 state = {
                    recipes: recipeData,
                }
                render() {
                    return ( <
                        div >
                        <h1 className = 'header' > { this.props.title } < /h1>  
                            <Form />
                            <RecipeList recipe = { recipeData } / >
                        <
                        /div>
                    )
                }
            }

            export default App;