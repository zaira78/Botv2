const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot2",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Mr.Aaryan",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Islamabad").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Aa gye tharki ruko m aapko Dp deti hu Jo Dp chahiye wo likho ☞.girldp/.cpldp/.frnddp/.boydp/.bestiedp☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Biryani 🥗 deti hu likho ☞Biryani☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Mungfali 🥜 deti hu likho ☞Mungfali☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Milk Cake deti hu likho ☞Milk cake☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Laddu 🍪 deti hu likho ☞Laddu☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Kurkure 🫓 deti hu likho ☞Kurkure☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cold Drink deti hu likho ☞Cold drink☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chips 🥔 deti hu likho ☞Chips☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Water 🍶 deti hu likho ☞Pani☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Tofee 🍬 deti hu likho ☞Tofee☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Barfi 🧀 deti hu likho ☞Barfi☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Burgur deti hu likho ☞Burger☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cigarette 🚬 peelati hu likho ☞Cigarette☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Hukka 🏺 peelati hu likho ☞Hukka☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Ice Cream 🍨 deti hu likho ☞Ice Cream☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chowmin 🍜 deti hu likho ☞Chowmin☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chuza ko bulati hu likho ☞Chuza☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi maggie lati hu likho ☞Maggie☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cake 🎂 deti hu likho ☞Cake☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Jalebi 🥨 deti hu likho ☞Jalebi☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi French fries 🍟 deti hu likho ☞French☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Juice 🧃 peelati hu likho ☞Juice☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chai ☕ peelati hu likho ☞Chai☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Biscuit 🥘 deti hu likho ☞Biskut☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Golgappe 😋deti hu likho ☞Golgappe☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pasta 🥐 deti hu likho ☞Pasta☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Rasgulla deti hu likho ☞Rasgulla" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Gulabjamun deta hu likho ☞Gulabjamun☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Nasta deta hu likho ☞Nasta☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Samosa 🔶 deta hu likho ☞Samosa☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pizza 🍕 deta hu likho ☞Pizza☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Momos 🥟 deta hu likho ☞Momos☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜","Ha Bolo yhi hu kya hua,Ruko mai abhi Chhole Bhature de rha hu Likho ☞Bhatura☜","Ha Bolo Yhi hu kya hua,Ruko mai Abhi Chicken 🐔 deta hu Likho☞Murga☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Coffee ☕ pilata hu likho ☞Coffee☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pepsi 🥤  pilata hu likho ☞Pepsi☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Parathe 🥞 Khilata hu likho ☞Parathe☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Popcorn 🍿Khilata hu likho ☞Popcorn☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Dudh 🥛  pilata hu likho ☞Dudh☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Lassi🧋   Pilata hu likho ☞Lassi☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Lolipop 🍭deta hu likho ☞lolipop☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Rose 🌹 deta hu likho ☞Rose☜",];
var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "🇵🇰") || (event.body.toLowerCase() == "🇵🇰🇵🇰")) {
     return api.sendMessage("GEO PAKISTAN", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("Bot || (event.body.indexOf("bot")) == 0)) {
    var msg = {
      body: `🌴🪻🪴${name}🌲🪷🌿, \n\n
          ${rand} 🍀🌺💦
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
