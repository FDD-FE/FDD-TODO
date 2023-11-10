import useTodoStore from "@stores/store";
import Item from "@components/Item";

const ItemList = () => {
  const { todos } = useTodoStore();
  return (
    <div className="item-list">
      {todos.map((todo) => (
        <Item key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </div>
  );
};

export default ItemList;
