import { createGlobalStyle } from 'styled-components';

import colors from './colors';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: ${colors.primary}
  }

  body {
    -webkit-font-smoothig: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
  }

  body, input, button {
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
