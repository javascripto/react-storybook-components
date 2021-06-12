import { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import LoadingSpinner from './components/LoadingSpinner';

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <h1>Loading</h1>
      <LoadingSpinner />
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
