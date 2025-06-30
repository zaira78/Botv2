const fs = require("fs");
module.exports.config = {
  name: "nikal",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Chal nikal") ||
     react.includes("chal nikal") || react.includes("Nikal") || react.includes("NIKAL") ||
react.includes("niklo") ||
react.includes("Niklo")) {
    var msg = {
        body: `Tum niklo me q tumhari bat manu kama ke khilate ho kya? 🧐`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
