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

    .setName('Roblox')
    .setDetails('Just Started')
    /*.setParty({
        max: 9999,
        current: 7000,
        id: Discord.getUUID(),
    })*/

    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1187377061959045181/1211155528408104990/3a9ad6131057802cd6c6694d58cd7253.jpg?ex=65ed2b7c&is=65dab67c&hm=ac474442f75a5d961f6a91956fc5bdfa0ed757f81d15e706f8014242082b655b&')
    .setAssetsLargeText('Roblox')
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

// Join discord.gg/CyberSec for support! //