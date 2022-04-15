> ## 소개

- 리액트에서 Footer를 하단에 고정 시키는 코드를 담았습니다.

<br />

> ## 과정

- html, body, root라는 id를 가진 엘리먼트의 높이와 크기를 모두 100%로 설정
```
globalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, #root {            // html, body #root 모두 
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyle;

```
<br />

- Header, Body, Footer를 감싸는 엘리먼트의 높이와 크기 역시 최소 크기를 100%로 설정 후 수직 방향으로 flex
- body 부분에만 flex: 1 1 0 값 지정

```
App.js

import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      
      <Header></Header>
      <BodyWrapper>
        <Body></Body>
      </BodyWrapper>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`         // Header, Body, Footer를 모두 담고 있는 엘리먼트
  position: relative;
  min-height: 100vh;                // 컨텐츠 양에 상관없이 무조건 화면 꽉 채움
  height: auto;                     // 컨텐츠 양이 길어질 시 늘어난 길이 자동 적용
  width: 100%;
  background-color: blue;
  display: flex;                    // flex를 사용.
  flex-direction: column;
`

const BodyWrapper = styled.div`
  border: 1px solid black;
  flex: 1 1 0;                      // body 부분에만 flex: 1 1 0을 지정해 줌.
  background-color: yellow;
`

export default App;



```
