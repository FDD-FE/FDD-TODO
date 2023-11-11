import {styled } from "styled-components";

export const Logo = styled.div`
    margin: 40px 0;
    font-size: 30px;
    font-weight: 600;
    color: #E1D8EC;
`

export const Write = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 6px;

    .input {
        outline: none;
        height: 20px;
        width: 70%;
        border: 1px solid #E1D8EC;
        padding: 20px;
        border-radius: 50px;
    }
`

export const AddBtn = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    padding: 12px 15px;
    background-color: #E1D8EC;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 40px;
    width: 100%;
    gap: 20px;

    .num {
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 20px;
    }
`

export const List = styled.div`
    display: flex;
    align-items: center;

    .list {
        width: 300px;
        font-size: 18px;
        margin-left: 6px;
    }

    .erase {
        width: 300px;
        font-size: 18px;
        margin-left: 6px;
        text-decoration-line: line-through;
    }

    .delete {
        font-size: 20px;
    }
`