import React from 'react';
import { createGlobalStyle } from 'styled-components';
import StarWarsProvider from './context/Provider';
import StarWarsTable from './components/StarwarsTable';

const GlobalStyle = createGlobalStyle`
:root {
  --image: 'starwarlogo.jpg';

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
  box-sizing: border-box;
}
`;

function App() {
  return (
    <StarWarsProvider>
      <GlobalStyle />
      <StarWarsTable />
    </StarWarsProvider>
  );
}

export default App;
