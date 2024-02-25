import "./App.css";
import { RiTodoFill } from "react-icons/ri";

function App() {
    return (
        <main className="w-full h-dvh flex justify-center items-start pt-32">
            <div className="w-96">
                <label className="input input-bordered flex items-center gap-2">
                    <RiTodoFill />
                    <input type="text" className="grow" placeholder="Create todo" />
                </label>
            </div>
        </main>
    );
}

export default App;
