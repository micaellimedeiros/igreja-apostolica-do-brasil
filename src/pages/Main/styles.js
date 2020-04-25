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
  margin: 0 auto;
`;

export const Batismo = styled.div`
  align-items: justify;
  flex-wrap: wrap;

  img.side {
    width: 27%;
    float: left;
    margin-top: 2%;
  }
  img.top {
    width: 70%;
    height: 60%;
  }

  > h3 {
    flex: 1;
    width: 70%;
    float: right;
    text-align: justify;
    margin: 5px 10px;
  }
  > p {
    flex: 1;
    width: 70%;
    float: right;
    text-align: justify;
    margin: 10px 10px;
    margin-bottom: 6%;
  }

  @media (max-width: 768px) {
    img.top {
      display: none;
    }
    img.side {
      width: 30%;
    }

    h3 {
      width: 60%;
      font-size: 100%;
      float: right;
      text-align: center;
      margin-right: 5%;
      margin-top: 5%;
    }

    p {
      align-items: center;
      text-align: justify;
      float: center;
      width: 90%;
      margin-right: 5%;
    }
  }
`;

export const Unicidade = styled.div`
  align-items: justify;
  flex-wrap: wrap;

  img.side {
    width: 27%;
    float: left;
    margin-top: 2%;
  }
  img.top {
    width: 70%;
    height: 60%;
  }

  h3 {
    flex: 1;
    width: 70%;
    float: right;
    text-align: justify;
    margin: 5px 10px;
  }

  p {
    flex: 1;
    width: 70%;
    float: right;
    text-align: justify;
    margin: 10px 10px;
    margin-bottom: 6%;
  }

  @media (max-width: 768px) {
    img.top {
      display: none;
    }
    img.side {
      width: 30%;
    }

    h3 {
      width: 60%;
      font-size: 100%;
      float: right;
      text-align: center;
      margin-right: 5%;
      margin-top: 5%;
    }

    p {
      align-items: center;
      text-align: justify;
      float: center;
      width: 90%;
      margin-right: 5%;
    }
  }
`;

export const Santidade = styled.div`
  align-items: justify;
  flex-wrap: wrap;

  img.side {
    width: 27%;
    float: left;
    margin-top: 2%;
  }
  img.top {
    width: 70%;
    height: 60%;
  }

  h3 {
    flex: 1;
    width: 70%;
    float: right;
    text-align: justify;
    margin: 5px 10px;
  }

  p {
    flex: 1;
    width: 70%;
    float: right;
    text-align: justify;
    margin: 10px 10px;
    margin-bottom: 6%;
  }

  @media (max-width: 768px) {
    img.top {
      display: none;
    }
    img.side {
      width: 30%;
    }

    h3 {
      width: 60%;
      font-size: 100%;
      float: right;
      text-align: center;
      margin-right: 5%;
      margin-top: 5%;
    }

    p {
      align-items: center;
      text-align: justify;
      float: center;
      width: 90%;
      margin-right: 5%;
    }
  }
`;
