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
    
})