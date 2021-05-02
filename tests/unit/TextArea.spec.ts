import { shallowMount } from "@vue/test-utils";
import TextArea from "@/components/core/TextArea.vue";

describe("TextArea", () => {
  it("emits an event on input", async () => {
    const wrapper = shallowMount(TextArea, {
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
