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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923140272695";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_30_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUHpZcnNHU1ZaaFlybzl0V2U5R0RzSGU5MngvbW1hZWppbzlHMHQvV3hLOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNDAyNzI2OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYzNDQ1MUFGNDAyNzA2RjM2NTU2MjlFOEZBRUUwNUYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODQ0NzQyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE0MDI3MjY5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREIwODk1RjJFNjk2MUZFNTEwMDBENkREM0E2NzA1NTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NDQ3NDI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTQwMjcyNjk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RTVENTJCOEEzQzE0QkI1NUIwN0ZDQkNENURFOUNCQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg0NDc0MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNDAyNzI2OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNCM0QzQzJCNUZFNzE4RTdDNTk3OEQ1RDM3NEY3QzMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODQ0NzQzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGeHJYZHk4alRTR1o0bXJfUjFsb0FnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc0NTAxOGY1LWI2YWMtNGYxZS1hN2UyLTcwZGQwYmI5ZDEzN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICA4MyxcbiAgICAgIDE3LFxuICAgICAgMjI4LFxuICAgICAgNTgsXG4gICAgICA3NyxcbiAgICAgIDQ3LFxuICAgICAgMTc2LFxuICAgICAgMTk3LFxuICAgICAgNjUsXG4gICAgICA0NSxcbiAgICAgIDQsXG4gICAgICAyMDEsXG4gICAgICA0MixcbiAgICAgIDk0LFxuICAgICAgOTgsXG4gICAgICAxNzEsXG4gICAgICAyMTYsXG4gICAgICAyMSxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDE5OCxcbiAgICAgIDk1LFxuICAgICAgMTg0LFxuICAgICAgMTMwLFxuICAgICAgMjgsXG4gICAgICAzMyxcbiAgICAgIDE5MyxcbiAgICAgIDEzOSxcbiAgICAgIDQ0LFxuICAgICAgMjE0LFxuICAgICAgMjQ2LFxuICAgICAgMjI3LFxuICAgICAgMjQ1LFxuICAgICAgMjA3LFxuICAgICAgNDMsXG4gICAgICA3OSxcbiAgICAgIDE5MixcbiAgICAgIDc2LFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI5SEpGTU5CXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNDAyNzI2OTU6MUBzLndoYXRzYXBwLm5ldFwiLFxuI"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
