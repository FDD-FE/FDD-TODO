/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import OptionalButton from "../../components/todo/OptionalButton";
import {useState} from "react";
import TodoList from "../../components/todo/TodoList";
import {Todo} from "../../types/todo";

const containerCSS = css`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 8px 0px;
`

export const TodoContainer = () => {
    const [isShow, setIsShow] = useState(false)
    const [todoList, setTodoList] = useState<Todo[]>([])
    const [input, setInput] = useState('')
    const optionOnClick = (isClick: boolean) => {
        setIsShow(isClick)
    }

    const onChange = (isClick: boolean, index: number) => {
        const updatedTodo: Todo[] = todoList.map((item: Todo, idx: number) => {
            if (idx === index) {
                item.isComplete = isClick
            }

            return item
        })

        setTodoList([...updatedTodo])
    }

    const onDelete = (index: number) => {
        const updatedTodo: Todo[] = todoList.filter((_, idx: number) => idx !== index)
        setTodoList([...updatedTodo])
    }

    const onCreate = () => {
        todoList.push({isComplete: false, content: input})
        setTodoList([...todoList])
        setInput('')
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="m-0 w-3/12 bg-white rounded-2xl h-3/5 py-12 px-8 relative" css={containerCSS}>
                <p>To Do List::</p>
                <p>해야할 일을 정리하자 🤗</p>
                <p>2023-11-04</p>
                <p>02:33:39</p>
                <p>할 일 {todoList.filter((todo: Todo) => !todo.isComplete).length}개 남음</p>

                <div className="py-4 border border-l-0 border-r-0 border-t-0"></div>

                <div className="pt-8">
                    <TodoList onChange={onChange} todo={todoList} onDelete={onDelete}/>
                </div>

                <div css={(isShow) ? null : {display: 'none'}}
                     className="bottom-0 left-0 absolute w-full h-32 rounded-l-2xl rounded-r-2xl bg-gr bg-[#F8F9FA] px-8 pt-6">
                    <input type="text" placeholder="할 일을 입력하세요!" css={{border: '1px solid #CCCCCC'}}
                           className="w-full h-12 px-3 rounded outline-none" value={input}
                           onChange={(e) => setInput(e.target.value)}
                           onKeyDown={(e) => {
                               if (e.code === "Enter") {
                                   onCreate()
                               }
                           }}/>
                </div>
                <OptionalButton css={{right: '42%', bottom: '-40px'}} className="absolute" onClick={optionOnClick}/>
            </div>
        </div>
    )
}
