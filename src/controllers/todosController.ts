import { ref } from "vue";

interface Todo {
  title: string;
  description: string;
}

const todos = ref<Todo[]>([
  {
    title: "Put out the trash",
    description:
      "The trash gets stinky after a while so better to get rid of it now",
  },
  {
    title: "Do your homework",
    description: "Best to do our homework in order to get a good job",
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
