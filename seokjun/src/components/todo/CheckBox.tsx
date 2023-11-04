/** @jsxImportSource @emotion/react */
import {useState} from "react";

interface ICheckBoxProps {
    className?: string,
    onClick: (isClick: boolean, index: number) => void,
    id: number,
}

const CheckBoxIcon = () => {
    return (
        <svg className="text-[#38d9a9] w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0"
             viewBox="0 0 24 24"
             height="1em" width="1em"
             xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
        </svg>
    )
}

export default function CheckBox(props: ICheckBoxProps) {
    const [isClick, setIsClick] = useState(false)

    const onClick = () => {
        props.onClick(!isClick, props.id)
        setIsClick(!isClick)
    }

    return (
        <div onClick={onClick} css={{border: `1px solid ${isClick ? "#38d9a9" : "#CCCCCC"}`}}
             className="rounded-full w-8 h-8 cursor-pointer mr-4 flex items-center justify-center">
            {isClick ? <CheckBoxIcon/> : null}
        </div>
    )
}
