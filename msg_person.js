
async function handleIndividualMessage(chat, msg, name) {
  if (msg.body.startsWith("Ping")) {
    await msg.reply(`Pong`);
  }
}
module.exports = {
  handleIndividualMessage,
};
