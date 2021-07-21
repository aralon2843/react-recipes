import { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getNextRecipesByCategoryRequest,
  getRecipesByCategoryRequest,
} from '../../redux/actionCreators/mainPage'
import {
  ButtonWrapper,
  StyledButton,
  StyledCalories,
  StyledDescription,
  StyledImage,
  StyledRecipe,
  StyledRecipes,
  StyledTime,
  StyledTitle,
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
          <StyledDescription>
            <StyledCalories>NaN</StyledCalories>
          </StyledDescription>
          <StyledTime>{recipe.readyInMinutes} min</StyledTime>
          <StyledButton>Read recipe</StyledButton>
        </StyledRecipe>
      ))}
      <ButtonWrapper>
        <StyledButton onClick={() => onClickHandler(activeCategory, offset)} height={50} width={200} color={'#fff'}>
          next recipes
        </StyledButton>
      </ButtonWrapper>
    </StyledRecipes>
  )
})

export default Recipes
