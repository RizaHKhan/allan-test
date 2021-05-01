import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/core/Navbar.vue";

describe("Navbar", () => {
  const wrapper = shallowMount(Navbar);
  expect(wrapper.text()).toBe("Logo");
});
