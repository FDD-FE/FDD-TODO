/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import OptionalButton from "../../components/todo/OptionalButton";
import {useCallback, useState} from "react";
import TodoList from "../../components/todo/TodoList";
import {Todo} from "../../types/todo";
import Timer from "../../components/todo/Timer";
import Prompt from "../../components/todo/Prompt";
import {generateRandom} from "../../utils/random";

const containerCSS = css`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 8px 0px;
`

export const TodoContainer = () => {
    const [isShow, setIsShow] = useState(false)
    const [todoList, setTodoList] = useState<Todo[]>([])

    const optionOnClick = (isClick: boolean) => {
        setIsShow(isClick)
    }

    const onChange = (isClick: boolean, id: number) => {
        const updatedTodo: Todo[] = todoList.map((item: Todo) => {
            if (item.id === id) {
                item.isComplete = isClick
            }

            return item
        })

        setTodoList([...updatedTodo])
    }

    const onDelete = useCallback((id: number) => {
        setTodoList(todos => todos.filter(todo => todo.id !== id))
    }, [])

    const onCreate = (message: string) => {
        todoList.push({id: generateRandom(), isComplete: false, content: message})
        setTodoList([...todoList])
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="m-0 w-[580px] bg-white rounded-2xl h-3/5 py-12 px-8 relative" css={containerCSS}>
                <p className="text-2xl font-bold">To Do List::</p>
                <p>해야할 일을 정리하자 🤗</p>
                <Timer/>
                <p className="text-xl">할 일 {todoList.filter((todo: Todo) => !todo.isComplete).length}개 남음</p>

                <div className="py-4 border border-l-0 border-r-0 border-t-0"></div>

                <div className="pt-8 h-4/6">
                    <TodoList onChange={onChange} todo={todoList} onDelete={onDelete}/>
                </div>

                <Prompt isShow={isShow} onCreate={onCreate}/>
                <OptionalButton css={{right: '42%', bottom: '-40px'}} className="absolute" onClick={optionOnClick}/>
            </div>
        </div>
    )
}
