const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  }
  else if (command === 'link') {
    client.commands.get('link').execute(message, args);
  }
  else if (command === 'mod') {
    client.commands.get('mod').execute(message, args);
  }
	else if (command === 'react') {
		client.commands.get('react').execute(message, args);
	}
});

client.login(process.env.TOKEN);