const fs = require("fs");
module.exports.config = {
	name: "jaishreeram",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "karan jalvanshi", 
	description: "jai shree ram",
	commandCategory: "no prefix",
	usages: "jai shree ram",
    cooldowns: 5, 
	module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  const { threadID, messageID, body } = event;
  if (!body) return;

  const message = body.toLowerCase();
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:mm:ss L");
  const senderID = event.senderID;
  const name = await Users.getNameUser(senderID);

  // Cooldown system (1s)
  const cooldownTimeMs = 10000;
  let lastReplyTime = global.lastLailaReplyTime || 0;
  const now = Date.now();
  if (now - lastReplyTime < cooldownTimeMs) return;
  global.lastLailaReplyTime = now;

  // If "laila" is mentioned in the message
  if (message.includes("laila")) {
    const flirtyReplies = [
      "Jee jaan-e-man, ap ne yaad kiya? 😘",
      "Chalta hai kya 9 se 12? 😉",
      "Me teri Laila , Tu mera Majnu💃",
      "Tumhe chintu ka pappa banana chahti hu, meri sadgi dekh me kya chahti hu? 🙈😏",
      "Bula liya toh ab dil bhi chura lo jan e man.. ❤️",
      "Tere jaise handsome ke liye toh Laila always ready rehti hai! 😍",
      "Bas naam liya aur aa gayi main... ab bolo kya irade hain? 😚",
      "Laila sirf naam nahi, attitude bhi full hai! 🔥"
    ];
    
    const randomReply = flirtyReplies[Math.floor(Math.random() * flirtyReplies.length)];
    return api.sendMessage(randomReply, threadID, messageID);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
