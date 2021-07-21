import { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { getRecipeInformationByIdRequest } from '../../redux/actionCreators/recipePage'
import { StyledRecipePage } from './Styles'

const RecipePage = memo(() => {
  let match = useRouteMatch()

  const dispatch = useDispatch()

  const recipe = useSelector((state) => state.recipePage.recipeInformation)

  useEffect(() => {
    console.log(match.params)
    dispatch(getRecipeInformationByIdRequest(match.params.id))
    console.log(recipe)
  }, [match])

  return <StyledRecipePage>{recipe.title}</StyledRecipePage>
})

export default RecipePage
