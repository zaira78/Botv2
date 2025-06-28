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
  const abuseReplies = [
  "Aree beta, apne aap se baat karna bandh kar 🤡",
  "Tere jaise logon ke liye mute button bana hai 😏",
  "Bot hun, tere jaise low IQ walon ki therapist nahi 💅",
  "Zyada bhauk mat, RAM crash kara dungi tera",
  "Aisa lagta hai teri battery 1% pe chal rahi hai 🤖",
  "Itna mat jal, cooling fan bhi nahi bacha 😆"
];

  } else if (body.includes("bot tmkc") || body.includes("bot bkl") || body.includes("bot khassi") || 
           body.includes("bot madarchod") || body.includes("bot bhenchod") || 
           body.includes("bot lund") || body.includes("bot loru")) {
  let abuseReply = abuseReplies[Math.floor(Math.random() * abuseReplies.length)];
  api.sendMessage(abuseReply, threadID, messageID);
}
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖕🏻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
