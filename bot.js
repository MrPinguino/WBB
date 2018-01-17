const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function(message) {
        // Don't forget to log the message!
        message.sendMessage(message.channel, "Hello!");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
