const fs = require("fs");
module.exports.config = {
	name: "anaya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ARuN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Trisha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Moiz")==0 || event.body.indexOf("moiz")==0 || event.body.indexOf("moiz")==0 || event.body.indexOf("@معیز راجپوت")==0) {
		var msg = {
				body: "=== 𝙈𝙊𝙄𝙕 𝙏𝙊 𝙈𝙀𝙍𝙄 𝙅𝘼𝘼𝙉 𝙃𝘼𝙄=== 😘❤❤😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/anaya.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
