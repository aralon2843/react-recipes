import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipesByCategoryRequest } from '../../redux/actionCreators/mainPage'
import {
  StyledButton,
  StyledCalories,
  StyledDescription,
  StyledImage,
  StyledRecipe,
  StyledRecipes,
  StyledTime,
  StyledTitle,
} from './Styles'

const Recipes = () => {
  const dispatch = useDispatch()

  const activeCategory = useSelector((state) => state.mainPage.activeCategory)

  const recipes = useSelector((state) => state.mainPage.recipes)

  useEffect(() => {
    dispatch(getRecipesByCategoryRequest(activeCategory))
  })

  return (
    <StyledRecipes>
      {/* <StyledRecipe>
        <StyledImage src='https://www.edamam.com/web-img/e3d/e3db91d214629692a14badb51df008b2.jpg'></StyledImage>
        <StyledTitle> Individual vegetarian lasagnes </StyledTitle>
        <StyledDescription>
          <StyledCalories>760cal</StyledCalories>
        </StyledDescription>
        <StyledTime>30 min</StyledTime>
        <StyledButton>Read recipe</StyledButton>
      </StyledRecipe>
      <StyledRecipe>
        <StyledImage src='https://www.edamam.com/web-img/e3d/e3db91d214629692a14badb51df008b2.jpg'></StyledImage>
        <StyledTitle> Individual vegetarian lasagnes </StyledTitle>
        <StyledDescription>
          <StyledCalories>760cal</StyledCalories>
        </StyledDescription>
        <StyledTime>30 min</StyledTime>
        <StyledButton>Read recipe</StyledButton>
      </StyledRecipe> */}
    </StyledRecipes>
  )
}

export default Recipes
