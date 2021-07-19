import styled from 'styled-components'

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
`

export const StyledLogo = styled.h2`
  color: #a2e3c4;
  letter-spacing: 2.5px;
  font-weight: 600;
  span {
    color: #7e8d85;
  }
  margin-bottom: 35px;
`

export const StyledList = styled.ul`
  list-style: none;
  font-size: 18px;
  margin: 0;
  padding: 0;
`

export const StyledItem = styled.li`
  color: ${(props) => (props.active ? '#A2E3C4' : '#7E8D85')};
  background: url(${(props) => props.icon}) left 5px / cover no-repeat;
  background-size: 25px;
  margin-bottom: 30px;
  padding: 10px 45px 0px;
  transition: 0.1s ease all;
  cursor: pointer;
`
