import { toRefs, reactive, ref } from "vue";

interface Snack {
  title: string;
  description: string;
  buttonText: string;
}

const snack = reactive<Snack>({
  title: "",
  description: "",
  buttonText: "",
});

const snacks = ref<Snack[]>([]);

export const snackbarController = () => {
  return { ...toRefs(snack) };
};
