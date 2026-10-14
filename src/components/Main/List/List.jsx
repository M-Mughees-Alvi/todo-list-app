import "./List.css";

function List({ todoList, setTodoList, onDelete }) {
  const handleCompletness = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };
  const handleAllCompleted = () => {
    setTodoList((prev) => prev.map((todo) => ({ ...todo, isCompleted: true })));
  };

  const handleDeleteAll = () => {
    setTodoList([]);
  };
  return (
    <div className="list-container">
      <div className="list-header">
        <button className="all-completed-btn" onClick={handleAllCompleted}>
          All Completed
        </button>
        <p>Be Motivated!</p>
        <button className="delete-all-btn" onClick={handleDeleteAll}>
          Delete All
        </button>
      </div>
      <div className="todo-list">
        {todoList.length === 0 ? (
          <p className="empty-message">
            Every great accomplishment begins with a single planned action.
            <br />
            Add your first task above and start building your momentum today!
          </p>
        ) : (
          todoList.map((todo) => (
            <div
              key={todo.id}
              className="task"
              style={{
                backgroundColor: todo.isCompleted ? "#0fca22" : "#994f00",
              }}
            >
              <label htmlFor={`task-${todo.id}`}>
                <input
                  type="checkbox"
                  id={`task-${todo.id}`}
                  checked={todo.isCompleted}
                  onChange={() => handleCompletness(todo.id)}
                />
              </label>
              <p
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                  color: todo.isCompleted ? "#a4ff80" : "#ffffff",
                }}
              >
                {todo.text}
              </p>
              <div
                className="todo-date-time"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  lineHeight: "1.5rem",
                }}
              >
                <span
                  className="task-date"
                  style={{
                    fontSize: "0.75rem",
                    opacity: 0.8,
                    color: todo.isCompleted ? "#a4ff80" : "#ffffff",
                  }}
                >
                  {todo.date}
                </span>
                <span
                  className="task-date"
                  style={{
                    fontSize: "0.75rem",
                    opacity: 0.8,
                    color: todo.isCompleted ? "#a4ff80" : "#ffffff",
                  }}
                >
                  {todo.currTime}
                </span>
              </div>
              <button onClick={() => onDelete(todo.id)}>X</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default List;
