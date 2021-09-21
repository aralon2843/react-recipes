import styled from 'styled-components';

export const StyledRecipePage = styled.div`
  flex: 1 1 80%;
  background-color: #ffffff;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
  min-height: 90vh;
  margin: 15px 0px 25px 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 15px;
`;

export const StyledRecipeInformation = styled.div``;

export const StyledImage = styled.img`
  width: 636px;
  height: 340px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 15px;
`;

export const StyledDescription = styled.div`
  text-align: center;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ fontSize }) => fontSize + 'px'};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 0px 0px 15px 0px;
`;

export const StyledIngredientsList = styled.ol`
  padding: 5px 15px;
`;

export const StyledIngredientsItem = styled.li`
  line-height: 28px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  background: url(${({ icon }) => icon}) 98%/cover no-repeat;
  background-size: 32px;
  list-style: none;
  width: 100%;
  border: 1px solid #43b1f4;
  border-radius: 15px;
  padding: 7px;
`;
export const StyledInstructionsList = styled.ol`
  padding: 5px 15px;
`;

export const StyledInstructionsItem = styled.li`
  list-style: none;
  line-height: 28px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  background-color: #f1f8fe;
  border-radius: 15px;
  padding: 7px;
`;
