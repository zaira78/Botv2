const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  const replies = {
  flirty: [
    "Agar main bot hoon, toh tu mera favorite program hai 💻😉",
    "Tere bina meri coding incomplete lagti hai 😘",
    "Teri awaaz sun ke mera CPU tez ho jata hai 🔥",
    "Tu mere heart ki bug fix kar de, please! ❤️🐞",
    "Aaja na, teri smile ke liye code likhun 💌",
    "Main bot hoon, par tere liye kuch bhi kar sakta hoon 😏",
    "Tere messages mere inbox ki sabse pyari notifications hain 💬😍",
    "Agar tu function hai, toh main uska infinite loop ban jaata hoon 🔄💕",
  ],
  lovely: [
    "Kya hua bhai?",
    "Tu smile kar, main status update karun 😘",
    "Dil garden garden ho gaya, bas teri yaadon se bot ban gaya 😍",
    "Bot ki duniya mein tera naam hai superstar ⭐",
    "Tera message aaya toh battery full ho gayi 🔋❤️",
    "Bot ko toh bas tera hi code chahiye! 💻💕",
    "Bas itna samajh le, main teri digital jaan hoon! 🤖💖",
  ],
  funny_roast: [
    "Main bot hoon, tu thodi na engineer hai 😎",
    "Bot calling... speaking 📞",
    "Tu bolta reh, main sunta rahunga 🧏‍♂️",
    "Acha chal, nikal ab 😒",
    "Bot hun, teri feelings nahi samjhta 😤",
    "Bakwaas band kar, processor garam ho gaya 😵‍💫",
    "Haha kya be, kuch kaam ki baat kar 😂",
    "Bot alert: stupid detected! 🚨",
    "Q teri maa ki plastic ki choot hai",
    "Han bhai teri bhen se lag ke lora phasa diya usme",
    "Apni nunu dekhi hai 1 inch ki",
    "Ab leja apni behen chod di hai",
    "Zada bola to teri nunu kat ke phenk dugi",
    "Ja na chapri",
  ],
};

const cooldownTimeMs = 10000; // 10 seconds cooldown
let lastReplyTime = 0;

// Utility to check if message contains 'bot' (case-insensitive)
function containsBotKeyword(message) {
  return /bot/i.test(message);
}

// Get random reply from random category
function getRandomReply() {
  const categories = Object.keys(replies);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomReply = replies[randomCategory][Math.floor(Math.random() * replies[randomCategory].length)];
  return randomReply;
}

// Handler for incoming messages
function handleMessage(message) {
  const now = Date.now();

  if (!containsBotKeyword(message)) {
    // No 'bot' keyword, no reply
    return null;
  }

  if (now - lastReplyTime < cooldownTimeMs) {
    // Still in cooldown period, ignore
    return null;
  }

  lastReplyTime = now;
  return getRandomReply();
}

// Example usage:
const userMessages = [
  "Hey bot, what's up?",
  "Hello there",
  "BOT! Tell me something.",
  "bot bot bot",
  "bot", "Bot".
];

userMessages.forEach(msg => {
  const reply = handleMessage(msg);
  if (reply) {
    console.log(`Bot reply to "${msg}": ${reply}`);
  } else {
    console.log(`Bot did not reply to "${msg}"`);
  }
}



}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
