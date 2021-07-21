import styled from 'styled-components'

export const StyledRecipes = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const StyledRecipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 7px;
  position: relative;
`

export const StyledImage = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-top: 15px;
`

export const StyledTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  flex: 1 1 auto;
  
`

export const StyledTag = styled.div`
  display: inline-block;
  color: #3c493f;
  background-color: #fecda5;
  border-radius: 15px;
  padding: 5px;
  font-size: 12px;
  margin: 2px;
`
export const StyledTags = styled.div`
  margin: 0px;
  margin: 10px 0px;
  text-align: center;
  flex: 1 1 auto;
`

export const MoreButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledButton = styled.button`
  display: block;
  width: 150px;
  height: 35px;
  outline: none;
  border: none;
  background-color: #a2e3c4;
  color: #3c493f;
  border-radius: 15px;
  cursor: pointer;
`

export const StyledTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  height: 20px;
  width: 40px;
  padding: 5px;
  border-radius: 15px;
  background-color: #f0f7f4;
  text-align: center;
  color: #3c493f;
  position: absolute;
  top: -5px;
  right: 5px;
`
export const MoreButton = styled.div`
  padding: 5px;
  padding: 10px 20px;
  border-radius: 50%;
  background-color: #a2e3c4;
  color: #f0f7f4;
  font-size: 32px;
  cursor: pointer;
`
