const Discord = require('discord.js')
const client  = new Discord.Client()

client.on('message', (msg) =>{
if(msg.author.bot || msg.channel.type == "dm" || msg.channel.type== 'group')return
if(msg.content.startsWith(prefix) != true)return
if(msg.content.startsWith(`${prefix}nick`)){
      if(msg.author.id != ownerID)
     msg.guild.members.get(client.user.id).setNickname(/*'Nickname goes here'*/)
  }
})