import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/yes-no/YesNo";
import { getView } from "../localVue";

let value = true;
const factory = () => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      label: "Hello World",
      value: value
    },
    localVue,
    store
  });
};

describe("YesNo", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Can select no", () => {
    const wrapper = factory();
    expect(wrapper.vm.$data.newValue).toBe(true);

    wrapper.find("div div.control div.buttons.has-addons span.button:nth-child(2)").trigger("click");
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([false]);
    expect(wrapper.vm.$data.newValue).toBe(false);
  });

  test("Update props affect newValue", () => {
    const wrapper = factory();
    expect(wrapper.vm.$data.newValue).toBe(true);

    wrapper.setProps({ value: false });
    expect(wrapper.vm.$data.newValue).toBe(false);
  });
});
