const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log ('Logged in as JABIBI PROTECTION')
 });   
 
 //Now we'll make an event fot teh commands!
 
 client.on('message', message =>{
     //here we'll write the commands
     if(message.content === '!babys') {
         message.channel.send("ESTE BOT SOLO HECHO PARA EL USO EXCLUSIVO DE LA LEGION DE BABYS HACKERS!")
     }
     //we'll leave it here for now 
 })
 
 //Now our bot will login through teh bot token 
 
 client.login('ODU3MjcwOTE4MTcwMTQ4ODk0.YNNJwg.Bfcpz0IESMDNK7JjzhftD6PinAY');
 
