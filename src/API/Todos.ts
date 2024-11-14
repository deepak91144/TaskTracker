import axios from "axios";

export const fetchAllTodos = async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return posts;
};

export const deleteTodo = async (id: String) => {
  const posts = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return posts;
};
