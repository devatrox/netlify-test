import { Test_test } from "./operations/__generated__/Test";

const resolvers = {
  Query: {
    test: (_: any): Test_test => ({
      id: "t3g48vt83498",
      name: "Hello",
    }),
  },
};

export { resolvers };
