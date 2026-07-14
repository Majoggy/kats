"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --foreground: #171717;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #0a0a0a;
      --foreground: #ededed;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
  }

  p {
    font-size: 0.75rem;
  }

  button {
    font-family: inherit;
    font-size: 0.65625rem;
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
