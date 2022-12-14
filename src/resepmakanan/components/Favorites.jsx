import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import '../styles/Favorites.css';
import RecipeCard from './RecipeCard';


const Favourites = (props) => {
    const {removeFavorite, newRecipes, favorites, isCardSmall, fullDisplay, recipeId} = props    
          
    const newRecipeCard = newRecipes.map((recipe) => {
        return <RecipeCard 
                    recipe={recipe} 
                    key={recipe.idMeal} 
                    canDelete={true} 
                    removeFavorite={removeFavorite}
                    isCardSmall={isCardSmall}
                    fullDisplay={fullDisplay}
                    useClass={false}
                />
    })
    
    const favoriteCard = favorites.map((recipe) => {
        return (
            <Grid.Column computer={4} tablet={8} mobile={16} key={recipe.idMeal}>
                <RecipeCard 
                    recipe={recipe}                     
                    canDelete={true} 
                    removeFavorite={removeFavorite}
                    isCardSmall={recipe.idMeal === recipeId ? isCardSmall : true}
                    fullDisplay={fullDisplay}
                    useClass={false}
                />
            </Grid.Column>            
        )
    });

    return (
        <div className="Favorites">
            {/* <RecipeMenu /> */}
            <h1 id="Favorites-header">Resep Favorit</h1>
            <Fragment>
                <Grid stackable columns={4} divided>
                    <Grid.Row>
                        {newRecipeCard}
                        {favoriteCard}
                    </Grid.Row>
                </Grid>                
            </Fragment>            
        </div>
    )
}

export default Favourites;
