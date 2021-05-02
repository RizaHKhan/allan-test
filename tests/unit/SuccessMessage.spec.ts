import { shallowMount } from "@vue/test-utils";
import SuccessMessage from "@/components/core/SuccessMessage.vue";

describe("SuccessMessage", () => {
  it("should show the hardcoded success message", () => {
    const wrapper = shallowMount(SuccessMessage);
    expect(wrapper.text()).toBe("Info was saved successfully!");
  });
});
