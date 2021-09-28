import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Flex from '../../common/Flex';
import { getRecipeInformationByIdRequest } from '../../redux/actionCreators/recipePage';
import RecipeImageLoader from '../../common/Loaders/RecipeImageLoader';
import loader from '../../assets/loader.png';
import { StyledButton, StyledTag, StyledTags } from '../Recipes/Styles';
import Search from '../Search/Search';
import {
  StyledImage,
  StyledIngredientsItem,
  StyledIngredientsList,
  StyledRecipeInformation,
  StyledRecipePage,
  StyledTitle,
  StyledInstructionsList,
  StyledInstructionsItem,
  StyledDescription,
} from './Styles';
import { LoaderWrapper } from '../../common/LoaderWrapper';
import { Title } from '../../common/Title';

const RecipePage = () => {
  let match = useRouteMatch();

  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipePage.recipeInformation);

  const isLoaded = useSelector((state) => state.recipePage.isLoaded);

  const tabs = ['Ingredients', 'Instructions'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    dispatch(getRecipeInformationByIdRequest(match.params.id));
    window.scrollTo({
      top: 0,
    });
  }, [match, dispatch]);

  return (
    <StyledRecipePage>
      <Search />
      <StyledRecipeInformation>
        {isLoaded ? (
          <>
            <StyledImage
              src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
            />
            <StyledDescription>
              <StyledTitle fontSize={28} fontWeight={500}>
                {recipe.title}
              </StyledTitle>
              <StyledTags>
                {recipe?.diets?.length > 0 && (
                  <div>
                    Diets:
                    {recipe.diets.map((diet) => (
                      <StyledTag key={diet}>{diet}</StyledTag>
                    ))}
                  </div>
                )}
                {recipe?.dishTypes?.length > 0 && (
                  <div>
                    Dish types:
                    {recipe.dishTypes.map((type) => (
                      <StyledTag key={type}>{type}</StyledTag>
                    ))}
                  </div>
                )}
              </StyledTags>
            </StyledDescription>
          </>
        ) : (
          <RecipeImageLoader />
        )}
        <Flex justify='flex-end'>
          {tabs.map((tab) => (
            <StyledButton
              onClick={() => setActiveTab(tab)}
              active={activeTab === tab}
              marginRight={15}
              key={tab}>
              {tab}
            </StyledButton>
          ))}
        </Flex>
        {isLoaded ? (
          activeTab === tabs[0] ? (
            <StyledIngredientsList>
              {recipe?.extendedIngredients?.map((ingredient) => (
                <StyledIngredientsItem
                  icon={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  key={ingredient.id}>
                  {ingredient.original}
                </StyledIngredientsItem>
              ))}
            </StyledIngredientsList>
          ) : (
            <StyledInstructionsList>
              {recipe?.analyzedInstructions.length > 0 ? (
                recipe?.analyzedInstructions[0]?.steps.map((step) => (
                  <StyledInstructionsItem key={step.number}>
                    {step.step}
                  </StyledInstructionsItem>
                ))
              ) : (
                <Title>No instructions</Title>
              )}
            </StyledInstructionsList>
          )
        ) : (
          <LoaderWrapper>
            <img src={loader} alt='loading...' />
          </LoaderWrapper>
        )}
      </StyledRecipeInformation>
    </StyledRecipePage>
  );
};

export default RecipePage;
