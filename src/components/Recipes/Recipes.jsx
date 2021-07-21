import { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getNextRecipesByCategoryRequest,
  getRecipesByCategoryRequest,
} from '../../redux/actionCreators/mainPage'
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
} from './Styles'

const Recipes = memo(() => {
  const dispatch = useDispatch()

  const activeCategory = useSelector((state) => state.mainPage.activeCategory)

  const recipes = useSelector((state) => state.mainPage.recipes)

  let offset = recipes.length

  useEffect(() => {
    // console.log(activeCategory)
    dispatch(getRecipesByCategoryRequest(activeCategory))
  }, [activeCategory, dispatch])

  const onClickHandler = (category, offset) => {
    dispatch(getNextRecipesByCategoryRequest({ category, offset }))
  }
  return (
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
          <StyledButton>Read recipe</StyledButton>
        </StyledRecipe>
      ))}
      <MoreButtonWrapper>
        <MoreButton onClick={() => onClickHandler(activeCategory, offset)}>
          +
        </MoreButton>
      </MoreButtonWrapper>
    </StyledRecipes>
  )
})

export default Recipes
