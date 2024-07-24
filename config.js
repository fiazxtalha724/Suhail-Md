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


global.devs = "923481668009" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923481668009";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_22_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidHNVN2s1K3ByVU5FMHN4WEh6T1BnYlpBV0VTdm9VcTdiRHloaVNFYWFnaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibl93VmRPdVZUd3liLVhPNnJRV0RZZ1wiLFxuICBcInBob25lSWRcIjogXCJjMjAwOTM2Ni04YWFjLTQxNzctYmNkYi0zMGFkYTg3NGM5MWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTEwLFxuICAgICAgMTk4LFxuICAgICAgMjI4LFxuICAgICAgMTUwLFxuICAgICAgMjAzLFxuICAgICAgODQsXG4gICAgICAxNTUsXG4gICAgICAxODYsXG4gICAgICAxMTAsXG4gICAgICA2MixcbiAgICAgIDE0MyxcbiAgICAgIDE5NCxcbiAgICAgIDcxLFxuICAgICAgMjcsXG4gICAgICA2MSxcbiAgICAgIDE1NixcbiAgICAgIDIwMSxcbiAgICAgIDEyOCxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDczLFxuICAgICAgMjI1LFxuICAgICAgMjI4LFxuICAgICAgOSxcbiAgICAgIDExMixcbiAgICAgIDYxLFxuICAgICAgMTcsXG4gICAgICA0LFxuICAgICAgOTAsXG4gICAgICA3OSxcbiAgICAgIDIsXG4gICAgICAxNzUsXG4gICAgICAyMCxcbiAgICAgIDIzNCxcbiAgICAgIDg3LFxuICAgICAgMjM1LFxuICAgICAgOSxcbiAgICAgIDM2LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjVKSjM4TkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE4NTQxOTI3NToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUzMzE3OTE3MzU2MDM0OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01PNmdMMEVFUEdFOTdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUjY1empibjVIcGRKYVh4c0lFcHFoeEY0UGRFSHRWSmpkaEl3UGkzR2Fpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJneDRmcDl3VE5aa0RkMWtVME1FMWRRVGxiNk42OUxRaUVidUdueVFKWlJKZHJmSHJVZVNkRXkxem1IeS9uMlJpQm9ZbUFqamhNK05IWS9VanZwR09DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyeFdlemlkbHUxVkUxR0dwYmFaY1I5aEJiTW8rZFZnS2dvOXJ1dWc1ekxxb1JaTVdwNitMWS9qYmxFcUZwMEJKU2Ricnhjb2M1K3RuQ1NEMzAwUGJpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxODU0MTkyNzU6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYxNDk2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZXc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRldzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYm51SGRYaFRJNGNLeVNhZ01kQXpISjN4OHVBcHNPSElaYmlkcmNFWGZEST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjAxNjc1NTg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1OTIyNDQ4NDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Fiaz X Babar",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
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
