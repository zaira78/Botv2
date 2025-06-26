const fs = require("fs");
module.exports.config = {
  name: "Arham",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Zaira Arsalan", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "arham",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Cʀɩɱɩ Nʌɭ")==0 || event.body.indexOf("Miya ji")==0 || event.body.indexOf("arham")==0 || event.body.indexOf("ahmi")==0) {
    var msg = {
        body: "❤️𝗬𝗲 𝗹𝗼 𝗝𝗶𝗷𝗮 𝗷𝗶 𝗔𝗮𝗴𝘆𝗲🙈",
        attachment: fs.createReadStream(__dirname + `/cache/arham.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
