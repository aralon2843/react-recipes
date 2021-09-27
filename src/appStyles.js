import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  min-height: 100vh;
  overflow: hidden;
  padding: 0 15px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: block;
  }
`;
