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
    it("should reply with greeting the user by their name", () => {
        // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
        // * Input: Bob
        const botReply1 = getBotReply("Bob");
        // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
        const expectedReply1 =
            "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";

        // * Input: "yes"
        // * Output: "Oh you are ready to party Bob! You are my type of person. Do you like the feeling of bubbles in your mouth?"
        // * Input: "yes"
        // * Output: "You want a party in your mouth huh! Are you feeling sweet or bitter today?"
        // * Input: "bitter"
        // * Output: "I agree, bitter is better. Let me pour you a beer. Dark or light?"
        // * Input: "dark"
        // * Output: "Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type restart."

        // Uncomment the following line and update your expectation
        expect(botReply1).toEqual(expectedReply1);
    });
});
