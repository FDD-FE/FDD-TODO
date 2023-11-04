import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';

const MainContainer=styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppContainer=styled.div`
  background-color: green;
  width:500px;
  height:800px;
  position: relative;
`
const InputText=styled.input`
  width: 100%;
  height: 50px;

  border: 0.1px dotted black;
  font-size: 18px;
  text-align: center;

  box-sizing: border-box;
  position: absolute;
  bottom: 0;
`
function App() {
  return (
    <MainContainer>
      <AppContainer>
        <InputText type="text" placeholder='입력 후 엔터!'></InputText>
        <TodoList/>
      </AppContainer>
    </MainContainer>
  );
}

export default App;
