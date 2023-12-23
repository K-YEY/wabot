const { handleGroupMessage } = require("./msg_group.js");
const { handleIndividualMessage } = require("./msg_person.js");

async function handleMessage(msg) {
  let chat = await msg.getChat();
  const contact = await msg.getContact();
  let name = (contact.pushname || "").replace("~", "");
  if (name === "Yehia Emad") {
    name = "يا King";
  }

  if (chat.isGroup) {
    handleGroupMessage(chat, msg, name);
  } else {
    handleIndividualMessage(chat, msg, name);
  }
}

module.exports = {
  handleMessage,
};
