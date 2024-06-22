import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  body {
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: #EDEBE3;
    margin: 0;
    font-family: "Lobster", sans-serif;
    font-weight: 400;
    font-style: normal;
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

  code {
    font-family: "Lobster", sans-serif;
    font-weight: 400;
    font-style: normal;
}

li {
  list-style: none;
}

`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
