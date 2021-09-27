import styled from 'styled-components';

export const StyledMainPage = styled.div`
  flex: 1 1 80%;
  background-color: #ffffff;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 15px;
  min-height: 90vh;
  margin-bottom: 25px;
  margin-top: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 768px) {
    margin-top: 60px;
    border-radius: 0px;
    form {
      display: none;
    }
  }
`;
