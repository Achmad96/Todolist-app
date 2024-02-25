import { RiTodoFill } from "react-icons/ri";
import { useTodo } from "../providers/TodoProvider";
import { TodoType } from "../types";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

export default function TodoInput() {
    const { setTodolist } = useTodo();
    const [todo, setTodo] = useState<string | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    return (
        <>
            <label htmlFor="my_modal_7" className="btn">
                Create new todo
            </label>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" onChange={(e: ChangeEvent<HTMLInputElement>) => e.currentTarget.value === "on" && ref.current?.focus()} />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">TODO!</h3>
                    <label className="input input-bordered flex items-center gap-2 mt-3">
                        <RiTodoFill />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Create todo"
                            ref={ref}
                            maxLength={35}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.currentTarget.value)}
                            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                                if (e.key === "Enter" && todo && todo.length <= 35) {
                                    setTodolist((prev: TodoType[]) => [...prev, { id: uuid(), todo, date: new Date(), finished: false }]);
                                    setTodo(null);
                                    e.currentTarget.value = "";
                                }
                            }}
                        />
                    </label>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                </label>
            </div>
        </>
    );
}
