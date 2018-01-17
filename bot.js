const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.delete()
    	message.reply('pong')
  	}
});

client.on(message.includes('LETTUCE')) {
    message.delete()
    message.author.send('You are Not allowed to user the word **Lettuce**!')
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
