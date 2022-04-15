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

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
`

const BodyWrapper = styled.div`
  border: 1px solid black;
  flex: 1 1 0;
  background-color: yellow;
`

export default App;
