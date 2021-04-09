const Discord = require('discord.js');
const client = new Discord.Client();

const embed = new Discord.MessageEmbed()
.setTitle('HELP')
.addField('%hello')
.addField("%info")
.addField("%how much will i score in my exams ?")
.addField("%how much time will i fail in exams ?")
.addField('%support')
.addField("%profile")
.addField('%how is KTG ?')
.addField('%in which standard KTG is studying ?')
.addField('%which game do KTG play ?')
.addField('%where does KTG live ?')
.addField('%feeling bad')
.addField('%order food')
.addField('%KTG ke dost')
.addField('%report a problem')
.addField('%act')
.setColor('GREEN')


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: "FREE FIRE" } });

});

client.on('message', msg => {
  if (msg.content === '%help') {
    msg.channel.send(embed)
  }
  
        
  

  
  
  

  


});



client.login(process.env.token);