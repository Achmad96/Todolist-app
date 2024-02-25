import { AnimatePresence } from "framer-motion";
import { useTodo } from "../providers/TodoProvider";
import Todo from "./Todo";

export default function Todolist() {
    const { todolist } = useTodo();
    return (
        <ul className="flex flex-col w-96 h-auto gap-3 mt-3">
            <AnimatePresence>{todolist && todolist?.map(data => <Todo key={data.id} data={data} />)}</AnimatePresence>
        </ul>
    );
}
