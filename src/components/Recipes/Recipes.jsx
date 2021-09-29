import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getNextRecipesByCategoryRequest,
  getNextRecipesBySearchRequest,
  getRecipesByCategoryRequest,
} from '../../redux/actionCreators/mainPage';
import RecipeLoader from '../../common/Loaders/RecipeLoader';
import buttonLoader from '../../assets/loader.png';
import {
  MoreButtonWrapper,
  StyledButton,
  StyledTag,
  StyledTags,
  StyledImage,
  StyledRecipe,
  StyledRecipes,
  StyledTime,
  MoreButton,
} from './Styles';
import { Title } from '../../common/Title';

const Recipes = memo(() => {
  const dispatch = useDispatch();

  const activeCategory = useSelector((state) => state.mainPage.activeCategory);

  const recipes = useSelector((state) => state.mainPage.recipes);

  const searchValue = useSelector((state) => state.search.searchValue);

  const isLoaded = useSelector((state) => state.mainPage.isLoaded);

  const isNextRecipesLoaded = useSelector(
    (state) => state.mainPage.isNextRecipesLoaded
  );

  let offset = recipes.length;

  useEffect(() => {
    activeCategory && dispatch(getRecipesByCategoryRequest(activeCategory));
    window.scrollTo({
      top: 0,
    });
  }, [activeCategory, dispatch]);

  const onClickHandler = (category, offset) => {
    if (activeCategory) {
      dispatch(getNextRecipesByCategoryRequest({ category, offset }));
    } else if (searchValue) {
      dispatch(getNextRecipesBySearchRequest({ searchValue, offset }));
    }
  };
  return isLoaded ? (
    recipes.length > 0 ? (
      <StyledRecipes>
        {recipes.map((recipe) => (
          <StyledRecipe id={recipe.id} key={recipe.id}>
            <StyledImage src={recipe.image}></StyledImage>
            <Title>{recipe.title}</Title>
            <StyledTags>
              {recipe.diets.map((diet) => (
                <StyledTag key={diet}>{diet}</StyledTag>
              ))}
            </StyledTags>
            <StyledTime>{recipe.readyInMinutes} min</StyledTime>

            <StyledButton>
              <Link to={`/react-recipes/recipe${recipe.id}`}>Read recipe</Link>
            </StyledButton>
          </StyledRecipe>
        ))}
        <MoreButtonWrapper>
          {isNextRecipesLoaded ? (
            <MoreButton onClick={() => onClickHandler(activeCategory, offset)}>
              +
            </MoreButton>
          ) : (
            <img src={buttonLoader} alt='loading...' />
          )}
        </MoreButtonWrapper>
      </StyledRecipes>
    ) : (
      <Title>Sorry, no results</Title>
    )
  ) : (
    <StyledRecipes>{Array(11).fill(<RecipeLoader />)}</StyledRecipes>
  );
});

export default Recipes;
