import styled from 'styled-components';
import brazao from '../../assets/brazao-side.png';

export const Container = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  background-color: #e1e1e1;
  height: 400px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  background: url(${brazao});
  background-size: 100%;
  background-repeat: no-repeat;

  nav {
    flex: 1;

    margin: 5% 0% 5% 33%;
    font-size: 110%;
    font-weight: bold;
    position: relative;

    a {
      color: #666;
      transition: color 0.2s;
      text-decoration: none;

      & + a {
        margin-left: 5%;
      }
      &:hover {
        color: #e67016;
      }
    }
    a.radio {
      padding: 10px 16px;
      border: 2px solid #e67016;
      border-radius: 30px;
    }
  }
  img {
    width: 23%;

    margin: 5% 0px 2% 10%;
    position: absolute;
  }
`;

export const Text = styled.text`
  margin-top: 18%;
  position: absolute;
  margin-right: 60%;
  margin-left: 10%;
`;
