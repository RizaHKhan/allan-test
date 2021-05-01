import { ref } from "vue";

const componentName = ref<string>("");

export const modalController = () => {
  const handleClickOutside = (e: HTMLDivElement) => {
    if (e.classList.contains("modal")) {
      componentName.value = "";
    }
  };

  const setComponentName = (component: string) => {
    componentName.value = component;
  };

  return { handleClickOutside, componentName, setComponentName };
};
