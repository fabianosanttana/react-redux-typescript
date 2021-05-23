// import React from "react";
// import { render } from "@testing-library/react";
// import Counter from "../Counter";
// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";
// import { store } from "app/store";
// import { shallow, mount } from "enzyme";

// describe("counter element", () => {
//   const initialDisplayedElement = 0;
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(
//       <Provider store={store}>
//         <Counter />
//       </Provider>
//     );
//   });

//   it("render Counter", () => {
//     expect(wrapper.length).toEqual(1);
//   });
//   // it("should get the initial counter state", () => {
//   //   const { getByTestId } = render(<Counter />);
//   //   // expect(counterReducer(undefined, { type: "unknown" })).toEqual({
//   //   //   value: 0,
//   //   //   status: "idle",
//   //   // });
//   //   expect(initialDisplayedElement).toEqual(0);
//   // });

//   //   it("should handle increment", () => {
//   //     const actual = counterReducer(initialState, increment());
//   //     expect(actual.value).toEqual(4);
//   //   });

//   //   it("should handle decrement", () => {
//   //     const actual = counterReducer(initialState, decrement());
//   //     expect(actual.value).toEqual(2);
//   //   });

//   //   it("should handle incrementByAmount", () => {
//   //     const actual = counterReducer(initialState, incrementByAmount(2));
//   //     expect(actual.value).toEqual(5);
//   //   });

//   //   it("should handle resetCounter", () => {
//   //     const actual = counterReducer(initialState, resetCounter());
//   //     expect(actual.value).toEqual(0);
//   //   });
// });

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import Counter from "../Counter";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});