import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

export default function GlobalStyles() {
  const styles = css`
    /* ${emotionNormalize} */

    @font-face {
      font-family: 'Graphik-Bold';
      src: url('./assets/fonts/Graphik-Bold.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Graphik-Regular';
      src: url('./assets/fonts/Graphik-Regular.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Graphik-Medium';
      src: url('./assets/fonts/Graphik-Medium.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Graphik-Semibold';
      src: url('./assets/fonts/Graphik-Semibold.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Semibold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Graphik-Light';
      src: url('./assets/fonts/Graphik-Light.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Graphik Super';
      src: url('./assets/fonts/Graphik-Super.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Super.woff') format('woff');
      font-weight: 900;
      font-style: normal;
    }

    html,
    body {
      padding: 0;
      margin: 0;
      background-color: #f8fafc;
      font-family: Graphik-Regular;
      height: 100%;
      width: 100%;
      min-height: 100vh;
      min-width: 100%;
    }

    *,
    *::after,
    *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
    }
  `;
  return (
    <React.Fragment>
      <Global styles={styles} />
    </React.Fragment>
  );
}
