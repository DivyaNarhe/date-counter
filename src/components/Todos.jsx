import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function Todos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo() {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      complete: false,
      deleted: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function handleDeleteTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, deleted: true }
          : todo
      )
    );

    if (editingId === id) {
      handleCancelEdit();
    }
  }

  function handleRestoreTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, deleted: false }
          : todo
      )
    );
  }

  function handlePermanentDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEditTodo(todo) {
    setEditingId(todo.id);
    setEditInput(todo.text);
  }

  function handleSaveEdit() {
    if (!editInput.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id === editingId
          ? { ...todo, text: editInput.trim() }
          : todo
      )
    );

    handleCancelEdit();
  }

  function handleCancelEdit() {
    setEditingId(null);
    setEditInput("");
  }

  function handleCheck(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, complete: !todo.complete }
          : todo
      )
    );
  }

  let filteredTodos;

  if (activeTab === "all") {
    filteredTodos = todos.filter((todo) => !todo.deleted);
  } else if (activeTab === "completed") {
    filteredTodos = todos.filter(
      (todo) => todo.complete && !todo.deleted
    );
  } else {
    filteredTodos = todos.filter((todo) => todo.deleted);
  }

  const activeCount = todos.filter(
    (todo) => !todo.deleted && !todo.complete
  ).length;

  const completedCount = todos.filter(
    (todo) => !todo.deleted && todo.complete
  ).length;

  const trashCount = todos.filter(
    (todo) => todo.deleted
  ).length;

  return (
    <div className="todo-page">
      <div className="todo-container">

        <header className="todo-header">
          <div>
            <span className="eyebrow">MY TASKS</span>

            <h1>Todo List</h1>

            <p>
              Stay organized and get things done.
            </p>
          </div>

          <div className="task-summary">
            <strong>{activeCount}</strong>
            <span>active</span>
          </div>
        </header>

        <div className="add-todo-card">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
            placeholder="What needs to be done?"
          />

          <button
            className="add-button"
            onClick={handleAddTodo}
          >
            + Add Task
          </button>
        </div>

        <div className="tabs">
          <button
            className={
              activeTab === "all"
                ? "tab active"
                : "tab"
            }
            onClick={() => {
              setActiveTab("all");
              handleCancelEdit();
            }}
          >
            All
            <span>{activeCount + completedCount}</span>
          </button>

          <button
            className={
              activeTab === "completed"
                ? "tab active"
                : "tab"
            }
            onClick={() => {
              setActiveTab("completed");
              handleCancelEdit();
            }}
          >
            Completed
            <span>{completedCount}</span>
          </button>

          <button
            className={
              activeTab === "trash"
                ? "tab active trash-tab"
                : "tab"
            }
            onClick={() => {
              setActiveTab("trash");
              handleCancelEdit();
            }}
          >
            Trash
            <span>{trashCount}</span>
          </button>
        </div>

        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                {activeTab === "trash" ? "🗑️" : "✓"}
              </div>

              <h2>
                {activeTab === "all" &&
                  "No tasks yet"}

                {activeTab === "completed" &&
                  "No completed tasks"}

                {activeTab === "trash" &&
                  "Trash is empty"}
              </h2>

              <p>
                {activeTab === "all" &&
                  "Add your first task above and start being productive."}

                {activeTab === "completed" &&
                  "Completed tasks will appear here."}

                {activeTab === "trash" &&
                  "Deleted tasks will appear here."}
              </p>

              {activeTab === "all" && (
                <button
                  className="empty-add-button"
                  onClick={() =>
                    document
                      .querySelector(".add-todo-card input")
                      ?.focus()
                  }
                >
                  Add your first task
                </button>
              )}
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todoObj={todo}
                onDelete={handleDeleteTodo}
                onEdit={handleEditTodo}
                editingId={editingId}
                onSaveEdit={handleSaveEdit}
                onCancelEdit={handleCancelEdit}
                editInput={editInput}
                setEditInput={setEditInput}
                onCheck={handleCheck}
                onRestore={handleRestoreTodo}
                onPermanentDelete={handlePermanentDelete}
              />
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="todo-footer">
            <span>{activeCount} active</span>

            <span>
              {completedCount} completed
            </span>

            <span>
              {trashCount} in trash
            </span>
          </div>
        )}

      </div>
    </div>
  );
}

export default Todos;