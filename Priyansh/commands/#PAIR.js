module.exports.config = {
  name: "pair",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "D-Jukie (Xuyên get)",
  description: "Pairing",
  commandCategory: "Love", 
  usages: "pair", 
  cooldowns: 15
};
module.exports.run = async function({ api, event,Threads, Users }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        const cooldowns = new Map();

const flirtyReplies = [
  "💘 {user1} and {user2} are officially the cutest duo today!",
  "💋 Sparks are flying between {user1} & {user2} 😍",
  "😏 {user1} just locked eyes with {user2} and forgot the world...",
  "🔥 {user1} and {user2}, y’all need a private chat 👀",
  "💞 Cupid just paired {user1} with {user2} — hearts are melting!",
  "👀 {user1} always liked {user2}, we knew it 💌",
  "✨ Universe approves: {user1} ❤️ {user2}",
  "🥰 {user1}, will you marry {user2} already?"
];

function randomReply(u1, u2) {
  const template = flirtyReplies[Math.floor(Math.random() * flirtyReplies.length)];
  return template.replace("{user1}", u1).replace("{user2}", u2);
}

const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "pair",
    version: "1.2",
    description: "Pairs two random people in the group chat with profile pictures and matching score",
    usage: ".pair",
    cooldown: 60,
  },

  onCall: async function({ api, event }) {
    const threadID = event.threadID;
    const senderID = event.senderID;
    const now = Date.now();

    // Cooldown check
    if (cooldowns.has(threadID) && now - cooldowns.get(threadID) < 60000) {
      const remaining = Math.ceil((cooldowns.get(threadID) + 60000 - now) / 1000);
      return api.sendMessage(`⏳ Wait ${remaining}s before using .pair again.`, threadID);
    }

    try {
      const threadInfo = await api.getThreadInfo(threadID);
      const allIDs = threadInfo.participantIDs.filter(id => id !== senderID && id !== api.getCurrentUserID());

      if (allIDs.length < 2) return api.sendMessage("😅 Not enough people to pair!", threadID);

      const [id1, id2] = pickTwoRandom(allIDs);
      const userInfo = await api.getUserInfo([id1, id2]);
      const name1 = userInfo[id1]?.name || "User1";
      const name2 = userInfo[id2]?.name || "User2";

      // Fetch and save DPs
      const imgPath1 = path.join(__dirname, `${id1}_dp.jpg`);
      const imgPath2 = path.join(__dirname, `${id2}_dp.jpg`);

      const img1 = await axios.get(`https://graph.facebook.com/${id1}/picture?width=720&height=720`, { responseType: 'arraybuffer' });
      const img2 = await axios.get(`https://graph.facebook.com/${id2}/picture?width=720&height=720`, { responseType: 'arraybuffer' });

      fs.writeFileSync(imgPath1, Buffer.from(img1.data));
      fs.writeFileSync(imgPath2, Buffer.from(img2.data));

      // Generate matching score
      const score = Math.floor(Math.random() * 51) + 50; // 50% to 100%

      const message = {
        body: `${randomReply(name1, name2)}\n❤️ Compatibility Score: ${score}%`,
        attachment: [
          fs.createReadStream(imgPath1),
          fs.createReadStream(imgPath2)
        ]
      };

      cooldowns.set(threadID, now);
      api.sendMessage(message, threadID, () => {
        fs.unlinkSync(imgPath1);
        fs.unlinkSync(imgPath2);
      });

    } catch (error) {
      console.error(error);
      return api.sendMessage("❌ Failed to pair members. Try again later!", threadID);
    }
  }
};

function pickTwoRandom(arr) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return [shuffled[0], shuffled[1]];
    }
