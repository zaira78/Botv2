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
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const Canvas = require("canvas");

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

module.exports.config = {
  name: "pair",
  version: "2.0",
  hasPermssion: 0,
  credits: "ChatGPT x Areej",
  description: "Pairs you with someone from chat with photo & score",
  commandCategory: "fun",
  usages: ".pair",
  cooldowns: 2
};

module.exports.run = async function ({ api, event, Users }) {
  const threadID = event.threadID;
  const senderID = event.senderID;
  const now = Date.now();

  // Cooldown check (2s)
  if (cooldowns.has(threadID) && now - cooldowns.get(threadID) < 2000) {
    const remaining = Math.ceil((cooldowns.get(threadID) + 2000 - now) / 1000);
    return api.sendMessage(`⏳ Slow down! Try again in ${remaining}s.`, threadID);
  }

  try {
    const threadInfo = await api.getThreadInfo(threadID);
    const members = threadInfo.participantIDs.filter(id => id !== senderID && id !== api.getCurrentUserID());

    if (members.length < 1) return api.sendMessage("😅 Not enough people to pair with you!", threadID);

    const partnerID = members[Math.floor(Math.random() * members.length)];
    const userInfo = await api.getUserInfo([senderID, partnerID]);
    const name1 = userInfo[senderID]?.name || "You";
    const name2 = userInfo[partnerID]?.name || "Partner";

    // Fetch DPs
    const img1URL = `https://graph.facebook.com/${senderID}/picture?width=720&height=720`;
    const img2URL = `https://graph.facebook.com/${partnerID}/picture?width=720&height=720`;

    const [img1Res, img2Res] = await Promise.all([
      axios.get(img1URL, { responseType: "arraybuffer" }),
      axios.get(img2URL, { responseType: "arraybuffer" })
    ]);

    const img1 = await Canvas.loadImage(img1Res.data);
    const img2 = await Canvas.loadImage(img2Res.data);

    const canvas = Canvas.createCanvas(720 * 2, 720);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img1, 0, 0, 720, 720);
    ctx.drawImage(img2, 720, 0, 720, 720);

    const combinedPath = path.join(__dirname, "cache", `pair_${Date.now()}.png`);
    const out = fs.createWriteStream(combinedPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    await new Promise(resolve => out.on("finish", resolve));

    // Score
    const score = Math.floor(Math.random() * 51) + 50;
    const message = {
      body: `${randomReply(name1, name2)}\n❤️ Compatibility Score: ${score}%`,
      attachment: fs.createReadStream(combinedPath)
    };

    cooldowns.set(threadID, now);
    api.sendMessage(message, threadID, () => fs.unlinkSync(combinedPath));

  } catch (err) {
    console.error(err);
    return api.sendMessage("❌ Pairing failed. Something went wrong!", threadID);
  }
};
