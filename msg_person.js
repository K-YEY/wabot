const { runCompletion } = require("./chat_gpt.js");

async function handleIndividualMessage(chat, msg, name) {
  const lowercaseBody = msg.body.toLowerCase();

  if (lowercaseBody.startsWith("Ping")) {
    await msg.reply(`Pong`);
  }
  if (lowercaseBody.startsWith("!gpt ")) {
    let newMSG = lowercaseBody.slice(5);
    chat.sendStateTyping();

    // Assuming runCompletion returns a Promise
    try {
      const result = await runCompletion(newMSG);
      msg.reply(`${result}`);
    } catch (error) {
      console.error("Error:", error);
      // Handle the error appropriately, e.g., reply with an error msg
      msg.reply("An error occurred while processing the request.");
    }
  }
}
module.exports = {
  handleIndividualMessage,
};
