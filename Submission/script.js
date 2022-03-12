/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let rememberedName = false;
let userName = "";
let myLevel = 1;
let path = 0;
const drinkOptions = [
  "Bloody Bob",
  "Jam n Tonic",
  "Tequila Storm",
  "Slime and Soda",
  "Feeling Hot Hot Hot Chocolate",
];
const isAffirmativeAnswers = ["yes", "yeah", "yup", "yea", "y"];
const isNegativeAnswers = ["no", "n", "nup", "nah"];

const getBotReply = (msg) => {
  const msgLowerCase = msg.toLowerCase();
  let affirmativeMsg;
  if (isAffirmativeAnswers.includes(msgLowerCase)) {
    affirmativeMsg = true;
  }

  let negativeMsg;
  if (isNegativeAnswers.includes(msgLowerCase)) {
    negativeMsg = true;
  }

  if (rememberedName === false && myLevel === 1 && path === 0) {
    rememberedName = true;
    userName = msg;
    myLevel = 2;
    return `Hola ${userName}, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.`;
  }

  if (rememberedName && msg === "restart" && myLevel > 1) {
    myLevel = 1;
    path = 0;
    rememberedName = false;
    userName = "";
    return "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?";
  }

  if (rememberedName && msg === "random" && myLevel > 1) {
    const randomDrink =
      drinkOptions[Math.floor(Math.random() * drinkOptions.length)];
    return `Here's a ${randomDrink}. If you want to order again, just type restart or random.`;
  }

  if (myLevel === 2 && rememberedName) {
    if (negativeMsg) {
      myLevel = 3;
      path = 2;
      return `Aren't you boring! Not in the mood to party ${userName}? Are you feeling cold?`;
    }
    if (affirmativeMsg) {
      myLevel = 3;
      path = 1;
      return `Oh you are ready to party ${userName}! You are my type of person. Do you like the feeling of bubbles in your mouth?`;
    }
  }
  if (myLevel === 3 && rememberedName) {
    if (affirmativeMsg && path === 1) {
      myLevel = 4;
      return "You want a party in your mouth huh! Are you feeling sweet or bitter today?";
    }
    if (affirmativeMsg && path === 2) {
      myLevel = 4;
      return "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?";
    }
  }
  if (myLevel === 4 && rememberedName) {
    if (msg === "bitter" && path === 1) {
      myLevel = 5;
      return "I agree, bitter is better. Let me pour you a beer. Dark or light?";
    }
    if (negativeMsg && path === 2) {
      myLevel = 5;
      return `So your batteries are already charged today ${userName}.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you want decide you need another more exciting drink afterwards just type restart`;
    }
  }

  if (rememberedName && msg === "dark" && path === 1 && myLevel === 5) {
    myLevel = 6;
    path = 1;
    return "Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type restart.";
  }

  return "Ohoh that answer didn't make sense to me. I think you have already had too much to drink! Make sure you answer with one of the valid options or type restart.";
};

export { getBotReply };
