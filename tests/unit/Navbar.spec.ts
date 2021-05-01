import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/core/Navbar.vue";

describe("Navbar", () => {
  it("should render Vue-App", () => {
    const wrapper = shallowMount(Navbar);
    expect(wrapper.text()).toBe("Vue-App");
  });
});
