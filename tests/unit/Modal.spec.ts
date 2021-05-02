import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/core/Modal.vue";
import { modalController } from "@/controllers/modalController";

describe("Modal", () => {
  it("should have componentname attribute update when value is set", () => {
    const wrapper = shallowMount(Modal, {
      props: { componentName: "ToDoForm" },
    });

    const { setComponentName } = modalController();
    setComponentName("ToDoForm");
    expect(wrapper.attributes("componentname")).toBe("ToDoForm");
  });

  it("should not have an attribute value", () => {
    const wrapper = shallowMount(Modal);
    expect(wrapper.attributes("componentname")).toBe(undefined);
  });
});
