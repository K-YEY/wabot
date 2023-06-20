const {
  hi,
  botName,
  cache,
  everyone,
  num,
  thx,
  game,
  nextGame,
  stopGame,
} = require("./strings.js");
const { client } = require("./app.js");

var play = 0; // stop
const gamePlayed = [];
const player = [];
let playMovie = true;
let movie = "";
async function handleGroupMessage(chat, msg, name) {
 
  if (msg.hasQuotedMsg) {
    const quotedMsg = msg.quotedMsgObj;

    // Check if the quoted message is defined and from you
    if (quotedMsg && quotedMsg.fromMe) {
      // React with a love emoji
      msg.react('❤️')
        .then(() => {
          console.log('Reacted with love emoji');
        })
        .catch((err) => {
          console.error('Failed to react with love emoji:', err);
        });
    }
  }
  //TODO: For Play 0:1
  //console.log('MESSAGE RECEIVED', msg);

  if (play === 0) {
    ContentMsg(chat, msg, name);
  }

  if (
    (msg.body === `start` || nextGame.includes(msg.body)) &&
    num.includes(msg.author)
  ) {
    play = 1;
  }
  if (play === 1) {
    await Game(chat, msg, name);
  }

  //   if(msg.type == 'ptt'){
  //     msg.react("🔊");
  //  }
  //! for me only send the message 💯
  Author(chat, msg);
}

async function Author(chat, msg) {
  if (msg.body === `score`) {
    for (let i = 0; i < player.length; i++) {
      const currentPlayer = player[i];
      client.sendMessage(
        msg.from,
        `${currentPlayer.name}, Score: ${currentPlayer.score}`
      );
    }
  }
  if (msg.body === `clr`) {
    gamePlayed.splice(0, gamePlayed.length);
    player.splice(0, player.length);
  }
  if (msg.body === `endGame`) {
    play = 0;
  }
  if (num.includes(msg.author)) {
    if (msg.body === "!groupinfo") {
      msg.reply(`
            *Group Details*
            Name: ${chat.name}
            Description: ${chat.description}
            Created By: ${chat.owner.user}
            Participant count: ${chat.participants.length}
          `);
    }

    if (msg.body.startsWith("!subject ")) {
      let newSubject = msg.body.slice(9);
      chat.setSubject(newSubject);
    }

    if (msg.body.startsWith("!desc ")) {
      let newDescription = msg.body.slice(6);
      try {
        chat.setDescription(newDescription);
        console.log("Chat description updated successfully." + newDescription);
      } catch (error) {
        console.error("Failed to update chat description:", error);
      }
    }

    if (msg.body.startsWith("!!admin")) {
      const phoneNumber = msg.body.slice(9);

      const participant = chat.participants.find(
        (participant) => participant.id.user === phoneNumber
      );

      if (participant) {
        const participantId = participant.id._serialized;

        await chat.promoteParticipants([participantId]);
        await msg.reply(`${phoneNumber} has been promoted to Admin.`);
        msg.react("💯");
      } else {
        await msg.reply(`${phoneNumber} is not found.`);
        msg.react("⁉️");
      }
    }

    if (msg.body.startsWith("!!unadmin")) {
      const phoneNumber = msg.body.slice(11);

      const participant = chat.participants.find(
        (participant) => participant.id.user === phoneNumber
      );

      if (participant) {
        const participantId = participant.id._serialized;

        await chat.demoteParticipants([participantId]);
        msg.react("💯");
      } else {
        msg.react("⁉️");
      }
    }
    if (msg.body.startsWith("!!out")) {
      const phoneNumber = msg.body.slice(7);

      const participant = chat.participants.find(
        (participant) => participant.id.user === phoneNumber
      );

      if (participant) {
        const participantId = participant.id._serialized;

        await chat.removeParticipants([participantId]);
        msg.react("💯");
      } else {
        msg.react("⁉️");
      }
    }

    if (msg.body.startsWith("!!add ")) {
      const phoneNumber = msg.body.slice(6);
      const contact = await client.getContactById(phoneNumber + "@c.us");

      if (contact) {
        try {
          await chat.addParticipants([contact]);
          await msg.reply(`${phoneNumber} has been added to the group.`);
          msg.react("💯");
        } catch (error) {
          // console.error("Failed to add user to the group:", error);
          await msg.reply(`${phoneNumber} Failed to add user to the group`);
          msg.react("⁉️");
        }
      } else {
        await msg.reply(`${phoneNumber} is not a valid WhatsApp contact.`);
        msg.react("⁉️");
      }
    }

    if (everyone.includes(msg.body)) {
      const participants = chat.participants.map((participant) =>
        client.getContactById(participant.id._serialized)
      );
      const mentions = await Promise.all(participants);
      const text = mentions.map((mention) => `@${mention.number}`).join(" ");
      await chat.sendMessage(text, { mentions });
    }
  }
}

async function ContentMsg(chat, msg, name) {
  // ? Welcome
  if (botName.includes(msg.body)) {
    chat.sendStateTyping();
    const currentHour = new Date().getHours();
    let greeting = "";

    if (currentHour >= 0 && currentHour < 12) {
      greeting = "صباح الخير";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "مساء الخير";
    } else {
      greeting = "مساء الخير";
    }

    await msg.reply(`${greeting} ${name}\n${hi} ${msg.body} ف خدمتك ❤️`);
    msg.react("❤️");
  }
  // ! ALX CONTENT
  for (const item of cache.values()) {
    if (msg.body.includes(`${item.id}`)) {
      chat.sendStateTyping();
      await msg.reply(`${name}\n${item.content}`);
      msg.react("❤️");
    }
  }

  //? TIME
  if (msg.body.startsWith("#time")) {
    const timeString = msg.body.slice(6);
    const time = parseInt(timeString);

    if (!isNaN(time)) {
      const gmtTime = time + 3;
      let egyptTime = gmtTime % 12;

      if (egyptTime === 0) {
        egyptTime = 12;
      }

      await msg.reply(`Egypt time: ${egyptTime}:00`);
      msg.react("🇪🇬");
    } else {
      await msg.reply("Invalid time format.");
    }
  }

  //? THX
  if (thx.includes(msg.body)) {
    await msg.reply(`تحت امرك اي وقت ❤️`);
    msg.react("❤️");
  }
}

function getRandomGame() {
  if (gamePlayed.length === game.length) {
    movie = "The End";
    play = 0;
    return null;
  }

  let availableGames = game.filter((_, index) => !gamePlayed.includes(index));
  let randomIndex = Math.floor(Math.random() * availableGames.length);
  let selectedGame = availableGames[randomIndex];
  gamePlayed.push(game.indexOf(selectedGame));

  return selectedGame;
}

async function Game(chat, msg, name) {
  if (playMovie) {
    const selectedGame = getRandomGame();
    if (!selectedGame) {
      await client.sendMessage(msg.from, "No more games available.");
      return;
    }
    movie = selectedGame;
    playMovie = false;

    // Display the movie content
    await client.sendMessage(msg.from, movie.emoji);
  }

  if (!playMovie) {
    if (movie.name === msg.body.toLowerCase()) {
      const newPlayer = { score: 1, name: name, id: msg.author };

      msg.react("✅");
      gamePlayed.push(game.indexOf(movie));

      const existingPlayer = player.find((player) => player.id === msg.author);
      if (existingPlayer) {
        existingPlayer.score += 1;
        await client.sendMessage(
          msg.from,
          `${name}, Score: ${existingPlayer.score}`
        );
      } else {
        player.push(newPlayer);
        await client.sendMessage(
          msg.from,
          `${name}, Score: ${newPlayer.score}`
        );
      }

      console.log(player);

      playMovie = true;
    }
  }
}

module.exports = {
  handleGroupMessage,
};
