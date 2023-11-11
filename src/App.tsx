import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { createGlobalStyle, styled } from "styled-components";
import Main from '../src/routes/Main';
import Todo from '../src/routes/Todo';
import "./index.css";

const GlobalStyles = createGlobalStyle`
    // 적용시킬 css 입력
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #F6F9F0;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

function App() {
  return (
    <div className="flex justify-center items-center bg-gray-500 w-screen h-screen">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*styled-component

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  width: 100vw;
  height: 100vh;
`
*/