var Discord = require('discord.io');
var logger = require('winston');
var serverID = '504814259083935744';
var canChange = true;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`	

	if (!bot.directMessages[channelID]) {
		serverID = bot.channels[channelID].guild_id;
	}
	
    if (message.substring(0, 1) == '&') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
		
       
        args = args.splice(1);
        switch(cmd) {
            case 'first':
		canChange = true;
		if (bot.servers[serverID].members[userID].roles != undefined){
			for (var b = 0; b < bot.servers[serverID].members[userID].roles.length; b++){
				if (bot.servers[serverID].members[userID].roles[b] == 539986030347157515){
					canChange = false;
					bot.sendMessage({
						to: channelID,
						message: user + ', you are already in this block.'
					});
				}
				if (bot.servers[serverID].members[userID].roles[b] == 504814729169207316 || 504814827626037248 || 539986032385327116){
					canChange = false;
					bot.sendMessage({
						to: channelID,
						message: user + ', you are currently in another block. To change this, contact Charles.'
					});
				}
			}
		}
			if (serverID != '504814259083935744'){
				bot.sendMessage({
					to: channelID,
					message: 'Sorry, this bot was made for a specific server. It won\'t work here.'
				});
				canChange = false;
			}
		if (canChange){
               		bot.addToRole({
				serverID: serverID,
				userID: userID,
				roleID: '539986030347157515'
			});
		}
            break;
            case 'second':
		canChange = true;
		if (bot.servers[serverID].members[userID].roles != undefined){
			for (var b = 0; b < bot.servers[serverID].members[userID].roles.length; b++){
				if (bot.servers[serverID].members[userID].roles[b] == 504814827626037248){
					canChange = false;
					bot.sendMessage({
						to: channelID,
						message: user + ', you are already in this block.'
					});
				}
				if (bot.servers[serverID].members[userID].roles[b] == 539986030347157515 || 504814729169207316 || 539986032385327116){
					canChange = false;
					bot.sendMessage({
						to: channelID,
						message: user + ', you are currently in another block. To change this, contact Charles.'
					});
				}
			}
		}
			if (serverID != '504814259083935744'){
				bot.sendMessage({
					to: channelID,
					message: 'Sorry, this bot was made for a specific server. It won\'t work here.'
				});
				canChange = false;
			}
		if (canChange){
               		bot.addToRole({
				serverID: serverID,
				userID: userID,
				roleID: '504814827626037248'
			});
		}
            break;
            case 'third':
		canChange = true;
		if (bot.servers[serverID].members[userID].roles != undefined){
			for (var b = 0; b < bot.servers[serverID].members[userID].roles.length; b++){
				if (bot.servers[serverID].members[userID].roles[b] == 504814729169207316){
					canChange = false;
					bot.sendMessage({
						to: channelID,
						message: user + ', you are already in this block.'
					});
				}
				if (bot.servers[serverID].members[userID].roles[b] == 539986030347157515 ||504814827626037248 || 539986032385327116){
					canChange = false;
					bot.sendMessage({
						to: channelID,
						message: user + ', you are currently in another block. To change this, contact Charles.'
					});
				}
			}
		}
			if (serverID != '504814259083935744'){
				bot.sendMessage({
					to: channelID,
					message: 'Sorry, this bot was made for a specific server. It won\'t work here.'
				});
				canChange = false;
			}
		if (canChange){
               		bot.addToRole({
				serverID: serverID,
				userID: userID,
				roleID: '504814729169207316'
			});
		}
            break;
            case 'fourth':
		canChange = true;
		if (bot.servers[serverID].members[userID].roles != undefined){
			for (var a = 0; a < bot.servers[serverID].members[userID].roles.length; a++){
				if (bot.servers[serverID].members[userID].roles[a] == 539986032385327116){
					canChange = false;
					bot.sendMessage({
						to: channelID,
						message: user + ', you are already in this block.'
					});
				}
				if (bot.servers[serverID].members[userID].roles[a] == 504814827626037248 || 539986030347157515 || 504814729169207316){
					canChange = false;
					bot.sendMessage({
						to: channelID,
						message: user + ', you are currently in another block. To change this, contact Charles.'
					});
				}
			}
		}
			if (serverID != '504814259083935744'){
				bot.sendMessage({
					to: channelID,
					message: 'Sorry, this bot was made for a specific server. It won\'t work here.'
				});
				canChange = false;
			}
		if (canChange){
               		bot.addToRole({
				serverID: serverID,
				userID: userID,
				roleID: '539986032385327116'
			});
		}
		break;
		case 'help':
			bot.sendMessage({
				to: channelID,
				message: 'To add yourself to a block, say &first, &second, &third, or &fourth, depending on your class period. \nYou can only do this if you aren\'t in either role. If you accidently put yourself in the wrong block, contact Charles and he will change it.'
			});
			break;
         }
     }
});
