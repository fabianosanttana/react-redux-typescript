interface ResposeMock {
  data: number;
}

const fetchCount = (amount = 1): Promise<ResposeMock> => {
  return new Promise<{ data: number }>((resolve) => {
    // Condition was throw an error to try failed state in slice
    if (amount === 5) throw new Error();
    setTimeout(() => resolve({ data: amount }), 500);
  });
};

export default fetchCount;
