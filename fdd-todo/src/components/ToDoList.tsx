import Header from "@components/Header";
import InputBox from "@components/InputBox";
import ItemList from "@components/ItemList";

const ToDoList = () => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <Header />
        <InputBox />
        <ItemList />
      </div>
    </div>
  );
};

export default ToDoList;
