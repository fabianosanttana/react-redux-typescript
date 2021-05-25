import counterReducer, {
  CounterState,
  increment,
  decrement,
  resetCounter,
  incrementByAmount,
} from "../counterSlice";

describe("counter reducer", () => {
  const initialState: CounterState = {
    value: 3,
    status: "idle",
  };

  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(3);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });

  it("should handle resetCounter", () => {
    const actual = counterReducer(initialState, resetCounter());
    expect(actual.value).toEqual(0);
  });
});
