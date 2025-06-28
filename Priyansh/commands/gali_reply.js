const fs = require("fs");
module.exports.config = {
	name: "gali5",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(".fuck")==0 || event.body.indexOf("Mc")==0 || event.body.indexOf("chodu")==0 || event.body.indexOf("Bsdk")==0 || event.body.indexOf("Bc")==0 || event.body.indexOf("Maa ki chut")==0 || event.body.indexOf("Tmkc")==0 || event.body.indexOf("bhenchod")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("Madarchod")==0 || event.body.indexOf("Bsdk")==0 || event.body.indexOf("Gandu")==0) {
		var msg = {
				body: "(Gali q Dete Ho. Lund Katke Hath M rakh Dungi)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
