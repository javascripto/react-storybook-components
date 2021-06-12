import { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <h1>App</h1>
    </Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }
`;
