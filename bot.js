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

client.login('MTIxNjc1NjkyNDA3MTI4NDczNg.G8Ze95.1pYkmz_wzs3BoSO_QoRYW19xo2Ah2nvdaJELx8');
