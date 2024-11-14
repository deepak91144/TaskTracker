// reducers.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchAllTodos } from "../../API/Todos";
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteOneTodo: (state, action) => {
      const oldTodos = [...state.todos];
      const todos = oldTodos.filter((todo: Object) => {
        return todo.id !== action.payload;
      });
      state.todos = [...todos];
    },
    editTodo: (state, action) => {
      const oldTodos = [...state.todos];
      oldTodos.forEach((todo: Object, ind: Number) => {
        if (action.payload === todo.id) {
          oldTodos[ind].complete = true;
        }
      });
      state.todos = [...oldTodos];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        console.log("state");
      })

      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = [...action.payload];
      })

      .addCase(
        fetchTodos.rejected,

        (state, action) => {
          console.log("state");
        }
      );
  },
});
export const fetchTodos: any = createAsyncThunk("fetchTodos", async () => {
  const todos = await fetchAllTodos();
  console.log("todos", todos);

  return todos.data;
});

export const deleteATodo: any = createAsyncThunk(
  "fetchTodos",
  async (id: String) => {
    const todos = await deleteTodo(id);
  }
);
export const { addTodo, deleteOneTodo, editTodo } = todoSlice.actions;
export const todos = todoSlice.reducer;
