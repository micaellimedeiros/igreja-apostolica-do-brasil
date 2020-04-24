import styled from 'styled-components';

export const LineTop = styled.div`
  background-color: #e67016;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    color: #000;
    padding: 5px 10px;
    border: solid 5px #000;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    height: 70px;
    font-size: 70%;
  }
  @media (max-width: 540px) {
    height: 50px;
    font-size: 50%;
  }
  @media (max-width: 375px) {
    height: 30px;
    font-size: 30%;
  }
`;
export const Container = styled.div`
  max-width: 980px;
  height: 980px;
  margin: 0 auto;

  .lightwidget-widget {
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
  }
`;
