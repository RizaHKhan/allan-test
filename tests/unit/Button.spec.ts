import { shallowMount } from "@vue/test-utils";
import Button from "@/components/core/Button.vue";

describe("Button", () => {
  it("emits a on-click event", () => {
    const title = "Submit";
    const wrapper = shallowMount(Button, {
      props: { title },
    });

    const button = wrapper.find("button");
    button.trigger("click");
    expect(button.text()).toBe("Submit");
    expect(wrapper.emitted("on-click")).toBeTruthy();
  });
});
