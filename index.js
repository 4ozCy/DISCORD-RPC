// Join discord.gg/CyberSec for support! //
// Discord - ash3r#1000 //

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  const r = new Discord.RichPresence()
    .setApplicationId('1187238107209273345')
    .setType('PLAYING')
    .setURL('https://twitch.tv/discord')
    .setState('Anxious - Best Bot')

    .setName('.gg/CyberSec')
    .setDetails('Discord Bot Developer, Web Developer')
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/

    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1058233402249187448/1092300908622250014/Picsart_23-03-13_04-24-35-528.jpg?width=634&height=634')
    .setAssetsLargeText('CyberSec')
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1058233402249187448/1092301100796891206/030c530f07bdca30fc758eeacb22365a-modified.png');
  client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

// Join discord.gg/CyberSec for support! //