import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AddTask from "./components/Main/AddTask/AddTask";
import List from "./components/Main/List/List";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("userTodos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleAddTask = (text) => {
    if (!text.trim()) return;
    const now = new Date();
    const newTodo = {
      id: Date.now(),
      text: text,
      isCompleted: false,
      date: `${now.toLocaleDateString()} `,
      currTime: `${now.toLocaleTimeString()}`,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  const handleDeleteTask = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("userTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <AddTask onAddTask={handleAddTask} />
        <List
          todoList={todos}
          setTodoList={setTodos}
          onDelete={handleDeleteTask}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
