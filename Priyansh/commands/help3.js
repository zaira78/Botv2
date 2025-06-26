module.exports.config = {
    name: "help3",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SHANKAR-SUMAN",
    description: "beginners guide",
    usages: "[all/-a] [number of pages]",
    commandCategory: "guides",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
    const { commands } = global.client;
    const { threadID } = event;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    
    const commandGroups = new Map();
    const imgP = [];
    
    for (const command of commands.values()) {
        const category = command.config.commandCategory.toUpperCase();
        if (!commandGroups.has(category)) {
            commandGroups.set(category, []);
        }
        commandGroups.get(category).push(`✪${command.config.name}`);
    }
  
    let message = "";
    for (const [category, commands] of commandGroups.entries()) {
        message += `╭────────────✦\n│  ${category}\n├───✦\n`;
        message += `${commands.join(" │")}\n`;
        message += "├───✦\n";
        message += "╰───────────⧕\n\n";
    }
    
    message += `╭────────────✦\n│ »      ☆𝘼⃝𝙥𝙠𝙞 𝙇𝙖𝙞⃟𝙡𝙖☆ 
    《${commands.size} commands》 
    𝗰𝗿𝗲𝗱𝗶𝘁 ● 𝗢𝘄𝗻𝗲𝗿.☆ 𝆺𝅥⃝𝗭𝗔𝗜𝗥⃟𝗔\n 𝗙𝗘𝗘𝗟 𝗧𝗛𝗘 𝗣𝗢𝗪𝗘𝗥 𝗢𝗙 𝆺𝅥⃝𝗭𝗔𝗜𝗥⃟𝗔\n╰────────────✦`;
    
    return api.sendMessage(message, threadID, (error, info) => {
        if (error) console.log(error);
    });
}
