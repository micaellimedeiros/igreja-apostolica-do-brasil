/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Container, Text } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Igreja Apostólica do Brasil" />
      </Link>

      <nav>
        <NavLink to="/">INÍCIO</NavLink>
        <NavLink to="/news">NOTÍCIAS</NavLink>
        <NavLink to="/about">SOBRE NÓS</NavLink>
        <a
          className="radio"
          target="_blank"
          href="http://webradiopopstolica.com/"
        >
          NOSSA WEBRÁDIO
        </a>
      </nav>
      <Text>
        <h2>Uma Igreja de amor, poder e fé!</h2>
        <p>
          Somos uma Igreja Unicista que segue a Bíblia como referência, cremos
          no batismo nas àguas em nome de Jesus Cristo e estamos aguardando a
          volta do Senhor Jesus Cristo! (Atos 2:38)
        </p>
      </Text>
    </Container>
  );
}
