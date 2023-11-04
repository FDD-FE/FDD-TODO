import React from "react"
import styled from "styled-components"

const Box=styled.div`
    width: 25px;
    height: 25px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    &:hover{
        border: 0.3px solid black;
    }
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`
const Check=styled.div`
    position: absolute;
    font-size: 30px;
    color: red;
`
interface CheckBoxProps{
    checked?:boolean;
    onClick?():void;
}
const CheckBox=({checked,onClick}:CheckBoxProps)=>{
    return(
        <Box onClick={onClick}>
            <Check>{checked &&"✔︎"}</Check>
        </Box>
    )
}

export default CheckBox