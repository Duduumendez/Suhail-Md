const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255749750707";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_27_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDM0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg2LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS0pIMmlEcFdBVEVwem5IdmdFS2FiaUJtUytHSXVVT1RiU3ZYV0dVc3B5cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieEdabmZwaXBUUUtNYlM4UTJ1REpiZ1wiLFxuICBcInBob25lSWRcIjogXCIwZDMwODY4NC05MTcyLTRjOWItOTJlOS1jODUwZDZjMjA0NWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAzNixcbiAgICAgIDc1LFxuICAgICAgMjI3LFxuICAgICAgMTg4LFxuICAgICAgMTY5LFxuICAgICAgNDAsXG4gICAgICA1OCxcbiAgICAgIDEyNCxcbiAgICAgIDE4NCxcbiAgICAgIDIyMSxcbiAgICAgIDY0LFxuICAgICAgMTk1LFxuICAgICAgMjI2LFxuICAgICAgMTc2LFxuICAgICAgMTg3LFxuICAgICAgMTM1LFxuICAgICAgMTc0LFxuICAgICAgMjUzLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICA0OSxcbiAgICAgIDE5NSxcbiAgICAgIDQ3LFxuICAgICAgMTEsXG4gICAgICA5LFxuICAgICAgNjUsXG4gICAgICAyMDIsXG4gICAgICA1MSxcbiAgICAgIDIxNixcbiAgICAgIDE1MCxcbiAgICAgIDIwMSxcbiAgICAgIDE5MyxcbiAgICAgIDkwLFxuICAgICAgODEsXG4gICAgICA5MSxcbiAgICAgIDMxLFxuICAgICAgMTI3LFxuICAgICAgMTE2LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY0NDlKNktIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NDk3NTA3MDc6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEVURVVV9NRU5ERVpcIixcbiAgICBcImxpZFwiOiBcIjI2MjY1OTEyNzY0MDE2OTo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTGczclVGRUpLQnJiUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllFZHcyYUhQV2Z3T3ZyTVRBYWt2MGJURmVaRExOU1EyeWRDTm5FdnVZRlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2E4NXBCeVNyWkdxU2lkK3ZDbjBVVTBta1dkRnEzaEQ1ckdrb0dsSFNhT2VZeVUzMVd5a1FQRWRLeE5uQU1WZlVyRjU2dncrWnhJanhRMzhFS0FHQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYTU1L0oySjYyMW0yWjR4YmpkRFlJYWI5MlI1bVlYeG5URWNxNFhDMDU0b095UHAvb0NYR1N1T3Q5MTZ6c010WGwvZUtSMllKWmR5UXNPd2xyNC9ZQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQ5NzUwNzA3OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQwMjA2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBoM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGgzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMmovenNpYjU2U0x6aWNsZm5MdVloZURYUTlaZUNjbFRDZGYzb1JYQyttbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIyLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM2NjEwODQxMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "DUDUU_MENDEZ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
