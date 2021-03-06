import { toRefs, reactive, ref } from "vue";
import { modalController } from "./modalController";

interface UserInfo {
  name: string;
  email: string;
  password: string;
  bio: string;
}

const userInfo = reactive<UserInfo>({
  name: "",
  email: "",
  password: "",
  bio: "",
});

const { setComponentName } = modalController();

export const userInfoController = () => {
  const errors = ref<boolean>(false);
  const handleSubmit = () => {
    if (
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.password ||
      !userInfo.bio
    ) {
      errors.value = true;
    } else {
      errors.value = false;
      userInfo.name = "";
      userInfo.email = "";
      userInfo.password = "";
      userInfo.bio = "";
      setComponentName("SuccessMessage");
    }
  };
  return { ...toRefs(userInfo), handleSubmit, errors };
};
