interface ResposeMock {
  data: number;
}

const fetchCount = (amount = 1): Promise<ResposeMock> => {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
};

export default fetchCount;
