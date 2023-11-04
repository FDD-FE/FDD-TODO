/** @jsxImportSource @emotion/react */
import {useState} from "react";
import {css} from "@emotion/react";


const PlusIcon = () => {
    return (
        <svg
            className="w-20"
            stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
            height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
    )
}

interface OptionalButtonProps {
    className?: string,
    onClick: (isClick: boolean) => void,
}

const animateCSS = css`
  transition: all 0.125s ease-in 0s;
`

export default function OptionalButton(props: OptionalButtonProps) {
    const [isClick, setIsClick] = useState(false)

    const onClick = () => {
        props.onClick(!isClick)
        setIsClick(!isClick)
    }

    return (
        <button onClick={onClick} css={animateCSS}
                className={`${props.className} m-0 w-20 h-20 rounded-full text-white text-6xl text-center ${isClick ? "bg-[#FF6B6B] hover:bg-[#FF8787] rotate-45" : "bg-[#38d9a9] hover:bg-[#63e6be]"} `}>
            <PlusIcon/>
        </button>
    )
}
