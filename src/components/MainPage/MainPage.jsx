import { useEffect } from 'react'
import Search from '../Search/Search'
import {
  StyledButton,
  StyledCalories,
  StyledDescription,
  StyledImage,
  StyledMainPage,
  StyledRecipe,
  StyledRecipes,
  StyledTime,
  StyledTitle,
} from './Styles'

const MainPage = () => {
  useEffect(() => {
    fetch(
      'https://api.spoonacular.com/recipes/complexSearch?query=potato&addRecipeInformation=true&sort=popularity&fillIngredients=true&type=maincourse&apiKey=4fdcbfb4481d4b23a16a4534d9c3fb28'
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <StyledMainPage>
      <Search />
      <StyledRecipes>
        <StyledRecipe>
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
        </StyledRecipe>
      </StyledRecipes>
    </StyledMainPage>
  )
}

export default MainPage
