import { useState } from "react";
import useTodoStore from "@stores/store";
import { v4 } from "uuid";

const InputBox = () => {
  const { setTodos } = useTodoStore();
  const [value, setValue] = useState("");

  const onChage = (e: any) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    let todo: { id: string; text: string; done: boolean } = {
      id: v4(),
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
