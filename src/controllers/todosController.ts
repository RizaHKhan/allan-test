import { ref, computed } from "vue";

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
  const filter = ref<string>("");

  const filteredTodos = computed(() => {
    return todos.value.filter(
      (p) =>
        p.name.toLowerCase().includes(filter.value.toLowerCase()) ||
        p.text.toLowerCase().includes(filter.value.toLowerCase())
    );
  });

  const addTodo = (todo: Todo): void => {
    todos.value.push(todo);
  };

  const removeTodo = (index: number): void => {
    todos.value.splice(index, 1);
  };

  return { filteredTodos, addTodo, removeTodo, filter };
};
