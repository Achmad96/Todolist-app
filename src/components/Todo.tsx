import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { useTodo } from "../providers/TodoProvider";
import { TodoType } from "../types";

export default function Todo({ data }: { data: TodoType }) {
    const { id, todo, finished } = data;
    const { todolist, setTodolist } = useTodo();
    const rest = todolist.filter(v => v.id !== id);
    return (
        <motion.li
            className={`border ${finished && "border-accent"} hover:cursor-default rounded-md p-3 flex items-center justify-between`}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={{
                visible: {
                    opacity: 1,
                    transition: {
                        delay: 0.3,
                    },
                },
                hidden: {
                    opacity: 0,
                },
            }}
        >
            <p
                onClick={() => {
                    setTodolist(todolist.map(todo => (todo.id === id ? { ...todo, finished: !finished } : todo)));
                }}
            >
                {todo}
            </p>
            <FaTrash onClick={() => setTodolist([...rest])} />
        </motion.li>
    );
}
