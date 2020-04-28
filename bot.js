var Discord = require('discord.js');
var auth = require('./auth.json')

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Connected as: '  + bot.user.tag)
}); 

bot.on('message', message => {
  //make sure any command starts with a "!"
    const prefix = '!';
    
    //if the message doesnt have the prefix, leave this block
    if(!message.content.startsWith(prefix)) return
    
    var postfix = message.content.substring(1)
    
    switch (postfix) {
      case "ping": 
        message.channel.send("pong")
        break; 
    }
    
  })

bot.login(auth.token)