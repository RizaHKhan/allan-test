import { shallowMount } from "@vue/test-utils";
import Input from "@/components/core/Input.vue";

describe("Input", () => {
  it("emits an event on input", async () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: "name",
      },
    });

    wrapper.vm.$emit("update:modelValue", "123");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")).toEqual([["123"]]);
  });
});
