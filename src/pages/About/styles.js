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
    border: solid 3px #000;
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
  background: 100%;
  margin: 0 auto;

  h4 {
    text-align: center;
  }

  img {
    width: 100%;
  }
  .jblambeth {
    flex: 1;
    width: 20%;
    float: left;
    text-align: justify;
    margin: 5px 10px;
  }

  .lambeths {
    flex: 1;
    width: 20%;
    float: right;
    text-align: justify;
    margin: 5px 10px;
  }
  .family {
    flex: 1;
    width: 20%;
    float: left;
    text-align: justify;
    margin: 5px 10px;
  }
  .bishops {
    flex: 1;
    width: 20%;
    float: right;
    text-align: justify;
    margin: 5px 10px;
  }
`;
