import React from "react";
import useTodoStore from "../contexts/store";

interface ItemInfo {
  id: string;
  text: string;
  done: boolean;
}

const Item = ({ id, text, done }: ItemInfo) => {
  const { deleteTodo } = useTodoStore();
  const onDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="item">
      <div className="text">{text}</div>
      <button className="delBtn" onClick={onDelete} />
    </div>
  );
};

export default Item;
