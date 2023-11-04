import React from "react";
import CheckBox from "./CheckBox";
import Text from "./Text";
import DeleteButton from "./DeleteButton"
import styled from "styled-components";

const ItemContainer=styled.div`
    width: 100%-20px;
    height: 30px;
    padding: 20px;
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.3px solid gray;
`
interface ItemProps{
    completed?: boolean;
    text: string;
}
const Item=({completed, text}:ItemProps)=>{
    return(
        <>
            <ItemContainer>
                <CheckBox checked={completed}/>
                <Text completed={completed}>{text}</Text>
                <DeleteButton/>
            </ItemContainer>
        </>
    )
}
export default Item;