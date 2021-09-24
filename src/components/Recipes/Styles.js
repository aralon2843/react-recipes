import styled from 'styled-components';

export const StyledRecipes = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1vw;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledRecipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  padding-bottom: 15px;
  position: relative;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  height: 140px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 10px;
`;

export const StyledTag = styled.div`
  display: inline-block;
  color: #3c493f;
  background-color: #f1f8fe;
  border-radius: 15px;
  border: 1px solid #43b1f4;
  padding: 5px;
  font-size: 12px;
  margin: 2px;
`;
export const StyledTags = styled.div`
  margin: 0px;
  margin: 10px 0px;
  text-align: center;
  flex: 1 1 auto;
`;

export const MoreButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  display: block;
  width: 150px;
  height: 35px;
  outline: none;
  border: none;
  background-color: #43b1f4;
  color: #ffffff;
  border-radius: 15px;
  cursor: pointer;
  margin-right: ${({ marginRight }) => marginRight + 'px' || ''};
  opacity: ${({ active }) => (active ? '0.7' : '1')};
  transition: 0.2s ease all;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 45px;
  padding: 3px;
  background-color: #f1f8fe;
  border-radius: 15px;
  border: 1px solid #43b1f4;
  text-align: center;
  color: #3c493f;
  position: absolute;
  top: 3px;
  right: 5px;
  font-size: 11px;
`;
export const MoreButton = styled.div`
  padding: 5px;
  padding: 10px 20px;
  border-radius: 50%;
  background-color: #43b1f4;
  color: #f0f7f4;
  font-size: 32px;
  cursor: pointer;
`;
