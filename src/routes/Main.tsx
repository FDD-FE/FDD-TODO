import React from 'react'
import MainPage from '../components/main/MainPage'
import {styled } from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <MainPage/>
    </Wrapper>
  )
}

export default Main

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 400px;
  height: 700px;
`