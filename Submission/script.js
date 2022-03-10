/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let rememberedName = false;
let userName = "";
let myLevel = 1;
let path;

const getBotReply = (msg) => {
    if (rememberedName === false && myLevel === 1) {
        rememberedName = true;
        userName = msg;
        myLevel = 2;
        return `Hola ${userName}, sit back and relaaaax! Would you like an alcoholololololic tipple? Oh sorry amigo, I've already had a few myself today.`;
    }

    if (rememberedName && msg === "yes" && myLevel === 2) {
        return `Oh you are ready to party ${userName}! You are my type of person. Do you like the feeling of bubbles in your mouth?`;
    }

    return "Error unknown...";
};

export { getBotReply };
