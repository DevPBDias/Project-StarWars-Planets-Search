import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Filters from './components/Filter/Filters';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import StarWarsProvider from './context/Provider';

const GlobalStyle = createGlobalStyle`
:root {

  --backGroundColor: #27282c;

  --textHover: yellow;

  --textColor: white;
}

body {
  pading: 0px;
  font: fantasy, sans-serif;
  margin: 0px;
  background-color: var(--backGroundColor);
  color: var(--textColor);
}
`;

function App() {
  return (
    <StarWarsProvider>
      <GlobalStyle />
      <Header />
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
