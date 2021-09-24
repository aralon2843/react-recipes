import styled from 'styled-components';

export const StyledSearchSuggestions = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 2;
  background-color: #f1f8fe;
  border-radius: 15px;
  width: 105%;
  left: -2.5%;
  padding: 15px;
  background-color: #f1f8fe;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  animation: 0.1s suggests forwards;
  @keyframes suggests {
    0% {
      top: 25px;
    }
    100% {
      top: 35px;
    }
  }
`;
export const StyledSearchSuggestion = styled.li`
  line-height: 20px;
  a {
    display: block;
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    margin-bottom: 8px;
    &:hover {
      font-weight: 500;
      color: #1fa2f2;
    }
    transition: 0.2s ease all;
  }
`;
