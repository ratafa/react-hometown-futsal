import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css');
  
  @font-face {
    font-family: 'Do Hyeon';
    font-weight: 700;
    font-style: normal;
    src: url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap')
    format('woff');
  }

  @font-face {
    font-family: 'Leferi';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiBaseType-BoldA.woff')
      format('woff');
  }

  @font-face {
    font-family: 'Leferi';
    font-weight: 900;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackA.woff')
      format('woff');
  }

  @font-face {
    font-family: 'Leferi Point';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackA.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Leferi Point';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteA.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
`;

export default GlobalStyle;
