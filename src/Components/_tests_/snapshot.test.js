import "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import HarryPotterReducer, {
  initialState,
} from "../../store/HarryPotterReducer";
import { ADD_HP_PERSONS } from "../../store/types/types";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";

describe("API Test", () => {
  it("Test for HarryPotterReducer", () => {
    const reducer = HarryPotterReducer(initialState, ADD_HP_PERSONS);
    expect(reducer).toMatchSnapshot();
  });
});

describe("Component NotFound Test", () => {
  it("Test for Component NotFound", () => {
    const component = render(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});

describe("Profile Test", () => {
  it("Test for Profile", () => {
    const component = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
