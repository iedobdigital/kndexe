const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
const token = process.env.TOKEN;
http.createServer().listen(port);

bot.on('ready', () =>{
    console.log('KND.EXE ONLINE!');
})

bot.on('message', msg=> {
    if(msg.content === "HELLO") {
        msg.reply("HELLO FRIEND!");
    }
})

bot.on('error', err =>{
    console.log(err);
})

bot.login(token);