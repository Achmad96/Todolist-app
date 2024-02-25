import "./App.css";
import TodoInput from "./components/TodoModal";
import Todolist from "./components/Todolist";

function App() {
    return (
        <main className="w-full h-dvh flex flex-col justify-start items-center mt-36">
            <TodoInput />
            <Todolist />
        </main>
    );
}

export default App;
