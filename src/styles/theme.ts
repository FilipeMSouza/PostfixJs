import { darken, transparentize } from 'polished'
import { createGlobalStyle } from 'styled-components'

interface GloblaStylesProps {
  theme: string
}

export const GloblaStyles = createGlobalStyle<GloblaStylesProps>`
:root{
  --text: #fff;
  --black: #000;

  --background:#242426;

  --pink-200: #E5004E;
  --pink-900: #400016;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  html{
      @media (max-width: 1080px) {
          font-size: 93.75%;
      }
      @media (max-width: 720px) {
          font-size: 87.5%;
      }
  }
  body{ 
      background-color: var(--background);
      -webkit-font-smoothing: antialiased;
  }
  input, textarea, button{
    font-family: 'Spline Sans Mono', monospace;
    font-weight: 400;
  }
  p{
    font-weight: 500;
  }
  body, h1, h2, h3, h4, h5, h6, strong, label{
    font-family: 'Spline Sans Mono', monospace;
    font-weight: 600;
  } 
  button{
      cursor: pointer;
  }
  [disabled]{
      opacity: 0.6;
      cursor: not-allowed;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
 
  input:focus {
      outline: none;
  }
}
`