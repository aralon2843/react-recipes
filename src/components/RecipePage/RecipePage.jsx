import { memo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Flex from '../../common/Flex';
import { getRecipeInformationByIdRequest } from '../../redux/actionCreators/recipePage';
import { StyledTag, StyledTags } from '../Recipes/Styles';
import {
  StyledImage,
  StyledIngredientsItem,
  StyledIngredientsList,
  StyledRecipeInformation,
  StyledRecipePage,
  StyledTitle,
  StyledIngredientsTitle,
  StyledInstructionsList,
  StyledInstructionsItem,
  StyledInstructionsTitle,
} from './Styles';

const RecipePage = memo(() => {
  let match = useRouteMatch();

  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipePage.recipeInformation);

  useEffect(() => {
    console.log(match.params);
    dispatch(getRecipeInformationByIdRequest(match.params.id));
    console.log(recipe);
  }, [match]);

  return (
    <StyledRecipePage>
      <StyledRecipeInformation>
        <StyledTitle>{recipe.title}</StyledTitle>
        <Flex>
          <StyledImage src={recipe.image} />
          <StyledTags>
            {recipe?.diets?.length > 0 && (
              <div>
                Diets:
                {recipe.diets.map((diet) => (
                  <StyledTag>{diet}</StyledTag>
                ))}
              </div>
            )}
            {recipe?.dishTypes?.length > 0 && (
              <div>
                Dish types:
                {recipe.dishTypes.map((type) => (
                  <StyledTag>{type}</StyledTag>
                ))}
              </div>
            )}
          </StyledTags>
        </Flex>
        <Flex>
          <StyledIngredientsList>
            <StyledIngredientsTitle>Ingredients</StyledIngredientsTitle>
            {recipe?.extendedIngredients?.map((ingredient) => (
              <StyledIngredientsItem
                icon={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}>
                {ingredient.original}
              </StyledIngredientsItem>
            ))}
          </StyledIngredientsList>

          <StyledInstructionsList>
            <StyledInstructionsTitle>Instructions</StyledInstructionsTitle>
            {recipe?.analyzedInstructions
              ? recipe?.analyzedInstructions[0]?.steps.map((step) => (
                  <StyledInstructionsItem>{step.step}</StyledInstructionsItem>
                ))
              : ''}
          </StyledInstructionsList>
        </Flex>
      </StyledRecipeInformation>
    </StyledRecipePage>
  );
});

export default RecipePage;
