import styled from 'styled-components'

export const StyledRecipePage = styled.div`
  flex: 1 1 80%;
  background-color: #f0f7f4;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 15px;
  min-height: 90vh;
  margin-bottom: 25px;
  margin-top: 15px;
`

export const StyledRecipeInformation = styled.div``

export const StyledImage = styled.img`
  width: 500px;
  height: 320px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin: 0px 15px 15px 15px;
  border-radius: 15px;
`

export const StyledTitle = styled.h2`
  font-size: 24px;
  margin: 0px;
  font-weight: 400;
  text-align: center;
  margin: 0px 0px 15px 0px;
`

export const StyledIngredientsTitle = styled.h2`
  display: block;
  margin: 15px 0px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  font-size: 24px;
`

export const StyledIngredientsList = styled.ol`
  flex: 1 1 25%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #a2e3c4;
    top: 0;
    right: 0;
  }
  margin: 0;
  padding-right: 10px;
`

export const StyledIngredientsItem = styled.li`
  line-height: 24px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
`
export const StyledInstructionsList = styled.ol`
  margin: 0;
  flex: 1 1 65%;
`

export const StyledInstructionsItem = styled.li`
  line-height: 24px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
`

export const StyledInstructionsTitle = styled.h2`
  display: block;
  margin: 15px 0px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  font-size: 24px;
`
