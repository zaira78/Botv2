const fs = require("fs");
module.exports.config = {
  name: "abuse",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "Zaira Arsalan", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Bot tmkc") ||
     react.includes("Bot bkl") || react.includes("Lund") || react.includes("loru") ||
react.includes("Bot bsdk") ||
react.includes("Bot ki mkc")) {
    var msg = {
        body: `𝗝𝗮 𝗻𝗮 𝗹𝘂𝗻𝗱 𝗸𝗶 𝘀𝗵𝗮𝗸𝗮𝗹 𝗸𝗲 𝗰𝗵𝘂𝘁𝘆𝗲🌝`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖕🏻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
