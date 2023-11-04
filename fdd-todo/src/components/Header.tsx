import React from "react";
import useTodoStore from "../contexts/store";

const Header = () => {
  const { todos } = useTodoStore();
  return (
    <>
      <div className="header">
        <div className="title">To Do List</div>
        <div className="subtitle">해야할 일을 정리하세요 😎</div>
        <div className="task">할 일 {todos.length}개 남음</div>
      </div>
    </>
  );
};

export default Header;
