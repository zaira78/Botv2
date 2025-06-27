const fs = require("fs");
module.exports.config = {
  name: "salam",
    version: "1.0.1",
  hasPermssion: 2,
  credits: "VanHung - Fixed by LTD", 
  description: "hihi",
  commandCategory: "no prefix",
  usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Assalam o alaikum")==0 || event.body.indexOf("Assalam alaikum")==0 || event.body.indexOf("Aoa")==0 || event.body.indexOf("Salam un Alaikum")==0) {
    var msg = {
        body: "𝐖𝐚𝐥𝗮𝗶𝐤𝐮𝐦 𝐀𝐬𝐬𝐚𝐥𝐚𝐦 🏝️",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💜", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
