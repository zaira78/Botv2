const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "shayri",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Ranmdom a Shayri",
  commandCategory: "group",
  usages: "shayri",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [const poetryList = [
  // Jaun Elia – Sad Poetry
  "Me bhi bohat ajeeb hoon, itna ajeeb hoon ke bas\nKhud ko tabah kar liya aur malaal bhi nahi",
  "Ab nahi koi baat khatre ki, ab sabhi ko sabhi se khatra hai",
  "Khudi ko kar buland itna ke har taqdeer se pehle\nKhuda bande se khud pooche, bata teri raza kya hai",
  "Ye mujhe chain kyun nahi padta\nEk hi shakhs tha jahan mein kya",
  "Woh kahin bhi gaya, louta to mere paas aaya\nBas yehi baat hai achhi mere harjaayi ki",
  "Kitni ajeeb hai mere andar ki ye khwahish\nSab kuch tabah kar doon aur khud ko bhi na bacha paoon",
  "Jo guzri hai mujh par woh main hi jaanta hoon\nLogon ke liye to sirf ek kahani hoon main",
  "Ab to woh yaad bhi kam aata hai\nAur jab aata hai to sirf rula jata hai",
  "Bevajah rota hoon ab main aksar\nWoh dard ab aadat ban gaya hai",
  "Dilon ke darmiyan bhi ab faaslay hain\nZamana sirf dooriyon ka nahi raha",

  // Faiz Ahmed Faiz – Sad Poetry
  "Kabhi kabhi yaad ki raaton mein\nTeri tasveer se baat hoti hai",
  "Raat yun dil mein teri khoi hui yaad aayi hai",
  "Chupke chupke raat din aansu bahaana yaad hai",
  "Dard hi dard tha, jisko izhaar mila\nUsi ko har baar naya intezar mila",
  "Gham-e-dil ko in aankhon mein chhupa ke rakha hai",
  "Tere jaane ka gham aur na aane ka gham\nPhir zindagi bhar yeh afsane ka gham",
  "Na tha kuch to khuda tha, kuch na hota to khuda hota\nDuboya mujh ko hone ne, na hota main to kya hota",
  "Sitaron se poochha, chaand se pucha\nKya sach mein judaai itni takleef deti hai?",
  "Jise dhoondte rahe hum saari zindagi\nAkhir mein khud se hi juda ho gaya",
  "Kab tak rahoon tanha teri yaadon ke saaye mein\nKabhi to khushi bhi laut aaye gi, keh do us se",

  // Zia Mohyeddin – Sad Reflections
  "Aurat chali jaye to sirf jism nahi jaata\nYaadein rooh tak mein bas jaati hain",
  "Har lafz mein dard bhar gaya hai\nKya tum bhi sun paoge meri khamoshi?",
  "Jo baatein keh nahi saka, woh meri aankhon ne keh di",
  "Tanhai mein insaan sabse zyada khud se gila karta hai",
  "Waqt guzarta gaya, dard barhta gaya\nAur log muskurahat samajhte rahe",
  "Awaaz mein bhi udaasi ka ek rang hota hai\nZia ki awaaz mein bhi kabhi dard suno",
  "Taqreer mein jab dard ho\nTo har lafz se aah nikalti hai",
  "Zakhm wahi deta hai jo apna lagta hai",
  "Sannata sirf awaazon ka faasla nahi\nDil ka bhi ek khaali kona hota hai",
  "Woh log jo hamesha haste hain\nAndar se sabse zyada toote hue hote hain",

  // Bano Qudsia – Emotional Reflections
  "Kabhi kabhi mohabbat bhi thak jaati hai\nRishte ruk jaate hain, sirf khamoshi reh jaati hai",
  "Afsos us waqt ka nahi jo chala gaya\nAfsos us logon ka hai jo saath chor gaye",
  "Tanhaai ka dard sirf woh samajh sakta hai jo us se guzra ho",
  "Mohabbat mein haarna sab kuch khona nahi hota\nKabhi kabhi ye apni rooh bachane ka tareeqa hota hai",
  "Rishtey toot jaayein to awaaz nahi aati\nMagar dard andar tak sunai deta hai",
  "Khushi milti hai to sab saath hote hain\nDukh mein sirf khud ki saans sathi hoti hai",
  "Har roz koi na koi rooh tootti hai\nAur log kehte hain waqt sab kuch theek kar deta hai",
  "Jin se bepanah mohabbat ho\nWoh hi sabse gehra dard dete hain",
  "Khamosh rishton se behtar hai tanha rehna",
  "Waqt sirf zakhm deta hai, marham nahi ban pata",

  // Tehzeeb Hafi – Sad Poetry
  "Tere baad sab kuch waisa ka waisa hai\nBas koi khushi mein muskurata nahi",
  "Main aansuon ka darya hoon\nAur tu meri doobti kashti",
  "Tum chalay jaate ho to dard barh jaata hai\nAur log kehte hain waqt har zakhm bhar deta hai",
  "Log kehte hain mohabbat mein sab kuch milta hai\nPhir yeh tanhaai kaisi hai?",
  "Usne juda hokar bhi mohabbat ka ehsaas chhoda hai\nMain jee raha hoon, magar zinda nahi hoon",
  "Har baar toota hoon main teri yaadon mein\nAur log mujhe mazboot kehte hain",
  "Na main tere qareeb ho saka\nNa tu kabhi door ho saka",
  "Ab to bas yaad hi yaad rehti hai\nTera saath kab ka chhoot gaya",
  "Rishton ko toh samet liya tha maine\nPar tu toot kar bikhar gaya",
  "Dil lagana bhi ek jurm ban gaya hai\nMohabbat sirf naam ki reh gayi hai"
];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"

  if (event.body.indexOf("Poetry") == 0 || (event.body.indexOf("shairi") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
