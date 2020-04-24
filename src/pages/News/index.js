/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import { LineTop, Container } from './styles';

import fotos from '../../assets/fotos.png';

export default function News() {
  return (
    <>
      <LineTop>
        <h1>NOTÍCIAS DE AVIVAMENTO</h1>
      </LineTop>
      <Container>
        <img src={fotos} alt="fotos do instagram" />
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
        <iframe
          src="//lightwidget.com/widgets/153e4a1f7c055051a9b37c3905b2ca11.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
        />
      </Container>
    </>
  );
}
