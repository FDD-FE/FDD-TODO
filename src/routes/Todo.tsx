import {styled } from "styled-components";
import TodoPage from '../components/todo/TodoPage'

const Todo = () => {
  return (
    <Wrapper>
      <TodoPage/>
    </Wrapper>
  )
}

export default Todo

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 400px;
  height: 700px;
`