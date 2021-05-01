import { ref, computed } from "vue";

interface Post {
  name: string;
  text: string;
  email: string;
}

const posts = ref<Post[]>([
  {
    name: "Put out the trash",
    text: "The trash gets stinky after a while so better to get rid of it now",
    email: "khar@gmail.com",
  },
  {
    name: "Do your homework",
    text: "Best to do our homework in order to get a good job",
    email: "mastaraz@gmail.com",
  },
]);

const filter = ref<string>("");

export const postController = () => {
  const filteredPosts = computed(() => {
    return posts.value.filter(
      (p) =>
        p.name.toLowerCase().includes(filter.value.toLowerCase()) ||
        p.text.toLowerCase().includes(filter.value.toLowerCase()) ||
        p.email.toLowerCase().includes(filter.value.toLowerCase())
    );
  });
  const addPost = (post: Post): void => {
    posts.value.push(post);
  };

  const removePost = (index: number): void => {
    posts.value.splice(index, 1);
  };

  return { posts, addPost, removePost, filter, filteredPosts };
};
