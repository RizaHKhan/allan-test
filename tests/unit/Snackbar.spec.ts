import { shallowMount } from "@vue/test-utils";
import Snackbar from "@/components/core/Snackbar.vue";

describe("Snackbar", () => {
  it("should not display anything without any snacks", () => {
    const wrapper = shallowMound(Snackbar, {});
  });
  it("snacks should change after a few seconds", () => {});
  it("should disappear if button is clickec");
});
