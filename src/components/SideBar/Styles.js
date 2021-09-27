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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  form {
    display: none;
  }
  @media (max-width: 768px) {
    padding: 5px 20px;
    width: 100%;
    margin: 0px;
    border-radius: 0px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 3;
    min-height: 0;
    form {
      display: block;
    }
  }
`;

export const Navigation = styled.nav`
  display: block;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    width: 46px;
    height: 46px;
    margin: 0px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  font-size: 18px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 22px;
    position: fixed;
    top: 59px;
    left: 0px;
    height: 100%;
    background-color: #fff;
    padding: 25px;
    width: 100%;
    overflow: scroll;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: all 0.3s;
  }
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

export const Burger = styled.div`
  display: none;
  position: relative;
  height: 20px;
  width: 25px;

  &:before {
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '9px' : '0px')};
    left: 0px;
    content: '';
    height: 2px;
    width: 25px;

    background-color: #ccc;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
    transition: 0.2s ease all;
  }
  &:after {
    position: absolute;
    bottom: ${({ isOpen }) => (isOpen ? '9px' : '0px')};
    left: 0px;
    content: '';
    height: 2px;
    width: 25px;
    background-color: #ccc;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
    transition: 0.2s ease all;
  }

  span {
    position: absolute;
    top: 9px;
    left: 0px;
    content: '';
    height: 2px;
    width: 25px;
    background-color: #ccc;
    transform: ${({ isOpen }) => (isOpen ? 'scale(0)' : '')};
    transition: 0.2s ease all;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
