import React, { Fragment, Component } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from './Header.js';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};

  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'roboto'; 
    src: url('/static/roboto-v18-cyrillic_latin-regular.eot');                                    /* IE9 Compat Modes */ 
    src: url('/static/roboto-v18-cyrillic_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ 
         url('/static/roboto-v18-cyrillic_latin-regular.woff2') format('woff2'),                  /* Новейшие браузеры */ 
         url('/static/roboto-v18-cyrillic_latin-regular.woff') format('woff'),                    /* Новые браузеры и IE9+ */ 
         url('/static/roboto-v18-cyrillic_latin-regular.ttf')  format('truetype'),                /* Старые Safari, Android, iOS */ 
         url('/static/roboto-v18-cyrillic_latin-regular.svg#svgFontName') format('svg');          /* Древние Safari, iOS, Android */ 
    font-weight: normal; 
    font-style: normal; 
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'roboto';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'roboto'; }
  

`

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 5.5rem;
  background: papayawhip;
  margin: 3rem auto 0 auto;
  max-width: 800px;
`;
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Fragment>
      
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
        
      </Fragment>
    </ThemeProvider>
    );
  }
}

export default Page;
