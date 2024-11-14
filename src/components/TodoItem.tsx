import "./Todos.css";
const TodoItem = ({ todo, deleteTodo, markASComplete }: any) => {
  return (
    <>
      <div className="todoItemCOntainer">
        <input
          type="checkbox"
          onChange={() => {
            markASComplete(todo.id);
          }}
          checked={todo.complete}
        />
        <div className="todoTitle">{todo.title}</div>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
          className="deleteBtn"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
