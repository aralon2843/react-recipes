import { memo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getNextRecipesByCategoryRequest,
  getNextRecipesBySearchRequest,
  getRecipesByCategoryRequest,
} from '../../redux/actionCreators/mainPage';
import {
  MoreButtonWrapper,
  StyledButton,
  StyledTag,
  StyledTags,
  StyledImage,
  StyledRecipe,
  StyledRecipes,
  StyledTime,
  StyledTitle,
  MoreButton,
} from './Styles';

const Recipes = memo(() => {
  const dispatch = useDispatch();

  const activeCategory = useSelector((state) => state.mainPage.activeCategory);

  const recipes = useSelector((state) => state.mainPage.recipes);

  const searchValue = useSelector((state) => state.search.searchValue);

  let offset = recipes.length;
  // сделать пагинацию для рецептов с поиска, useSelector(state => state.search.searchValue)
  // searchValue прокинуть в getNextRecipesBySearchRequest({searchValue, offset})

  useEffect(() => {
    activeCategory && dispatch(getRecipesByCategoryRequest(activeCategory));
  }, [activeCategory, dispatch]);

  const onClickHandler = (category, offset) => {
    if (activeCategory) {
      dispatch(getNextRecipesByCategoryRequest({ category, offset }));
    } else if (searchValue) {
      dispatch(getNextRecipesBySearchRequest({ searchValue, offset }));
    }
  };
  return recipes.length > 0 ? (
    <StyledRecipes>
      {recipes.map((recipe) => (
        <StyledRecipe id={recipe.id} key={recipe.id}>
          <StyledImage src={recipe.image}></StyledImage>
          <StyledTitle>{recipe.title}</StyledTitle>
          <StyledTags>
            {recipe.diets.map((diet) => (
              <StyledTag>{diet}</StyledTag>
            ))}
          </StyledTags>
          <StyledTime>{recipe.readyInMinutes} min</StyledTime>

          <StyledButton>
            <Link to={`/recipe${recipe.id}`}>Read recipe</Link>
          </StyledButton>
        </StyledRecipe>
      ))}
      <MoreButtonWrapper>
        <MoreButton onClick={() => onClickHandler(activeCategory, offset)}>
          +
        </MoreButton>
      </MoreButtonWrapper>
    </StyledRecipes>
  ) : (
    <StyledTitle>Sorry, no results</StyledTitle>
  );
});

export default Recipes;
