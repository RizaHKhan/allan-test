import { toRefs, reactive, ref } from "vue";
import { modalController } from "./modalController.ts";

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
      for (const i in userInfo) {
        userInfo[i] = "";
      }
      setComponentName("SuccessMessage");
    }
  };
  return { ...toRefs(userInfo), handleSubmit, errors };
};
