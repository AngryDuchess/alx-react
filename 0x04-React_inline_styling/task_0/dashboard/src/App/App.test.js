import { shallow, mount } from "enzyme";
import App from "./App";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { jest } from "@jest/globals";

describe("<App />", () => {
  it("renders the react app", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it("contains notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications").length).toEqual(1);
  });
  it("contains header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header").length).toEqual(1);
  });
  it("contains footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Footer").length).toEqual(1);
  });
  it("contains course list component", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).exists()).toEqual(false);
    expect(wrapper.find(CourseList).exists()).toEqual(true);
  });
  it("contains login component", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).exists()).toEqual(true);
    expect(wrapper.find(CourseList).exists()).toEqual(false);
  });
});

//mock logout function
describe("when ctrl+h is pressed", () => {
  it("calls logout function", () => {
    const mockFn = jest.fn();
    const wrapper = mount(<App logOut={mockFn} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    window.dispatchEvent(event);
    expect(mockFn).toHaveBeenCalled(1);
    wrapper.unmount();
  });

  // mock alert window
  window.alert = jest.fn();
  it("calls alert when ctrl+h is pressed", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    window.dispatchEvent(event);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('alert is loggin user out', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);
    expect(spy).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
    wrapper.unmount();
  })
  window.alert.mockClear();
});
