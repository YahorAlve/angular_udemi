import { Recipe } from '../recipe.module';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';

export interface FeatureState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe(
          'Test Name 1',
          'Test Description 1',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png',
          [new IngredientModule('Meat', 2), new IngredientModule('Bread', 2)]
        ),
        new Recipe(
          'Test Name 2',
          'Test Description 2',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png',
          [new IngredientModule('Meat', 5), new IngredientModule('Bread', 5)]
        )
    ]
};

export function recipeReducer(state, action) {
    return state;
}
