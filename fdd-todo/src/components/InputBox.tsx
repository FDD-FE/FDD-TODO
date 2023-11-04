import { useRef, useState } from "react";
import useTodoStore from "../contexts/store";

const InputBox = () => {
  const { setTodos } = useTodoStore();
  const [value, setValue] = useState("");
  const itemId = useRef(1);

  const onChage = (e: any) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    let todo = {
      id: itemId.current++,
      text: value,
      done: false,
    };
    setTodos(todo);

    setValue("");
  };

  return (
    <div className="input-box">
      <form onSubmit={onSubmit}>
        <input
          autoFocus
          placeholder="할 일을 입력하세요 !"
          onChange={onChage}
          value={value}
        />
      </form>
    </div>
  );
};

export default InputBox;
