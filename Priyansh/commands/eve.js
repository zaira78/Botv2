module.exports.config = {
	name: "eve",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("Good evening")==0 || event.body.indexOf("Evening")==0 || event.body.indexOf("good evening")==0 || event.body.indexOf("Good Eve")==0 || event.body.indexOf("eve")==0 || event.body.indexOf("Eve")==0 || event.body.indexOf("Shab bakhair")==0 || event.body.indexOf("Shubh ratri")==0 || event.body.indexOf("magandang Gabi")==0 || event.body.indexOf("Magandang Gabi")==0 ) { 
		var msg = {
				body: `Good Evening ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
