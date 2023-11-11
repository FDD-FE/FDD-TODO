import useTodoStore from "@stores/store";

const Header = () => {
  const { todos } = useTodoStore();
  return (
    <div className="shadow appearance-none w-full py-2 px-3 mr-4 text-grey-darker mb-4">
      <div className="text-black">
        <div className="text-xl">To Do List</div>
        <div className="text-lg">해야할 일을 정리하세요 😎</div>
        <div className="text-base">할 일 {todos.length}개 남음</div>
      </div>
    </div>
  );
};

export default Header;
