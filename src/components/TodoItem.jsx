function TodoItem({
  todoObj,
  onDelete,
  onEdit,
  editingId,
  onSaveEdit,
  onCancelEdit,
  editInput,
  setEditInput,
  onCheck,
  onRestore,
  onPermanentDelete,
}) {
  const isEditing = editingId === todoObj.id;

  return (
    <div
      className={`todo-item ${
        todoObj.complete ? "is-completed" : ""
      } ${todoObj.deleted ? "is-deleted" : ""}`}
    >
      {isEditing ? (
        <div className="edit-mode">
          <input
            autoFocus
            className="edit-input"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSaveEdit();
              }

              if (e.key === "Escape") {
                onCancelEdit();
              }
            }}
          />

          <div className="edit-actions">
            <button
              className="save-button"
              onClick={onSaveEdit}
            >
              Save
            </button>

            <button
              className="cancel-button"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-content">
            {!todoObj.deleted && (
              <input
                type="checkbox"
                checked={todoObj.complete}
                onChange={() => onCheck(todoObj.id)}
              />
            )}

            <p>{todoObj.text}</p>

            {todoObj.complete && !todoObj.deleted && (
              <span className="completed-label">
                Completed
              </span>
            )}
          </div>

          <div className="todo-actions">
            {todoObj.deleted ? (
              <>
                <button
                  className="restore-button"
                  onClick={() => onRestore(todoObj.id)}
                >
                  Restore
                </button>

                <button
                  className="permanent-delete-button"
                  onClick={() => onPermanentDelete(todoObj.id)}
                >
                  Delete permanently
                </button>
              </>
            ) : (
              <>
                <button
                  className="edit-button"
                  onClick={() => onEdit(todoObj)}
                >
                  Edit
                </button>

                <button
                  className="delete-button"
                  onClick={() => onDelete(todoObj.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;