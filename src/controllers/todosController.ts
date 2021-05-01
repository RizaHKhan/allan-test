import { ref } from "vue";

interface Todo {
  name: string;
  text: string;
}

const todos = ref<Todo[]>([
  {
    name: "Put out the trash",
    text: "The trash gets stinky after a while so better to get rid of it now",
  },
  {
    name: "Do your homework",
    text: "Best to do our homework in order to get a good job",
  },
]);

export const todosController = () => {
  const addTodo = (todo: Todo): void => {
    todos.value.push(todo);
  };

  const removeTodo = (index: number): void => {
    todos.value.splice(index, 1);
  };

  return { todos, addTodo, removeTodo };
};
