import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --gray-extra-light: #dfdfdf;
    --gray-light: #bcbcbc;
    --gray: #707886;
    --gray-dark: #2e333e;
    --black: #0e0d11;

    --primary-color: #9046FE;

    --width-container: 1400px;

    --family-primary: 'Open Sans', Arial, sans-serif;

    --text-small: 1.4rem;
    --text-normal: 1.7rem;
    --text-large: 2rem;

    --weight-light: 300;
    --weight-normal: 400;
    --weight-bold: 600;

    --space-xs: .5rem;
    --space-sm: 1rem;
    --space: 2rem;
    --space-lg: 3rem;
    --space-xlg: 4rem;

    --radius-small: 2px;
    --radius: 4px;
    --radius-large: 6px;
    --radius-rounded: 290486px;

    /* Colors */
    --body-bg: var(--white);

    --border-color: var(--gray-extra-light);
    --border-color-light: var(--gray);

    --text-color: var(--black);
    --text-color-rgb: 0,0,0;
    --text-color-light: var(--gray);
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--body-bg);
    color: var(--text-color);
    font-weight: var(--weight-normal);
    font-family: var(--family-primary);
    font-size: var(--text-normal);
    line-height: 160%;
  }

  body, input, button {
    font: 1.6rem sans-serif;
  }

  #root {
    max-width: var(--width-container);
    margin: 0 auto;
    padding: 0 var(--space);
  }
`;