//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const bot = new Discord.Client();

const gacha = require('./gacha');

//Set listener on 'ready'
bot.on('ready', () => {
  console.log('Gacha ready!');
});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'gacha') {
    message.channel.sendMessage(gacha.pull());
  }
});

bot.login('MTA0ODUxNDc3OTc3MTMxODMyMg.GmngCh._QiRT-1PUUKAivgB5pdjCnFrVPgjekoxU0mAvY');
