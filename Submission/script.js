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
const isAffirmativeAnswers = ["yes", "yeah", "yup", "yea", "y", "yep"];
const isNegativeAnswers = ["no", "n", "nup", "nah", "nope"];

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
    return `Hola ${userName}, sit back and relaaaax! Would you like an alcoholololololic tipple? I've already had a few myself toooodayyyyyy.`;
  }

  if (rememberedName && msgLowerCase === "restart" && myLevel > 1) {
    myLevel = 1;
    path = 0;
    rememberedName = false;
    userName = "";
    return "Hey thirsty lips, I'm your drink genie, your wish is my command. What's your name?";
  }

  if (rememberedName && msgLowerCase === "random" && myLevel > 1) {
    const randomDrink =
      drinkOptions[Math.floor(Math.random() * drinkOptions.length)];
    return `Here's a ${randomDrink}. If you want to order again, just type <em>restart</em> or <em>random</em>.`;
  }

  if (rememberedName && msgLowerCase === "music" && myLevel > 1) {
    if (document) {
      const playMusic = () => {
        const myAudio = document.getElementById("bar-music");
        myAudio?.play();
      };
      playMusic();
    }
    return `Here is a bit of bar ambience.  If it gets too noisy, just type <em>stop</em> at anytime. Let's continue with your drink order...what was your answer to my last question? Otherwise type <em>restart</em> and we can order again from scratch.`;
  }

  if (rememberedName && msgLowerCase === "stop" && myLevel > 1) {
    if (document) {
      const stopMusic = () => {
        const myAudio = document.getElementById("bar-music");
        myAudio?.pause();
      };
      stopMusic();
    }
    return `I agree that it got pretty noisy in here! Let's continue with your drink order...what was your answer to my last question? Otherwise type <em>restart</em> and we can order again from scratch.`;
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
    if (negativeMsg && path === 1) {
      myLevel = 4;
      return "No bubbles to beat the belly bloat, good choice. Tell me is it prior to midday?";
    }
    if (affirmativeMsg && path === 2) {
      myLevel = 4;
      path = 2.1;
      return "Cold and not in the mood to party.  Sounds like a dire situation.  Are you low on energy?";
    }
    if (negativeMsg && path === 2) {
      myLevel = 4;
      path = 2.2;
      return "Ok, something refreshing, let me think...Are you watching your waistline?";
    }
  }
  if (myLevel === 4 && rememberedName) {
    if (msgLowerCase === "bitter" && path === 1) {
      myLevel = 5;
      return "I agree, bitter is better. Let me pour you a beer. Dark or light?";
    }
    if (msgLowerCase === "sweet" && path === 1) {
      myLevel = 5;
      return `Ok sweetie I'll prepare you a mimosa, light and fruity just like you. Enjoy your drink and if you want another one, just type <em>restart</em>.`;
    }
    if (affirmativeMsg && path === 1) {
      myLevel = 5;
      return `Alcohol prior to midday - you must be Spanish! We will have to get you a vermut with some tapas. If that doesn't quench your thirst enough, just type <em>restart</em> and order again.`;
    }
    if (negativeMsg && path === 1) {
      myLevel = 5;
      return "You are a bit too sensitive waiting until after midday to crack open your first drink.  Let's go with a wine - red or white?";
    }
    if (affirmativeMsg && path === 2.1) {
      myLevel = 5;
      return `Let's quickly get a triple shot hot coffee into you before you fade away on me. If the 3 shots don't revive you and you need another, just type <em>restart</em>.`;
    }
    if (negativeMsg && path === 2.1) {
      myLevel = 5;
      return `So your batteries are already charged today ${userName}.  In that case let's get you a chamomile tea. Not my cup of tea, but suit yourself. If you decide you need another more exciting drink afterwards just type <em>restart</em>`;
    }
    if (affirmativeMsg && path === 2.2) {
      myLevel = 5;
      return `Sorry ${userName}, no fun drinks for you. I'll get you a water with cucumber.  I bet you regret your answer now huh! Enjoy your water and if you are still thirsty, just type <em>restart</em>.`;
    }
    if (negativeMsg && path === 2.2) {
      myLevel = 5;
      return `Good answer. You can have the fat option - an iced chocolate with an extra serving of cream on top. I'll be hanging out here so if you want another beverage just type <em>restart</em>.`;
    }
  }
  if (myLevel === 5 && rememberedName) {
    if (msgLowerCase === "dark" && path === 1) {
      myLevel = 6;
      return `Time for a Guinness.  This is a full meal in a glass! Be careful it will go straight to your head. Enjoy your drink and if you want another one, just type <em>restart</em>.`;
    }
    if (msgLowerCase === "light" && path === 1) {
      myLevel = 6;
      return `So you are a bit of a softie. I have the perfect hazy IPA for you. This is a craft beer from NZ. Enjoy your beer and if you want another drink, just type <em>restart</em>.`;
    }
    if (msgLowerCase === "red" && path === 1) {
      myLevel = 6;
      return `Red red wiiiiineee, stay close to meeeee! This Argentinean Malbec is my favourite. Enjoy your vino tinto and if you want another one, just type <em>restart</em>.`;
    }
    if (msgLowerCase === "white" && path === 1) {
      myLevel = 6;
      return `Fresh and fruity, I do love myself a pinot gris.  Give this one from Waiheke Island a swirl in your mouth. If you need another just type <em>restart</em>.`;
    }
  }

  return `Ohoh that answer didn't make sense to me. I think you have already had too much to drink! Make sure you answer with one of the valid options or type <em>restart</em>.`;
};

export { getBotReply };
