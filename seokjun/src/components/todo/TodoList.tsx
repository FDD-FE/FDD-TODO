import {Todo} from "../../types/todo";
import CheckBox from "./CheckBox";

interface ITrashIconProps {
    className: string;
    index: number;
    onClick: (index: number) => void
}

const TrashIcon = (props: ITrashIconProps) => {
    return (
        <svg onClick={() => {
            props.onClick(props.index)
        }} className={props.className} stroke="currentColor" fill="currentColor" stroke-width="0"
             viewBox="0 0 24 24"
             height="1em" width="1em"
             xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
    )
}

interface ITodoProps {
    todo: Todo[]
    onChange: (isClick: boolean, index: number) => void
    onDelete: (index: number) => void
}

export default function TodoList(props: ITodoProps) {
    const checkBoxOnClick = (isClick: boolean, index: number) => {
        props.onChange(isClick, index)
    }

    return (
        <ul className="overflow-scroll h-full">
            {
                props.todo.map((item: Todo, index: number) => {
                    return (
                        <li className="pb-6 flex">
                            <CheckBox onClick={checkBoxOnClick} index={index}/>
                            <span
                                className={`text-xl w-11/12 ${item.isComplete ? 'text-[#CCCCCC]' : null}`}>{item.content}</span>
                            <TrashIcon className="h-8 w-8 text-[#CCCCCC] hover:text-[#FF6B6B] cursor-pointer"
                                       index={index} onClick={props.onDelete}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}
