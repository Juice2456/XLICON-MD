const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2348110961623"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Nigeria'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '2348110961623' 
global.devs = '2348110961623';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdTR0ZSUVBnSEVBT04rdDNhOXlrT1c3dVVxQVliTTNxaU11L0VzTFNYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDhhcnlQSUgvYVhWb0FwOGxTQnJPNk1TUXRyQ0hQN0dzeHJ2Uk1YeVl3bz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT1dLOHpJNWM4bG9ySk9VUFA0Vklvbmdlc01CRFNZQk5hYlFIckdNVGtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWajVmZXZ0cWs2ZmJGZFJnMnNvTm5ZVkdhV2NCQk1RVFRuZit0TGgzWkFrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCVFc4UStDNUtjamNYdTJKbzJ5cHhYZ3dZTTNrQjgvNmJRem5Hbk11R0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGclpBaGxMenNkenRFVkRzV245MXFQQ1pZVS93MmNhRU9vcTNZRVVwbXc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKVXBwMGg4cHZVOGZoeDE3dFJSWDZ4UU5GYldIUTdJNjJkak50RHRyUHVGdGxPQ1E4ZlpldDBBLzE4MjAxNXJ0UUNUeXIzdm1ROUpQRFY2NlZMZytoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1MSwiYWR2U2VjcmV0S2V5IjoiYWZvUTV6UDJ0bzlqbmlJckRzTnMzZXk5TWlDZGhoK2k4VFpsMUFuWEpBQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoialZBSlhYcG5TTUN2bldfNDZIVUxWZyIsInBob25lSWQiOiIzZTJmZjQ0NS04YzllLTQ0YmUtODJiZi02NGM0YTU5MTY4MjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGEvNk5jdE5JMzVOemkxOHZRNUpQVVg0UjFvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ0p5MGlySnA1R0JMYm5lODNLb2RzaVdwdHM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQ050TnNFRUx5ZytLa0dHQnM9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldvTmhOcGpxeW5lTDZUMk45TE5VbXNlVnFBOXpRa0JhK1V3QThDVjYxQVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitXUENiKzRNeWgzUnBuelNiSlNXbWFDa1U2amJyT0x3ZG1kdk5jYU1zRHcyVFdvMHdqc0NMRUFVR2UxMXpnUHpIS21GUnovMkVmRHNqV09BbGJ4dkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVVVBRR3Mxd3NOWUZXYjZsSGE0T1hXa2JoMS9pWFJRV01hUjh5WEU3UFdWT1AzSVVzWHFQZWJ6YXNTdjBZVWIwWThlOVVLM2g2dkh6ZG5sNEZNU01ndz09In0sIm1lIjp7ImlkIjoiMjM0ODExMDk2MTYyMzozMEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTEwOTYxNjIzOjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZxRFlUYVk2c3AzaStrOWpmU3pWSnJIbGFnUGMwSkFXdmxNQVBBbGV0UUcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTg1NjYyMDh9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Reborn',
  packname:  process.env.PACK_NAME || 'REBORN PACK',
   
  botname:   process.env.BOT_NAME === undefined ? "Reborn-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'reborn' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
