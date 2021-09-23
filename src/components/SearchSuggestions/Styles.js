import styled from 'styled-components';

export const StyledSearchSuggestions = styled.ul`
  list-style: none;
  position: absolute;
  top: 35px;
  z-index: 2;
  background-color: #f1f8fe;
  border-radius: 15px;
  width: 105%;
  left: -2.5%;
  padding: 15px;
  background-color: #f1f8fe;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
export const StyledSearchSuggestion = styled.li`
  padding: 3px;
 line-height: 20px;
  
`;

export const StyledSuggestionTitle = styled.h2`
  display: block;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
`;
