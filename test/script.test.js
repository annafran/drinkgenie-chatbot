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

  it("should greet the user by their name, then provide the correct answers for the yes, yes, bitter, light path", () => {
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
    // * Input: "light"
    const botReply5 = getBotReply("light");
    // * Output: "So you are a bit of a softie. I have the perfect hazy IPA for you. This is a craft beer from NZ. Enjoy your beer and if you want another drink, just type restart."
    const expectedReply5 =
      "So you are a bit of a softie. I have the perfect hazy IPA for you. This is a craft beer from NZ. Enjoy your beer and if you want another drink, just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should greet the user by their name, then provide the correct answers for the yes, yes, sweet path", () => {
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
    // * Input: "sweet"
    const botReply4 = getBotReply("sweet");
    // * Output: "Ok sweetie I'll prepare you a mimosa, light and fruity just like you. Enjoy your drink and if you want another one, just type restart."
    const expectedReply4 =
      "Ok sweetie I'll prepare you a mimosa, light and fruity just like you. Enjoy your drink and if you want another one, just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should greet the user by their name, then provide the correct answers for the yes, no, yes path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Mary
    const botReply1 = getBotReply("Mary");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Mary, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "yes"
    const botReply2 = getBotReply("yes");
    // * Output: "Oh you are ready to party Mary! You are my type of person. Do you like the feeling of bubbles in your mouth?"
    const expectedReply2 =
      "Oh you are ready to party Mary! You are my type of person. Do you like the feeling of bubbles in your mouth?";
    // * Input: "no"
    const botReply3 = getBotReply("no");
    // * Output: "No bubbles to beat the belly bloat, good choice. Tell me is it prior to midday?"
    const expectedReply3 =
      "No bubbles to beat the belly bloat, good choice. Tell me is it prior to midday?";
    // * Input: "yes"
    const botReply4 = getBotReply("yes");
    // * Output: "Alcohol prior to midday - you must be Spanish! We will have to get you a vermut with some tapas. If that doesn't quench your thirst enough, just type restart and order again."
    const expectedReply4 =
      "Alcohol prior to midday - you must be Spanish! We will have to get you a vermut with some tapas. If that doesn't quench your thirst enough, just type restart and order again.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should greet the user by their name, then provide the correct answers for the yes, no, no, red path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Mary
    const botReply1 = getBotReply("Mary");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Mary, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "yes"
    const botReply2 = getBotReply("yes");
    // * Output: "Oh you are ready to party Mary! You are my type of person. Do you like the feeling of bubbles in your mouth?"
    const expectedReply2 =
      "Oh you are ready to party Mary! You are my type of person. Do you like the feeling of bubbles in your mouth?";
    // * Input: "no"
    const botReply3 = getBotReply("no");
    // * Output: "No bubbles to beat the belly bloat, good choice. Tell me is it prior to midday?"
    const expectedReply3 =
      "No bubbles to beat the belly bloat, good choice. Tell me is it prior to midday?";
    // * Input: "no"
    const botReply4 = getBotReply("no");
    // * Output: "You are a bit too sensitive waiting until after midday to crack open your first drink.  Let's go with a wine - red or white?"
    const expectedReply4 =
      "You are a bit too sensitive waiting until after midday to crack open your first drink.  Let's go with a wine - red or white?";
    // * Input: "red"
    const botReply5 = getBotReply("red");
    // * Output: "Red red wiiiiineee, stay close to meeeee! This Argentinean Malbec is my favourite. Enjoy your vino tinto and if you want another one, just type restart."
    const expectedReply5 =
      "Red red wiiiiineee, stay close to meeeee! This Argentinean Malbec is my favourite. Enjoy your vino tinto and if you want another one, just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should greet the user by their name, then provide the correct answers for the yes, no, no, white path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Mary
    const botReply1 = getBotReply("Mary");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Mary, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "yes"
    const botReply2 = getBotReply("yes");
    // * Output: "Oh you are ready to party Mary! You are my type of person. Do you like the feeling of bubbles in your mouth?"
    const expectedReply2 =
      "Oh you are ready to party Mary! You are my type of person. Do you like the feeling of bubbles in your mouth?";
    // * Input: "no"
    const botReply3 = getBotReply("no");
    // * Output: "No bubbles to beat the belly bloat, good choice. Tell me is it prior to midday?"
    const expectedReply3 =
      "No bubbles to beat the belly bloat, good choice. Tell me is it prior to midday?";
    // * Input: "no"
    const botReply4 = getBotReply("no");
    // * Output: "You are a bit too sensitive waiting until after midday to crack open your first drink.  Let's go with a wine - red or white?"
    const expectedReply4 =
      "You are a bit too sensitive waiting until after midday to crack open your first drink.  Let's go with a wine - red or white?";
    // * Input: "white"
    const botReply5 = getBotReply("white");
    // * Output: "Fresh and fruity, I do love myself a pinot gris.  Give this one from Waiheke Island a swirl in your mouth. If you need another just type restart."
    const expectedReply5 =
      "Fresh and fruity, I do love myself a pinot gris.  Give this one from Waiheke Island a swirl in your mouth. If you need another just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should greet the user by their name, then provide the correct answers for the no, yes, yes path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "no"
    const botReply2 = getBotReply("no");
    // * Output: "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?"
    const expectedReply2 =
      "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?";
    // * Input: "yes"
    const botReply3 = getBotReply("yes");
    // * Output: "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?"
    const expectedReply3 =
      "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?";
    // * Input: "yes"
    const botReply4 = getBotReply("yes");
    // * Output: "Let's quickly get a triple shot hot coffee into you before you fade away on me. If the 3 shots don't revive you and you need another, just type restart."
    const expectedReply4 =
      "Let's quickly get a triple shot hot coffee into you before you fade away on me. If the 3 shots don't revive you and you need another, just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should greet the user by their name, then provide the correct answers for the no, yes, no path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "no"
    const botReply2 = getBotReply("no");
    // * Output: "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?"
    const expectedReply2 =
      "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?";
    // * Input: "yes"
    const botReply3 = getBotReply("yes");
    // * Output: "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?"
    const expectedReply3 =
      "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?";
    // * Input: "no"
    const botReply4 = getBotReply("no");
    // * Output: "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you want decide you need another more exciting drink afterwards just type restart`
    const expectedReply4 =
      "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you want decide you need another more exciting drink afterwards just type restart";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should greet the user by their name, then provide the correct answers for the no, no, yes path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "no"
    const botReply2 = getBotReply("no");
    // * Output: "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?"
    const expectedReply2 =
      "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?";
    // * Input: "no"
    const botReply3 = getBotReply("no");
    // * Output: "Ok, something refreshing, let me think...Are you watching your waistline?"
    const expectedReply3 =
      "Ok, something refreshing, let me think...Are you watching your waistline?";
    // * Input: "yes"
    const botReply4 = getBotReply("yes");
    // * Output: "Sorry Anna, no fun drinks for you. I'll get you a water with cucumber.  I bet you regret your answer now huh! Enjoy your water and if you are still thirsty, just type restart."
    const expectedReply4 =
      "Sorry Anna, no fun drinks for you. I'll get you a water with cucumber.  I bet you regret your answer now huh! Enjoy your water and if you are still thirsty, just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should greet the user by their name, then provide the correct answers for the no, no, no path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "no"
    const botReply2 = getBotReply("no");
    // * Output: "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?"
    const expectedReply2 =
      "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?";
    // * Input: "no"
    const botReply3 = getBotReply("no");
    // * Output: "Ok, something refreshing, let me think...Are you watching your waistline?"
    const expectedReply3 =
      "Ok, something refreshing, let me think...Are you watching your waistline?";
    // * Input: "no"
    const botReply4 = getBotReply("no");
    // * Output: "Good answer. You can have the fat option - an iced chocolate with an extra serving of cream on top. I'll be hanging out here so if you want another beverage just type restart."
    const expectedReply4 =
      "Good answer. You can have the fat option - an iced chocolate with an extra serving of cream on top. I'll be hanging out here so if you want another beverage just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
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

  it("should provide a random drink option when the user types random", () => {
    //   * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    //   * Input: "Anna"
    const botReply1 = getBotReply("Anna");
    //   * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    //   * Input: "random"
    const botReply2 = getBotReply("random");
    //   * Output: "Bloody Bob" || "Jam n Tonic" || "Tequila Storm" || "Slime and Soda" || "Feeling Hot Hot Hot Chocolate";
    const expectedReply2 = [
      "Bloody Bob",
      "Jam n Tonic",
      "Tequila Storm",
      "Slime and Soda",
      "Feeling Hot Hot Hot Chocolate",
    ];

    const containsSome = (drinkOptions, botReply) => {
      return drinkOptions.some((randomDrink) => botReply.includes(randomDrink));
    };

    expect(botReply1).toEqual(expectedReply1);
    expect(containsSome(expectedReply2, botReply2)).toBeTruthy();
  });

  it("should provide instructions to reenter input if the bot doesn't understand", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "really?"
    const botReply2 = getBotReply("really?");
    // * Output: "Ohoh that answer didn't make sense to me. I think you have already had too much to drink! Make sure you answer with one of the valid options or type restart."
    const expectedReply2 =
      "Ohoh that answer didn't make sense to me. I think you have already had too much to drink! Make sure you answer with one of the valid options or type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
  });

  it("should provide the correct answers for the YEAH, Y, bitter, Dark path (capitilisation and variation of yes cases)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "YEAH"
    const botReply2 = getBotReply("YEAH");
    // * Output: "Oh you are ready to party Bob! You are my type of person. Do you like the feeling of bubbles in your mouth?"
    const expectedReply2 =
      "Oh you are ready to party Bob! You are my type of person. Do you like the feeling of bubbles in your mouth?";
    // * Input: "Y"
    const botReply3 = getBotReply("Y");
    // * Output: "You want a party in your mouth huh! Are you feeling sweet or bitter today?"
    const expectedReply3 =
      "You want a party in your mouth huh! Are you feeling sweet or bitter today?";
    // * Input: "bitter"
    const botReply4 = getBotReply("bitter");
    // * Output: "I agree, bitter is better. Let me pour you a beer. Dark or light?"
    const expectedReply4 =
      "I agree, bitter is better. Let me pour you a beer. Dark or light?";
    // * Input: "Dark"
    const botReply5 = getBotReply("Dark");
    // * Output: "Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type restart."
    const expectedReply5 =
      "Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type restart.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should provide the correct answers for the Nup, yes, N path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.";
    // * Input: "Nup"
    const botReply2 = getBotReply("Nup");
    // * Output: "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?"
    const expectedReply2 =
      "Aren't you boring! Not in the mood to party Anna? Are you feeling cold?";
    // * Input: "yes"
    const botReply3 = getBotReply("yes");
    // * Output: "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?"
    const expectedReply3 =
      "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?";
    // * Input: "N"
    const botReply4 = getBotReply("N");
    // * Output: "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you want decide you need another more exciting drink afterwards just type restart`
    const expectedReply4 =
      "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you want decide you need another more exciting drink afterwards just type restart";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
});
