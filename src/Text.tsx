import React from "react";
import styled from "styled-components";

const TextBox=styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* text-decoration: ${(props)=> (props.on? "line-through" : "none")}; */
`
interface TextProps{
    completed?: boolean;
    children: React.ReactNode;
}
const Text = ({completed, children}:TextProps)=>{
    return(
        <TextBox>
            {children}
        </TextBox>
    )
}

export default Text;