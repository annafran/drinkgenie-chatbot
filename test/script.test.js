/**
 * @jest-environment jsdom
 */

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
  // **Path for checking name**
  it("should reply with greeting the user by their name", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
    expect(botReply1).toEqual(expectedReply1);
  });

  //   **Path for guinness**
  it("should greet the user by their name, then provide the correct answers for the guinness path (yes, yes, bitter, dark)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type <em>restart</em>.`
    const expectedReply5 = `Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  //   **Path for Hazy IPA**
  it("should greet the user by their name, then provide the correct answers for the Hazy IPA path (yes, yes, bitter, light)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `So you are a bit of a softie. I have the perfect hazy IPA for you. This is a craft beer from NZ. Enjoy your beer and if you want another drink, just type <em>restart</em>.`
    const expectedReply5 = `So you are a bit of a softie. I have the perfect hazy IPA for you. This is a craft beer from NZ. Enjoy your beer and if you want another drink, just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  //   **Path for Mimosa**
  it("should greet the user by their name, then provide the correct answers for the mimosa path (yes, yes, sweet)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Ok sweetie I'll prepare you a mimosa, light and fruity just like you. Enjoy your drink and if you want another one, just type <em>restart</em>.`
    const expectedReply4 = `Ok sweetie I'll prepare you a mimosa, light and fruity just like you. Enjoy your drink and if you want another one, just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  //   **Path for vermut**
  it("should greet the user by their name, then provide the correct answers for the vermut path (yes, no, yes)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Mary
    const botReply1 = getBotReply("Mary");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Mary, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Alcohol prior to midday - you must be Spanish! We will have to get you a vermut with some tapas. If that doesn't quench your thirst enough, just type <em>restart</em> and order again.`
    const expectedReply4 = `Alcohol prior to midday - you must be Spanish! We will have to get you a vermut with some tapas. If that doesn't quench your thirst enough, just type <em>restart</em> and order again.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  //   **Path for red wine**
  it("should greet the user by their name, then provide the correct answers for the red wine path (yes, no, no, red)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Mary
    const botReply1 = getBotReply("Mary");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Mary, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Red red wiiiiineee, stay close to meeeee! This Argentinean Malbec is my favourite. Enjoy your vino tinto and if you want another one, just type <em>restart</em>.`
    const expectedReply5 = `Red red wiiiiineee, stay close to meeeee! This Argentinean Malbec is my favourite. Enjoy your vino tinto and if you want another one, just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  //   **Path for white wine**
  it("should greet the user by their name, then provide the correct answers for the white wine path (yes, no, no, white)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Mary
    const botReply1 = getBotReply("Mary");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Mary, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Fresh and fruity, I do love myself a pinot gris.  Give this one from Waiheke Island a swirl in your mouth. If you need another just type <em>restart</em>.`
    const expectedReply5 = `Fresh and fruity, I do love myself a pinot gris.  Give this one from Waiheke Island a swirl in your mouth. If you need another just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  //   **Path for coffee**
  it("should greet the user by their name, then provide the correct answers for the coffee path (no, yes, yes)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Let's quickly get a triple shot hot coffee into you before you fade away on me. If the 3 shots don't revive you and you need another, just type <em>restart</em>.`
    const expectedReply4 = `Let's quickly get a triple shot hot coffee into you before you fade away on me. If the 3 shots don't revive you and you need another, just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  //   **Path for chamomile tea**
  it("should greet the user by their name, then provide the correct answers for the chamomile tea path (no, yes, no)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you decide you need another more exciting drink afterwards just type <em>restart</em>`
    const expectedReply4 =
      "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you decide you need another more exciting drink afterwards just type <em>restart</em>";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  //   **Path for water with cucumber**
  it("should greet the user by their name, then provide the correct answers for the water with cucumber path (no, no, yes)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Sorry Anna, no fun drinks for you. I'll get you a water with cucumber.  I bet you regret your answer now huh! Enjoy your water and if you are still thirsty, just type <em>restart</em>.`
    const expectedReply4 = `Sorry Anna, no fun drinks for you. I'll get you a water with cucumber.  I bet you regret your answer now huh! Enjoy your water and if you are still thirsty, just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  //   **Path for iced chocolate**
  it("should greet the user by their name, then provide the correct answers for the hot chocolate path (no, no, no)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Good answer. You can have the fat option - an iced chocolate with an extra serving of cream on top. I'll be hanging out here so if you want another beverage just type <em>restart</em>.`
    const expectedReply4 = `Good answer. You can have the fat option - an iced chocolate with an extra serving of cream on top. I'll be hanging out here so if you want another beverage just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  //   **Path for restart**
  it("should restart the chatbot and have correct greeting for a different user name", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
    // * Input: "<em>restart</em>"
    const botReply2 = getBotReply("restart");
    // * Output: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    const expectedReply2 =
      "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?";
    // * Input: "Anna"
    const botReply3 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
    const expectedReply3 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
  //   **Path for random command**
  it("should provide a random drink option when the user types random", () => {
    //   * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    //   * Input: "Anna"
    const botReply1 = getBotReply("Anna");
    //   * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
  //   **Path for incoherent answer**
  it("should provide instructions to reenter input if the chatbot doesn't understand", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
    // * Input: "really?"
    const botReply2 = getBotReply("really?");
    // * Output: "Ohoh that answer didn't make sense to me. I think you have already had too much to drink! Make sure you answer with one of the valid options or type <em>restart</em>."
    const expectedReply2 =
      "Ohoh that answer didn't make sense to me. I think you have already had too much to drink! Make sure you answer with one of the valid options or type <em>restart</em>.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
  });
  //   **Path for yes variations**
  it("should provide the correct answers for the YEAH, Y, bitter, Dark path (capitilisation and variation of yes cases)", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: `Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type <em>restart</em>.`
    const expectedReply5 = `Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type <em>restart</em>.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  //   **Path for no variations**
  it("should provide the correct answers for the Nup, yes, N path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Anna
    const botReply1 = getBotReply("Anna");
    // * Output: "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Anna, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
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
    // * Output: "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you decide you need another more exciting drink afterwards just type <em><em>restart</em></em>`
    const expectedReply4 =
      "So your batteries are already charged today Anna.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you decide you need another more exciting drink afterwards just type <em>restart</em>";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });

  //   **Path for music and stop commands**
  it("should provide the correct answers for the music or stop commands, and then continue with the current path", () => {
    // * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    // * Input: Bob
    const botReply1 = getBotReply("Bob");
    // * Output: "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy."
    const expectedReply1 =
      "Hola Bob, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.";
    // * Input: "music"
    const botReply2 = getBotReply("music");
    // * Output: `Here is a bit of bar ambience.  If it gets too noisy, just type <em>stop</em> at anytime. Let's continue with your drink order...what was your answer to my last question? Otherwise type <em>restart</em> and we can order again from scratch.`
    const expectedReply2 = `Here is a bit of bar ambience.  If it gets too noisy, just type <em>stop</em> at anytime. Let's continue with your drink order...what was your answer to my last question? Otherwise type <em>restart</em> and we can order again from scratch.`;
    // * Input: "no"
    const botReply3 = getBotReply("no");
    // * Output: "Aren't you boring! Not in the mood to party Bob? Are you feeling cold?"
    const expectedReply3 =
      "Aren't you boring! Not in the mood to party Bob? Are you feeling cold?";
    // * Input: "stop"
    const botReply4 = getBotReply("stop");
    // * Output: `I agree that it got pretty noisy in here! Let's continue with your drink order...what was your answer to my last question? Otherwise type <em>restart</em> and we can order again from scratch.`
    const expectedReply4 = `I agree that it got pretty noisy in here! Let's continue with your drink order...what was your answer to my last question? Otherwise type <em>restart</em> and we can order again from scratch.`;
    // * Input: "restart"
    const botReply5 = getBotReply("yes");
    // * Output: "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?"
    const expectedReply5 =
      "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);

    const myAudio = document.querySelector(".bar-music");
    if (myAudio) {
      expect(myAudio).not.toBeNull();
    }
  });

  //   **Path for typing random command at the beginning**
  it("should not call the user by the name 'random' if they enter this command at the start", () => {
    //   * Start: "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?"
    //   * Input: "random"
    const botReply1 = getBotReply("random");
    //   * Output: "Bloody Bob" || "Jam n Tonic" || "Tequila Storm" || "Slime and Soda" || "Feeling Hot Hot Hot Chocolate";
    const expectedReply1 = [
      "Bloody Bob",
      "Jam n Tonic",
      "Tequila Storm",
      "Slime and Soda",
      "Feeling Hot Hot Hot Chocolate",
    ];

    const containsSome = (drinkOptions, botReply) => {
      return drinkOptions.some((randomDrink) => botReply.includes(randomDrink));
    };

    expect(containsSome(expectedReply1, botReply1)).toBeTruthy();
  });
});
