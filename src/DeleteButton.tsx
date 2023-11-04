import React from "react";
import{BsTrash} from 'react-icons/bs/';
import styled from "styled-components";

const DelButton=styled.div`
    width: 25px;
    height: 25px;
    font-size: 25px;
    cursor: pointer;
    &:hover{
        color:red;
    }
`
interface DeleteButtonProps{
    onClick?():void;
}
const DeleteButton=({onClick}:DeleteButtonProps)=>{
    return(
        <>
            <DelButton onClick={onClick}>
                <BsTrash/>
            </DelButton>
        </>
    )
}

export default DeleteButton;