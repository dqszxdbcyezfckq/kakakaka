const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const readline = require("readline-sync");
const setTitle = require("console-title");

console.clear();
setTitle("Discord Rainbow roles | Developed By Foski")
let token = process.env.token
let guildID = "786975047948173312"

bot.on("ready", () => {
    console.clear();
    setTitle(`Discord Rainbow roles | Developed By Foski | Logged into ${bot.user.tag}`)
    console.log(`Logged into ${bot.user.tag}`)
    console.log("Please type `!startrainbow` inside the server you would like to do it in.")
})

bot.on("message", async message => {
    if(message.guild.id != guildID)return;
    if(message.content == "!startrainbow"){
        message.channel.send(":white_check_mark: Starting rainbow role.")
        let role = message.guild.roles.find(role => role.name === "RAINBOW");
        if(role){
            await rainbow();
        }

        async function rainbow(){
    
            setInterval(async function(){
                await role.edit({ color: 'RANDOM' })
            }, config.speed)
        }
    }
})

bot.on("rateLimit", () => {
    console.log("you are being ratelimited!")
})

bot.login(token).catch(err => {
    return console.log(err)
})
