const fs = require("fs");
module.exports.config = {
  name: "chutiya",
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
  if(react.includes("chutiya") ||
     react.includes("Chutiya") || react.includes("CHUTIYA") || react.includes("chutiye") ||
react.includes("Chutiye") ||
react.includes("CHUTIYE")) {
    var msg = {
        body: `${name} tu chutiya tera baap chutiya tera poora khaanadaan chutiya🤯😐😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
