module.exports.config = {
  name: "call",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "John Lester", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("Call ao")>=0 || event.body.indexOf("Call karu")>=0 || event.body.indexOf("Call pe bat karain")>=0 || event.body.indexOf("Bot call")>=0 || event.body.indexOf("Call")>=0 || event.body.indexOf("CL")>=0 || event.body.indexOf("Call aao")>=0 || event.body.indexOf("Call tapko")>=0 || event.body.indexOf("call tapko")>=0 || event.body.indexOf("Call bot")>=0 ) { 
    var msg = {
        body: ` ${name} 𝘔𝘦 𝘵𝘰 𝘣𝘰𝘵 𝘩𝘶 𝘮𝘦 𝘤𝘢𝘭𝘭 𝘱𝘢𝘳 𝘣𝘢𝘢𝘵 𝘯𝘢𝘩𝘪 𝘬𝘢𝘳𝘴𝘢𝘬𝘵𝘪🥺🥺👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
