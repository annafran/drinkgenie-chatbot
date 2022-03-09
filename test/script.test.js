// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should reply with [PUT YOUR DESCRIPTION HERE]", () => {
    const botReply1 = getBotReply("Harry");
    const expectedReply1 = "";

    // Uncomment the following line and update your expectation
    // expect(botReply1).toEqual(expectedReply1);
  });
});
