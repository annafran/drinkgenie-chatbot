/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

const myLevel = 1;
const path = 0;

const getBotReply = (msg) => {
    if (myLevel === 1 && path === 0) {
        const userName = msg;
        return `Hi ${userName}! Do you feel like something alcoholic?`;
    }

    return "Error unknown...";
};

export { getBotReply };
