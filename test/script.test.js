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
    expect(botReply1).toEqual(expectedReply1);
  });

  it("should greet the user by their name, then provide the correct answers for the yes, yes, bitter, dark path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "yes"
    const botReply2 = getBotReply("yes");
    // * Output: "Oh you are ready to party Bob! You are my type of person. Do you like the feeling of bubbles in your mouth?"
    const expectedReply2 =
      "Oh you are ready to party Bob! You are my type of person. Do you like the feeling of bubbles in your mouth?";
    // * Input: "yes"
    const botReply3 = getBotReply("yes");
    // * Output: "You want a party in your mouth huh! Are you feeling sweet or bitter today?"
    const expectedReply3 =
      "You want a party in your mouth huh! Are you feeling sweet or bitter today?";
    // * Input: "bitter"
    const botReply4 = getBotReply("bitter");
    // * Output: "I agree, bitter is better. Let me pour you a beer. Dark or light?"
    const expectedReply4 =
      "I agree, bitter is better. Let me pour you a beer. Dark or light?";
    // * Input: "dark"
    const botReply5 = getBotReply("dark");
    // * Output: "Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type restart."
    const expectedReply5 =
      "Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // * Output: "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?"
  // * Input: "yes"
  // * Output: "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?"
  // * Input: "no"
  // * Output: "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you want decide you need another more exciting drink afterwards just type restart"

  it("should greet the user by their name, then provide the correct answers for the yes, yes, bitter, dark path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "no"
    const botReply2 = getBotReply("no");
    // * Output: "Oh you are ready to party Bob! You are my type of person. Do you like the feeling of bubbles in your mouth?"
    const expectedReply2 =
      "Oh you are ready to party Bob! You are my type of person. Do you like the feeling of bubbles in your mouth?";
    // * Input: "yes"
    const botReply3 = getBotReply("yes");
    // * Output: "You want a party in your mouth huh! Are you feeling sweet or bitter today?"
    const expectedReply3 =
      "You want a party in your mouth huh! Are you feeling sweet or bitter today?";
    // * Input: "bitter"
    const botReply4 = getBotReply("bitter");
    // * Output: "I agree, bitter is better. Let me pour you a beer. Dark or light?"
    const expectedReply4 =
      "I agree, bitter is better. Let me pour you a beer. Dark or light?";
    // * Input: "dark"
    const botReply5 = getBotReply("dark");
    // * Output: "Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type restart."
    const expectedReply5 =
      "Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should restart the chatbot and have correct greeting for a different user name", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "restart"
    const botReply2 = getBotReply("restart");
    // * Output: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    const expectedReply2 =
      "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?";
    // * Input: "Anna"
    const botReply3 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    const expectedReply3 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
});
