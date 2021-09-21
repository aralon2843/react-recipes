import styled from 'styled-components';

export const StyledSideBar = styled.div`
  flex: 1 1 20%;
  min-height: 100%;
  padding: 15px;
  padding-left: 45px;
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-top: 15px;
  margin-bottom: 25px;
  @media (max-width: 1024px) {
    width: 100px;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const StyledLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 25px;
`;

export const StyledList = styled.ul`
  list-style: none;
  font-size: 18px;
`;

export const StyledItem = styled.li`
  color: ${(props) => (props.active ? '#1FA2F2' : '#13171A')};
  background: url(${(props) => props.icon}) left 5px / cover no-repeat;
  background-size: 25px;
  margin-bottom: 30px;
  padding: 10px 45px 0px;
  transition: 0.1s ease all;
  cursor: pointer;
`;
