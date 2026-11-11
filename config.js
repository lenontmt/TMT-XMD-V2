// TMT-XMD V2 - Config File
// Owner: Lenon TMT | 263787400553

require('dotenv').config();

module.exports = {
  // ===== SESSION =====
  SESSION_ID: process.env.SESSION_ID || "TMT-XMD-V2~YOUR_SESSION_HERE",

  // ===== BOT INFO =====
  BOT_NAME: process.env.BOT_NAME || "TMT-XMD V2",
  OWNER_NAME: process.env.OWNER_NAME || "Lenon TMT",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263787400553",
  OWNER: ["263787400553"],

  // ===== SETTINGS =====
  PREFIX: process.env.PREFIX || ".",
  MODE: process.env.MODE || "public", // public / private
  VERSION: "1.9.0",

  // ===== LINKS =====
  CHANNEL_LINK: "https://t.me/TMT_XMD_V2",
  SUPPORT_GROUP: "https://chat.whatsapp.com/TMTXMDV2",
  GITHUB: "https://github.com/lenontmt/TMT-XMD-V2",
  BOT_IMAGE: "https://raw.githubusercontent.com/lenontmt/TMT-XMD-V2/main/tmt.jpg",

  // ===== AUTO FEATURES =====
  AUTO_READ: process.env.AUTO_READ || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  ANTI_DELETE: process.env.ANTI_DELETE || "false",
  ANTI_LINK: process.env.ANTI_LINK || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",

  // ===== OTHER =====
  TIMEZONE: "Africa/Harare",
  LANGUAGE: "en",
  FOOTER: "© TMT-XMD V2 | By Lenon TMT",
  CAPTION: "TMT-XMD V2",
};

// Global for old plugins that use global.config
global.botName = "TMT-XMD V2";
global.ownerName = "Lenon TMT";
global.ownerNumber = ["263787400553"];
global.prefix = ".";
global.mode = "public";
global.footer = "© TMT-XMD V2";
global.channel = "https://t.me/TMT_XMD_V2";
