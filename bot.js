var Discord = require('discord.js');
var auth = require('./auth.json')

var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function(evt) {
    console.log('Connected as:'  + bot.username + ' - (' + bot.id + ')' )
}); 

bot.on('message', function(user,userID,channelID,message,evt) {
    if (message.substring(0,1) == '!') {
      var argument = message.substring(1).split(' ');
      var command = argument[0];
      
      argument = argument.splice(1);
      switch (command){
        case 'ping':
          bot.sendMessage({
            to:channelID,
            message: 'Pong!'
          });
          break;
      }
    }
})