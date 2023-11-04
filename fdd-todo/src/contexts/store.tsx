import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Item = {
  id: number;
  text: string;
  done: boolean;
};

interface TODOS {
  todos: any[];
  setTodos: (todo: Todo) => void;
  deleteTodo: (deleteId: number) => void;
}

const useTodoStore = create<TODOS>()(
  persist(
    (set) => ({
      todos: [],
      setTodos: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      deleteTodo: (deleteId) =>
        set((state) => ({
          todos: [...state.todos.filter((item: Item) => item.id !== deleteId)],
        })),
    }),
    {
      name: "todo-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTodoStore;
