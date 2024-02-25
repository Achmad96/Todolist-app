import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { TodoType } from "../types";

type TodoContextType = {
    todolist: TodoType[];
    setTodolist: Dispatch<SetStateAction<TodoType[]>>;
};

const TodoContext = createContext<{ todolist: TodoType[]; setTodolist: Dispatch<SetStateAction<TodoType[]>> } | null>(null);
export default function TodoProvider({ children }: { children: ReactNode }) {
    const todolistItem = JSON.parse(localStorage.getItem("todolist") as string);
    const [todolist, setTodolist] = useState<TodoType[]>(todolistItem || []);
    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(todolist));
    }, [todolist]);
    return <TodoContext.Provider value={{ todolist, setTodolist }}>{children}</TodoContext.Provider>;
}

export const useTodo = () => {
    return useContext(TodoContext) as TodoContextType;
};
