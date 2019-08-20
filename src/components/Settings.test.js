import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Settings } from "./Settings";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    users: {
      nat: "GB"
    }
  };

  const wrapper = shallow(<Settings {...props} />);

  return {
    props,
    wrapper
  };
}

describe("components", () => {
  describe("Settings", () => {
    it("checked", () => {
      const { wrapper } = setup();
      wrapper.find("input").forEach(node => {
        if (!node.props("#GB")) {
          expect(node.props().checked).toEqual(true);
        }
      });
    });
  });
});
