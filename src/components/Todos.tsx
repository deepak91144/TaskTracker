import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteATodo,
  deleteOneTodo,
  editTodo,
  fetchTodos,
} from "../store/slice/TodoSlice";
const Todos = () => {
  const [todo, setTodo] = useState("");

  const {
    todoReducer: { todos },
  } = useSelector((store: any) => store);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = () => {
    const todoObject = {
      id: Math.random(),
      title: todo,
      complete: false,
    };

    dispatch(addTodo(todoObject));
    setTodo("");
  };
  const deleteTodo = async (id: String) => {
    dispatch(deleteATodo(id));
    setTimeout(() => {
      dispatch(fetchTodos());
    }, 3000);
  };
  const markASComplete = (id: String) => {
    dispatch(editTodo(id));
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <div>Todos</div>
      <div className="mainCOntainer">
        <div>
          <div className="todoForm">
            <input
              type="text"
              onChange={handleOnChange}
              value={todo}
              className="todoInputStyle"
              placeholder="Enter Task..."
            />
            <button className="addBtn" onClick={handleSubmit}>
              Add
            </button>
          </div>
          {todos.length > 0 && (
            <div className="todosContainer">
              {todos.map((todo: Object) => {
                return (
                  <>
                    <TodoItem
                      todo={todo}
                      deleteTodo={deleteTodo}
                      markASComplete={markASComplete}
                    />
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Todos;
