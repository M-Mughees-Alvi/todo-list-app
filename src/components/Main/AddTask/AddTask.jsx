import "./AddTask.css";
import { useState } from "react";
function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <label htmlFor="addTask">
        <input
          type="text"
          id="addTask"
          name="addTask"
          value={text}
          placeholder="Add Your To-do Task"
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTask;
