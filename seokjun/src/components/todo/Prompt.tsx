import {useRef} from "react";

interface IPromptProps {
    isShow: boolean,
    onCreate: (message: string) => void
}

export default function Prompt(props: IPromptProps) {
    const input = useRef<HTMLInputElement>(null)

    return (
        <div css={(props.isShow) ? null : {display: 'none'}}
             className="bottom-0 left-0 absolute w-full h-32 rounded-l-2xl rounded-r-2xl bg-gr bg-[#F8F9FA] px-8 pt-6">
            <input ref={input} type="text" placeholder="할 일을 입력하세요!" css={{border: '1px solid #CCCCCC'}}
                   className="w-full h-12 px-3 rounded outline-none"
                   onKeyDown={(e) => {
                       if (e.code === "Enter" && input.current !== null) {
                           props.onCreate(input.current.value)
                           input.current.value = ''
                       }
                   }}/>
        </div>
    )
}
