import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import Counter from "../Counter";

describe("renders counter element", () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

  it("counter label must be in document", () => {
    const { getByTestId } = setup();

    expect(getByTestId("counter")).toBeInTheDocument();
    expect(getByTestId("counter").innerHTML).toEqual("0");
  });

  it("increment value should be ok", () => {
    const { getByTestId } = setup();

    fireEvent.click(getByTestId("btn-increment-value"));
    expect(getByTestId("counter").innerHTML).toEqual("1");
  });

  it("increment custom value should be ok", () => {
    const { getByTestId } = setup();

    fireEvent.change(getByTestId("input-increment-custom-value"), {
      target: { value: "23" },
    });
    fireEvent.click(getByTestId("btn-increment-custom-value"));

    expect(getByTestId("counter").innerHTML).toEqual("24");
  });

  it("reset counter should be returned to 0", () => {
    const { getByTestId } = setup();

    fireEvent.click(getByTestId("btn-reset-value"));

    expect(getByTestId("counter").innerHTML).toEqual("0");
  });

  it("make a snapshot should be ok", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
