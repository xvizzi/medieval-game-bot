var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json')

//create the logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {colorize:true});

logger.level = 'debug';

var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function(evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
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