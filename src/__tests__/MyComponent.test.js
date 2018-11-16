import React from 'react';
import { mount, render } from 'enzyme';
import MyComponent from '../MyComponent';

describe("MyComponent", () => {
  it("has a single button which can be found using an id selector", () => {
    const rendered = mount(<MyComponent id="foo" />);

    expect(rendered.find("#foo").length).toBe(1);
  });

  it("ok, but at least host nodes works right?", () => {
    const rendered = mount(<MyComponent id="foo" />);

    expect(rendered.hostNodes().find("#foo").length).toBe(1);
  });

  it("maybe it works with render", () => {
    const rendered = render(<MyComponent id="foo" />);

    expect(rendered.find("#foo").length).toBe(1);
  });

  it("I hate my job sometimes", () => {
    expect(0).toBe(1);
  });
})