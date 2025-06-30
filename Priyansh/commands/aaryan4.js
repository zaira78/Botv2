const fs = require("fs");
module.exports.config = {
	name: "imoge3",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("🙂") ||
     react.includes("🙂") ||react.includes("🙂") || react.includes("🙂") ||
react.includes("🙂") ||
react.includes("🙂")) {
		var msg = {
				body: `💐Fake smile 🙂 andar se toote ho to fevikol pee lo babu 😛🌸💐`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
