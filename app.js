const qrcode = require("qrcode-terminal");
const { Client, Buttons, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth({ clientId: "client-one" }),
});
module.exports = {
  client,
};

const { handleMessage } = require("./logic.js");

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", handleMessage);
const welcomeMessage = "Welcome to WhatsApp!";

// client.on("group_join", (notification) => {
//   // User has joined or been added to the group.
//   console.log("join", notification);
//   // const groupId = notification.groupId;
//   const newMemberId = notification.recipientIds[0];
//   const cleanedMemberId = newMemberId.replace("@c.us", "");
//   notification.reply(`${welcomeMessage} @${cleanedMemberId}`);
// });

// client.on("group_leave", (notification) => {
//   // User has left or been kicked from the group.
//   console.log("leave", notification);
//   notification.reply("User left.");
// });
client.initialize();
