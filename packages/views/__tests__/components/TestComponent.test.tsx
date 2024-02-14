import renderer from "react-test-renderer";
import { TestComponent } from "../..";

describe("Test component", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(<TestComponent message="Test string"></TestComponent>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
