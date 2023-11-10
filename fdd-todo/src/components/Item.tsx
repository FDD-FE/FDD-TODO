import useTodoStore from "@stores/store";
import { MdDelete } from "react-icons/md";

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
    <div className="flex mb-4 items-center">
      <div className="w-full text-lg">{text}</div>
      <button
        className="shadow-lg ring-1 ring-slate-900/5 px-2 py-1 rounded hover:text-red-400"
        onClick={onDelete}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default Item;
