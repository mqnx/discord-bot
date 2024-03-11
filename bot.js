npm install discord.js

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (message.content === '!hello') {
    message.channel.send('Hello, world!');
  }
});

client.login('your-bot-token-goes-here');
