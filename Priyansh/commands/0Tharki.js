const fs = require("fs");
module.exports.config = {
  name: "tharki",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tharki",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Tharki")==0 || event.body.indexOf("tharki")==0 || event.body.indexOf("Tharki bot")==0 || event.body.indexOf("thrki")==0) {
    var msg = {
        body: "😹𝗧𝗵𝗮𝗿𝗮𝗸 𝗻𝗮𝗵𝗶 𝘆𝗲 𝘁𝗼 𝗺𝗲𝗿𝗮 𝗽𝘆𝗮𝗮𝗿 𝗵𝗮𝗶😹",
        attachment: fs.createReadStream(__dirname + `/cache/Tharki.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
