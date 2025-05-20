/*

KAYANYA YANG DISINI GADA YG PERLU DI UBAH UBAH TERUNTUK USER SCRIPT
JIKA KAMU SUDAH PAHAM TENTANG BOT TIDAK MASALAH SIH
ERROR TANGGUNG SENDIRI

 SCRIPT INI DIKELOLA 100% OLEH XZIYY

 JOIN SALURAN TREPLEX CODERVERSE:
 https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v
  
 BELAJAR TENTANG SCRIPT INI?:
 https://chat.whatsapp.com/I3FFi9rm3zwDxnhMJDAnPd

jangan hapus Nama gw di Tq To dasar bocah Copy paste
// copy boleh asal apa? asal no delete w m
// apa itu wm: watermark
// apa itu watermark? fungsi google apa

 ©Aypa Team
* [`Aprilia`](https://github.com/?)
* [`YanzBotz`](https://github.com/YanzBotz)
* [`Febriansyah`](https://github.com/FebriansyahXd)
* [`Aldi Fauzi`](https://github.com/xZiyyy) // ME xZiyy

Thanks For Using My Project and Thanks For u Has Respect The creator
*/

const process = require('process');
process.on('uncaughtException', console.error)

require('../media/settings/ownerConfig.js');
require('../media/settings/config')
const { default: makeWaSocket, proto, prepareWAMessageMedia, generateWAMessageFromContent, downloadContentFromMessage, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const { util, promisify } = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const path = require("path");
const yts = require ('yt-search');
const chalk = require('chalk')
const crypto = require('crypto')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("../library/TelegraPH")
const moment = require("moment-timezone")
const os = require('os');
const pino = require('pino')
const { pipeline } = require('stream')
const ytdl = require('ytdl-core')
const speed = require('performance-now')
let BodyForm = require("form-data")
const more = String.fromCharCode(8206); 
const readmore = more.repeat(4001);
const {
  jarak,
  ssweb,
  tiktok,
  PlayStore,
  BukaLapak,
  pinterest,
  stickersearch,
  lirik
} = require("../media/scraper/scraper")

const { toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  videoConvert,
  ttp,
  addExifAvatar } = require('../library/converter')
  

const { bytesToSize, getRandomFile, smsg, checkBandwidth, sleep, formatSize, getRandom, format, getBuffer, isUrl, jsonformat, nganuin, pickRandom, runtime, clockString, shorturl, formatp, fetchJson, color, getGroupAdmins } = require("../library/myfunc");
const { addExif } = require('../library/exif')
const yetedln = require("../media/scraper/yetedln")
const apiUrlw = 'https://clairity-nine.vercel.app'

// game
// read database
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let tebakjkt48 = []
let tebakff = []
let tebakml = []
let _family100 = db.data.game.family100 = []

const list = JSON.parse(fs.readFileSync("./media/database/list.json"))
const admin = JSON.parse(fs.readFileSync("./media/database/admin.json"))


module.exports = fuzzy = async (fuzzy, m, msg, chatUpdate, store, groupCache) => {


const { type, sender, pushname, isGroup } = m
try {
// no multi prefix
//must use prefix
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const prefix = /^[°zZ#$*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'

const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''   
const order = body.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await fuzzy.decodeJid(fuzzy.user.id);
const senderNumber = sender.split('@')[0]
const pureNumber = botNumber.split('@')[0];
const isBot = botNumber.includes(senderNumber)
const isCreator = (m && m?.sender && [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const q = args.join(' ')
const text = args.join(" ");
const chat = isGroup?[m.chat] : false
const mentionedJid = [m.sender]
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m?.quoted || m;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted?.msg || quoted);
const from = m.key.remoteJid
const isMedia = /image|video|sticker|audio/.test(mime);
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2') 
//group
let groupMetadata = {};
if (m?.isGroup) {
  try {
    groupMetadata = await fuzzy.groupMetadata(m.chat);
  } catch (e) {
    groupMetadata = {};
  }
}
const groupName = m?.isGroup && groupMetadata ? groupMetadata.subject || '' : '';   
 const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
    
const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : false 

let datauser = JSON.parse(fs.readFileSync('./media/database/datauser.json'))
const isAdmin = admin.includes(senderNumber)
const isUser = datauser.includes(m.sender)
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

//================== [ DATABASE ] ==================//


try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('isBanned' in user)) user.isBanned = false
        if (!('afkReason' in user)) user.afkReason = ''
} else global.db.data.users[m?.sender] = {
        afkTime: -1,
        afkReason: '',
        isBanned: false,
}

// chats
 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBannedChat' in chat)) chat.isBannedChat = false
 if (!('autoai' in chats)) chats.autoai = false
 if (!('welcome' in chats)) chats.welcome = false
} else global.db.data.chats[m.chat] = {
autoai: false,
isBannedChat: false,
welcome: false,
}
// setting
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
if (!('onlygrub' in setting)) setting.onlygrub = false
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
 onlygrub: false,
}
} catch (err) {
}


const parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

//======[ AUTO REGISTER ]=======\\
if (isCmd && !isUser) {
datauser.push(m.sender)
fs.writeFileSync('./media/database/datauser.json', JSON.stringify(datauser, null, 2))
}
//======[ SETTING ]=======\\

// AUTOREAD
if (db.data.settings[botNumber].autoread) { fuzzy.readMessages([m?.key]) }

if (isCmd) {
let check = list.find(e => e.cmd === command);
if (check) {
    if (check.image) {
        await fuzzy.sendMessage(m.chat, {
            image: { url: check.image },
            caption: check.respon
        }, { quoted: m });
    } else {
        await m.reply(check.respon);
    }
}

    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {}

    let category = categories.find(cat => cat.category === command);

    if (category) {
        if (category.items.length === 0) {
            return m.reply(`Belum ada menu dalam kategori *${category.category}*`);
        }

        let menuText = `*MENU ${category.category.toUpperCase()}*\n\n`;
        category.items.forEach((item, index) => {
            menuText += `${index + 1}. ${prefix}${item.cmd}\n`;
        });

        return m.reply(menuText);
    }

for (const cat of categories) {
    const item = cat.items.find(item => item.cmd === command);
    if (item) {
        if (item.image) {
            return fuzzy.sendMessage(m.chat, {
                image: { url: item.image },
                caption: item.respon
            }, { quoted: m });
        } else {
            return m.reply(item.respon);
        }
    }
}

    console.log(
        chalk.bgBlackBright.green.bold(' [ LOG ] ') +
        `\n╔═════════════════════════════════════════════════════╗\n` +
        `║ ${chalk.bgCyan.black.bold(` ${command.toUpperCase()} `)} \n` +
        `╠═════════════════════════════════════════════════════╣\n` +
        `║ ${chalk.hex('#FFA500').bold('⇝ From:')} ${chalk.green.underline(pushname)} ${chalk.magenta.bold(`(${m.sender})`)} \n` +
        `║ ${chalk.hex('#FFA500').bold('⇝ In:')} ${chalk.greenBright(m.isGroup ? groupName : 'Private Chat')} \n` +
        `║ ${chalk.gray(from)} \n` +
        `╚═════════════════════════════════════════════════════╝\n` +
        chalk.bgBlackBright.green(`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`)
    );
} else if (isCmd && !isBot) {
    console.log(
        chalk.bgBlackBright.green.bold(' [ LOG CHAT ] ') +
        `\n╔═════════════════════════════════════════════════════╗\n` +
        `║ ${chalk.bgCyan.black.bold(` ${body} `)} \n` +
        `╠═════════════════════════════════════════════════════╣\n` +
        `║ ${chalk.hex('#FFA500').bold('⇝ From:')} ${chalk.green.underline(pushname)} ${chalk.magenta.bold(`(${m.sender})`)} \n` +
        `║ ${chalk.hex('#FFA500').bold('⇝ In:')} ${chalk.greenBright(m.isGroup ? groupName : 'Private Chat')} \n` +
        `║ ${chalk.gray(from)} \n` +
        `╚═════════════════════════════════════════════════════╝\n` +
        chalk.bgBlackBright.green(`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`)
    );
}
const reply = async (teks) => {
    try {
      fuzzy.sendMessage(
        m.chat, {
          text: teks,
          contextInfo: {
            externalAdReply: {
              body: `Hi ${pushname}`, // Isi deskripsi atau teks tambahan
              containsAutoReply: true, // Menunjukkan ini balasan otomatis (opsional)
              mediaType: 1, // Tipe media (1 untuk gambar, 2 untuk video, dll.)
              mediaUrl: "", // URL media atau link utama
              renderLargerThumbnail: false, // Membuat thumbnail lebih besar
              showAdAttribution: true, // Menampilkan label "Ad" (opsional)
              sourceUrl: "", // URL sumber yang akan diakses
              thumbnailUrl: global.imgUrl, // URL thumbnail
              title: botname, // Judul link preview
            },
          },
        }, {
          quoted: m
        }
      );
    } catch (error) {
        console.error('Error saat mengirim pesan:', error);
        m.reply('Gagal mengirim pesan, silakan coba lagi.');
    }
};




//======[ PLUGIN CMD ]=======\\
// liat kode plugin nya di
// media/plugins/disini
(function(_0x3e066b,_0x2cbba3){function _0x4067cc(_0x4317f4,_0x375dac,_0x4b5482,_0x34cec5,_0x54c668){return _0x9dfe(_0x375dac- -0x351,_0x4317f4);}function _0x18dd6b(_0x5ad831,_0x161f7e,_0x30c6c1,_0x1e9d4d,_0x2ca7df){return _0x9dfe(_0x5ad831- -0x2d4,_0x1e9d4d);}function _0x50b272(_0x28426b,_0xfbc5ea,_0x50a976,_0x2437e8,_0xc6738c){return _0x9dfe(_0x28426b- -0x23d,_0xc6738c);}function _0x5c81ba(_0x1a71f9,_0x1cbecd,_0x548541,_0x9cc167,_0x536982){return _0x9dfe(_0x536982- -0x7b,_0x9cc167);}const _0xc980a7=_0x3e066b();function _0x271347(_0x24c63c,_0x3fe565,_0x35713b,_0x2f8c35,_0x3292e7){return _0x9dfe(_0x24c63c-0x21b,_0x2f8c35);}while(!![]){try{const _0x4d37e0=parseInt(_0x50b272(0x123,0x131,0xfb,0x99,0xb2))/(-0x1d67+0x11ee+-0xb7a*-0x1)+-parseInt(_0x50b272(0x17,0x16b,0x13e,0x168,-0x8))/(-0x349+-0x725+0xa70)+parseInt(_0x50b272(-0x4e,0x65,0x7c,-0x11d,0xd2))/(-0x14f4+-0xa86+-0xa7f*-0x3)+-parseInt(_0x50b272(-0xdd,-0xcd,-0xa2,-0x154,-0x1c9))/(-0x5*0x35b+0x25cc+-0x1501)*(parseInt(_0x50b272(0x148,0x2a7,0x1e7,0xc7,0x227))/(-0x44*0x70+-0x56*-0xb+0x1a13))+parseInt(_0x271347(0x600,0x6ad,0x669,0x65c,0x67e))/(0x1ccd+0x1f3*0xe+0x1*-0x3811)+-parseInt(_0x18dd6b(-0xb4,-0x216,-0x16,-0x1f5,-0x1ea))/(-0x14e5+-0xd*0x175+0xd*0x311)*(parseInt(_0x5c81ba(0x2a5,0x350,0x2e4,0x22f,0x279))/(0x21*0x1+-0x23d1+0xbe8*0x3))+parseInt(_0x271347(0x52e,0x432,0x4db,0x456,0x4e0))/(-0x4*-0x50e+-0xeaa+-0x9*0x9d);if(_0x4d37e0===_0x2cbba3)break;else _0xc980a7['push'](_0xc980a7['shift']());}catch(_0x2ac0a1){_0xc980a7['push'](_0xc980a7['shift']());}}}(_0x173e,-0x3c61e+0x27782*0x3+0x22f66));let activationNotified=![];if(body[_0x5ca284(0xe8,0x17d,0x197,0x22d,0x108)+_0x35fb5b(0x2d8,0x2b9,0x3d7,0x2c1,0x165)](prefix+(_0x35fb5b(0x2e5,0x1a2,0x12d,0x22b,0x1fe)+_0xfcecc6(0x53c,0x52d,0x617,0x4d0,0x58b)))){const inputKey=args[0x213+0xb2*0x3+-0x429];if(!inputKey){const _0x3f6499={};return _0x3f6499[_0x17ccd6(0x5ae,0x52b,0x60a,0x6e3,0x610)]=_0x35fb5b(0x410,0x3a5,0x279,0x292,0x4e0)+_0x35fb5b(0x1bf,0x1a3,0x1ff,0x246,0xb2)+_0x35fb5b(0x3b9,0x37d,0x412,0x263,0x288)+_0x17ccd6(0x619,0x5c8,0x63a,0x6cc,0x5d3)+_0xfcecc6(0x64c,0x5d9,0x696,0x5ae,0x4f3)+_0x17ccd6(0x484,0x6eb,0x5a9,0x5bc,0x682)+_0x35fb5b(0x33b,0x320,0x3c9,0x217,0x39c)+_0x5ca284(0x176,0x127,0x15c,0x2e,0x55)+_0x44422c(0x5a,-0x5b,-0x57,0x4d,0x122)+_0x44422c(0x181,-0x3,0x14c,0x4b,0x62)+_0x35fb5b(0x339,0x3aa,0x50c,0x2af,0x428),fuzzy[_0x5ca284(0xf4,0x97,-0x67,0xdc,0x52)+_0x17ccd6(0x537,0x71e,0x5f3,0x57f,0x640)+'e'](m[_0xfcecc6(0x764,0x70e,0x682,0x5d0,0x636)],_0x3f6499,{'quoted':m});}try{const res=await axios[_0x44422c(-0x1d2,0x18,-0x34,-0x98,0xa2)](_0xfcecc6(0x778,0x713,0x5f5,0x5ba,0x708)+_0x17ccd6(0x536,0x4e9,0x561,0x485,0x49b)+_0x5ca284(0xbd,0x50,-0x48,0xa,0x1af)+_0xfcecc6(0x5dc,0x66a,0x625,0x5b7,0x6b7)+_0xfcecc6(0x647,0x514,0x603,0x574,0x59f)+_0x35fb5b(0x2b5,0x3c0,0x3cd,0x3c0,0x461)+_0x44422c(-0x1c9,0x46,-0x1da,-0xe2,-0x142)+_0xfcecc6(0x4fe,0x654,0x667,0x603,0x665)+_0x44422c(-0x11c,-0xe5,-0x4a,-0x57,-0xc7)+_0x44422c(0xae,0xd5,0x25,0xa9,-0x64)+_0x44422c(0x12,0x18e,0x16a,0xee,0x1ec)+_0x35fb5b(0x449,0x429,0x431,0x339,0x3ef)+_0x35fb5b(0x43a,0x31e,0x1bf,0x228,0x348)+_0xfcecc6(0x67e,0x600,0x625,0x4c6,0x60e)+'rs'),validKeys=res[_0x5ca284(0x309,0x3c4,0x1bf,0x407,0x264)][_0x17ccd6(0x62a,0x6de,0x59b,0x608,0x496)]()[_0x44422c(-0x18f,-0xea,0x58,-0xec,-0xd8)]('\x0a')[_0xfcecc6(0x528,0x55c,0x585,0x3fb,0x5b3)](_0x1f5e4d=>_0x1f5e4d[_0x17ccd6(0x4cd,0x6ca,0x59b,0x6de,0x52b)]());if(!validKeys[_0x17ccd6(0x394,0x461,0x3e7,0x3c2,0x2b8)+_0x17ccd6(0x422,0x501,0x585,0x618,0x467)](inputKey)){const _0xb60edc={};return _0xb60edc[_0xfcecc6(0x6c9,0x698,0x64b,0x664,0x607)]=_0x35fb5b(0x44c,0x403,0x3a9,0x39e,0x47b)+_0x44422c(-0x25d,-0x120,-0x265,-0x1a9,-0x228)+_0x5ca284(0x14c,0x8,0x155,0x244,0x14)+_0x35fb5b(0x60,0x184,0xe7,0x16e,0x8a)+_0x17ccd6(0x630,0x589,0x68c,0x7c7,0x7d7)+_0x44422c(-0x148,-0x248,-0x1fd,-0x167,-0x1fb)+_0x17ccd6(0x56d,0x68a,0x669,0x63d,0x764)+_0x44422c(0x81,-0xc9,-0xa2,0x28,-0x6d)+_0x5ca284(0x146,0x1b7,0x11b,0x13,0x237)+_0x44422c(-0x2b8,-0x6b,-0xa1,-0x15a,-0x97)+_0xfcecc6(0x5fe,0x6c1,0x708,0x56b,0x58b)+_0x5ca284(0x28e,0x286,0x311,0x195,0x2ac)+_0x17ccd6(0x6ab,0x660,0x686,0x542,0x797)+_0x35fb5b(0x4fd,0x3c3,0x283,0x431,0x418)+_0x5ca284(0x1ba,0x311,0x1a7,0x174,0x120),fuzzy[_0x17ccd6(0x4e5,0x3df,0x475,0x4ce,0x513)+_0x44422c(0xb3,0x10c,0xce,0x6c,-0xa9)+'e'](m[_0xfcecc6(0x69f,0x70e,0x7dd,0x838,0x764)],_0xb60edc,{'quoted':m});}const activationPath=path[_0xfcecc6(0x593,0x6e5,0x66b,0x6d9,0x606)](_0x5ca284(0xff,0x1ea,0x184,0x132,0x123)+_0x35fb5b(0x2be,0x2a0,0x2b1,0x378,0x3ef)+_0x5ca284(0x92,-0x83,0x131,-0xca,-0x12)+_0x35fb5b(0x1ba,0x274,0x12a,0x378,0x34a)+_0x35fb5b(0x1ef,0x2be,0x336,0x25e,0x3f5)+_0xfcecc6(0x42a,0x4bc,0x60f,0x396,0x54a)+'on'),_0x1d44d2={};_0x1d44d2[_0xfcecc6(0x702,0x5de,0x6f3,0x73c,0x4ed)]=inputKey,fs[_0xfcecc6(0x6c7,0x6d0,0x6d0,0x723,0x808)+_0x5ca284(0x142,0x14f,0x136,0xf2,0x1c6)+_0x17ccd6(0x5bc,0x5d2,0x645,0x5df,0x64c)](activationPath,JSON[_0x17ccd6(0x43e,0x69d,0x53a,0x57d,0x578)+_0x5ca284(0x2c6,0x3ec,0x282,0x396,0x34a)](_0x1d44d2,null,-0x26e*-0x1+-0x8*0xb1+-0x18e*-0x2)),activationNotified=![];const _0xbe1926={};return _0xbe1926[_0x35fb5b(0x42b,0x396,0x31e,0x324,0x490)]=_0x35fb5b(0x4b3,0x370,0x30c,0x26f,0x2b5)+_0x5ca284(0x218,0x229,0x177,0x272,0x1cf)+_0x44422c(-0x22,-0xb8,0x14a,0x56,-0x10c)+_0x44422c(0x25c,0x63,0x232,0x10e,-0x1d)+_0x17ccd6(0x48c,0x64f,0x5db,0x4d3,0x5e2)+_0x17ccd6(0x507,0x382,0x440,0x2f8,0x3de)+'*'+inputKey+(_0x5ca284(0x1b0,0x2fd,0x119,0x189,0xaf)+_0x44422c(0x1d2,0x1b6,0x2c,0xdc,0xf1)+_0x17ccd6(0x701,0x518,0x59f,0x4c7,0x670)+_0x5ca284(0x1f9,0x14e,0xea,0x225,0x33c)+_0x44422c(-0x122,-0x1a6,-0x5,-0x122,-0x1b7)+_0x44422c(-0x12f,-0x1ed,-0x259,-0x12a,-0x205)+_0xfcecc6(0x6d3,0x5c3,0x546,0x5cc,0x665)+_0x17ccd6(0x365,0x405,0x494,0x5eb,0x4f4)+_0xfcecc6(0x5f2,0x562,0x5fb,0x42a,0x422)+_0x5ca284(0x1ec,0x125,0x337,0xaf,0x118)),fuzzy[_0x35fb5b(0x171,0x201,0x32b,0x245,0x12f)+_0x5ca284(0x272,0x154,0x359,0x175,0x1cb)+'e'](m[_0x5ca284(0x2ff,0x301,0x215,0x236,0x3d5)],_0xbe1926,{'quoted':m});}catch(_0x1b3859){console[_0x17ccd6(0x5f8,0x4fd,0x55d,0x61d,0x623)](_0x35fb5b(0x200,0x20a,0x22e,0x2a5,0x326)+_0x17ccd6(0x38c,0x48b,0x4b5,0x581,0x460)+_0x35fb5b(0x99,0x1fe,0x129,0x200,0x1e3)+'e:',_0x1b3859);const _0x486e1a={};return _0x486e1a[_0x44422c(-0x5a,0x162,0x1a2,0x83,0x16c)]=_0x35fb5b(0x190,0x20a,0x177,0x317,0x2dc)+_0x44422c(-0xef,-0x130,0x94,-0xe,-0x124)+_0x35fb5b(0x2e2,0x2d2,0x302,0x1c5,0x19d)+_0x17ccd6(0x563,0x49a,0x45f,0x53e,0x51c)+_0xfcecc6(0x41a,0x4e3,0x3d1,0x4d3,0x4a9)+_0x5ca284(0x1b2,0x7f,0x25d,0x272,0x14b)+_0xfcecc6(0x638,0x5ad,0x5d5,0x5ed,0x482)+_0x44422c(-0x6e,0xb1,0x36,0x5c,0x1b8)+_0x17ccd6(0x6f2,0x6a5,0x62f,0x531,0x71f)+_0xfcecc6(0x60f,0x688,0x667,0x566,0x616)+_0x44422c(0x30,-0x148,-0xf2,-0x127,-0x11e)+'i.',fuzzy[_0x5ca284(0xf4,0x228,0xd6,0x100,0x9c)+_0x5ca284(0x272,0x227,0x194,0x1a2,0x187)+'e'](m[_0xfcecc6(0x870,0x70e,0x86a,0x70a,0x5c7)],_0x486e1a,{'quoted':m});}}async function checkActivation(_0x1c8094,_0x21d730){function _0x5e7171(_0x157fb2,_0x21e9be,_0x4cf14a,_0x5a8e75,_0x769c60){return _0x35fb5b(_0x21e9be,_0x5a8e75- -0x2f2,_0x4cf14a-0x1d6,_0x5a8e75-0x55,_0x769c60-0x1c6);}const _0x3b87c1={'aILfE':function(_0x4a6ecc,_0x4dffe7){return _0x4a6ecc!==_0x4dffe7;},'rmDWB':_0x5346ee(0x2f3,0x3b2,0x242,0x30d,0x209),'zxwBQ':_0x5e7171(-0x1ae,-0x12f,0xa2,-0xbe,-0x54),'VGAJc':_0x5346ee(0x2c5,0x2d3,0x37e,0x2b9,0x2ba),'mKhOR':function(_0x143903,_0x1c7556){return _0x143903===_0x1c7556;},'yEcyt':_0x5346ee(0x15e,0x48,0x1e9,0x15d,0x19e),'EVAlP':function(_0x4e3a9c,_0x36ed32){return _0x4e3a9c===_0x36ed32;},'rWvUe':_0x5e7171(-0xfa,-0x32,-0x240,-0x166,-0x14c),'hDvPA':_0x5346ee(0x29c,0x352,0x206,0x28b,0x13a),'CYmFq':function(_0x52eb99,_0x577bcf){return _0x52eb99!==_0x577bcf;},'muAGe':_0x1283e1(0x29a,0x11a,0x163,0x19c,0x6d),'aCVrq':_0x5ca485(0x54c,0x682,0x3ea,0x3ff,0x635)+_0x1283e1(0x190,0x2bb,0x28f,0x28f,0x2e5)+'+$','CcDiq':_0x5346ee(0x2a0,0x248,0x3cc,0x351,0x473)+_0x5ca485(0x4dc,0x496,0x595,0x518,0x51a)+_0x3b2ebc(0x4f7,0x3c6,0x444,0x4da,0x53c)+_0x5ca485(0x6ff,0x73c,0x7f5,0x5f5,0x7f0)+_0x1283e1(0x1e1,0x3fd,0x323,0x2f5,0x2c4)+_0x1283e1(0x2d2,0x419,0x290,0x353,0x444)+_0x3b2ebc(0x49a,0x434,0x470,0x368,0x348)+_0x1283e1(0x1b5,0x258,0x3ad,0x2a1,0x160)+_0x5e7171(-0x95,0xc4,-0xe1,0x6e,0x114)+_0x5ca485(0x697,0x6d4,0x562,0x6fe,0x580)+_0x1283e1(0x42a,0x47c,0x35c,0x3c8,0x40a),'xnjDF':function(_0x5d4c3d,_0x41db5a){return _0x5d4c3d+_0x41db5a;},'jTtBK':_0x5346ee(0x3a5,0x2fc,0x21d,0x2b6,0x3de),'rIgax':_0x5e7171(0xcf,0x1bf,0x1d6,0xe0,0xc7),'AYjQJ':_0x1283e1(0x27c,0x2ab,0x285,0x39e,0x4ce)+'n','seFaw':function(_0x398b96,_0xbefbc2){return _0x398b96(_0xbefbc2);},'GwOZQ':_0x3b2ebc(0x384,0x42e,0x3b9,0x245,0x277)+_0x5346ee(0x32c,0x128,0x14e,0x1ed,0xd7)+_0x1283e1(0x27e,0x1a8,0x200,0x195,0x19b)+_0x5346ee(0x393,0x47d,0x2c1,0x3c1,0x515)+_0x5346ee(0x158,0xe2,0x1ba,0x131,0x196)+_0x5346ee(0x1ad,0x28b,0x39b,0x274,0x315)+_0x5e7171(0xaf,-0x150,0xe3,-0x55,0x2)+_0x3b2ebc(0x4a3,0x347,0x503,0x554,0x343)+_0x5e7171(-0x29,0x82,0x21,0xec,0x153)+_0x1283e1(0x140,0x2ee,0x2bc,0x234,0x14d)+_0x3b2ebc(0x4ae,0x3d2,0x601,0x4f8,0x60f)+_0x1283e1(0x350,0x2af,0x414,0x406,0x538)+_0x1283e1(0x37c,0x36b,0x32c,0x277,0x199)+'d.','QXsiI':_0x5ca485(0x5fc,0x628,0x658,0x582,0x4ec),'MwFSr':_0x3b2ebc(0x49b,0x5bc,0x55d,0x3c1,0x379),'ovOHs':_0x1283e1(0x59f,0x4fb,0x573,0x442,0x435),'hKplg':function(_0x549d0d,_0x36cc06){return _0x549d0d!==_0x36cc06;},'MgwHm':_0x5346ee(0x21c,0x2f0,0x440,0x323,0x399),'aPkpd':function(_0x4e5555,_0x2677c0){return _0x4e5555(_0x2677c0);},'BbKXG':function(_0x4b6ea9,_0x1108a1){return _0x4b6ea9!==_0x1108a1;},'zKvwt':_0x5346ee(0x2c9,0xb5,0x232,0x1f8,0x132),'kIuEF':_0x3b2ebc(0x497,0x5c4,0x406,0x598,0x368),'AIRdF':_0x3b2ebc(0x568,0x5e2,0x58c,0x480,0x474)+_0x5ca485(0x4c1,0x45b,0x500,0x457,0x61f)+_0x5346ee(0x402,0x1fe,0x459,0x34f,0x48f)+')','JgEYJ':_0x5e7171(0x17f,-0xb1,0x144,0x44,-0x3d)+_0x5e7171(0x8e,0xd8,0xd2,0x70,0x1a5)+_0x1283e1(0x258,0x1d6,0x251,0x1dc,0xca)+_0x5e7171(-0x1a,0x112,0xc,0xd8,0x21e)+_0x5e7171(-0x21b,-0x65,-0x21b,-0x152,-0x78)+_0x5e7171(-0x89,0x15c,0x5e,0xa2,-0x56)+_0x5346ee(0x450,0x506,0x4c1,0x3c6,0x26c),'JSqBo':_0x5ca485(0x64b,0x5e1,0x5b1,0x71c,0x5d0),'dxPmM':_0x5346ee(0x205,0x332,0x29d,0x36a,0x4c7),'KVOcq':function(_0x3a5fdd,_0x434e24){return _0x3a5fdd+_0x434e24;},'bHGHS':_0x1283e1(0x1d1,0x12f,0x31d,0x27c,0x206),'TzsfK':function(_0x4cc650){return _0x4cc650();},'WJqdq':_0x5346ee(0x303,0x34e,0x2c9,0x3b1,0x375)+_0x1283e1(0x4c6,0x2ef,0x3d8,0x3b6,0x36e)+_0x1283e1(0x1bf,0x398,0x1c3,0x2fe,0x2ca)+_0x5346ee(0x263,0x20,0x226,0x14a,0x4)+_0x5e7171(-0x3,-0x1da,-0x12a,-0xb4,-0x15)+_0x5ca485(0x4f6,0x53c,0x418,0x574,0x61a)+_0x5ca485(0x5b8,0x5aa,0x62f,0x65b,0x52c)+_0x1283e1(0x257,0x28e,0x128,0x27b,0x2d9)+_0x5e7171(-0x1e9,0x79,-0x152,-0xcd,-0x172)+_0x1283e1(0x3ed,0x245,0x204,0x2aa,0x1f0)+_0x5ca485(0x6c2,0x65f,0x7f2,0x706,0x80d)+_0x3b2ebc(0x354,0x4aa,0x33d,0x3ad,0x240)+_0x5e7171(0x38,0x88,-0x18,0x15,0x70)+_0x5e7171(0x142,-0x24,-0x5b,-0xf,-0x146)+_0x5ca485(0x613,0x75f,0x4e0,0x4cc,0x683)+_0x3b2ebc(0x58a,0x5b3,0x640,0x4a9,0x5e5)+_0x5ca485(0x51e,0x3c5,0x55d,0x4e9,0x671)+_0x3b2ebc(0x3b3,0x3be,0x262,0x4de,0x31a)+'0v','IPOPx':function(_0x3be3ae,_0x34ba26){return _0x3be3ae(_0x34ba26);},'ZRZyY':_0x5ca485(0x5f3,0x4ea,0x5c8,0x62c,0x634)+_0x5e7171(0xf1,0xcb,0x1a2,0x45,0x43)+_0x5346ee(0xee,-0x37,0x232,0x116,0xad)+_0x5346ee(0xb6,0x2d8,0x314,0x205,0x1cb)+'d.','UMFCZ':_0x5e7171(-0x1ba,-0x16,0xcc,-0x63,-0xcd),'IXsLT':function(_0x362c81,_0x479922){return _0x362c81(_0x479922);},'dzqxQ':function(_0x11be29,_0x20fd7f){return _0x11be29===_0x20fd7f;},'VoCWr':_0x1283e1(0x18d,0xf4,0x1df,0x201,0xef),'MbAAd':_0x5ca485(0x556,0x651,0x439,0x4db,0x534),'WPTyb':_0x5346ee(0x138,0x238,0x24a,0x1e6,0x2e1),'fjGzq':function(_0x5bd676,_0xfa03a5){return _0x5bd676===_0xfa03a5;},'DneUR':_0x3b2ebc(0x50d,0x521,0x42f,0x3c8,0x63e),'BCxog':_0x5e7171(-0x141,-0x1f0,-0x16a,-0x112,-0x22c),'nZHIU':function(_0x1c08d9,_0x6d33ef,_0x587455){return _0x1c08d9(_0x6d33ef,_0x587455);},'sDsqb':_0x1283e1(0x299,0x3e0,0x2c1,0x342,0x2c9)+_0x5346ee(0x1d6,0x19e,0x1a3,0x284,0x1f0)+_0x3b2ebc(0x4d2,0x432,0x37d,0x3bc,0x373),'HqqWe':_0x5e7171(0x92,0xd9,0x60,0xb6,0x199)+'er','gpTsd':function(_0x22756a,_0x65d943){return _0x22756a(_0x65d943);},'hPYyu':_0x3b2ebc(0x4c5,0x46b,0x5a0,0x59c,0x3ea)+_0x5346ee(0x5f,0x91,-0x9,0x127,0x277)+_0x1283e1(0x214,0x2d1,0x3ba,0x2ef,0x315)+_0x5346ee(0x3a8,0x32c,0x27b,0x396,0x3e4),'vTROw':_0x3b2ebc(0x32d,0x273,0x442,0x1d8,0x2f2)+_0x5ca485(0x5a8,0x4ad,0x563,0x62f,0x47c)+_0x5ca485(0x4b6,0x3d7,0x576,0x439,0x57f)+_0x5ca485(0x4c3,0x619,0x4a0,0x5d3,0x56f)+_0x5e7171(-0x13c,-0x5f,-0x179,-0xc8,-0xa4)+_0x5e7171(-0x35,0x158,-0xa5,0x28,0xce)+'\x20)','SfMOW':function(_0x30a507){return _0x30a507();},'BXMaC':function(_0x266063,_0x20aa3c,_0x6d1aaf){return _0x266063(_0x20aa3c,_0x6d1aaf);},'ywGpw':_0x1283e1(0xfd,0x14b,0x190,0x22a,0x29f)+_0x5ca485(0x5d9,0x694,0x712,0x579,0x6bf)+_0x5e7171(-0x9e,-0xc0,-0x17f,-0x153,-0x65)+_0x5346ee(0x2d2,0x28a,0xc2,0x220,0xd0)+_0x5e7171(-0x25,-0x155,-0x26,-0x34,-0x171)+_0x5e7171(-0x235,0x25,-0x47,-0x138,-0x17f)+'on','ZNsEs':function(_0x403db0,_0x3cba16){return _0x403db0!==_0x3cba16;},'GKStH':_0x5ca485(0x75f,0x782,0x7d2,0x6ce,0x732),'JypCk':_0x5ca485(0x650,0x69b,0x635,0x6a2,0x744),'mmwwK':_0x1283e1(0x23f,0x238,0x273,0x2c3,0x32e),'rYDxL':function(_0x211479,_0x1c9113){return _0x211479+_0x1c9113;},'ApiFe':_0x1283e1(0x2c8,0x2db,0x3c2,0x2bc,0x32d)+_0x5346ee(0x232,0x6f,0x66,0x12e,0x1b)+_0x1283e1(0x264,0x387,0x38f,0x3c2,0x29c),'pPafU':_0x5346ee(0x1be,0x22e,0x361,0x31c,0x46e)+_0x3b2ebc(0x49f,0x483,0x43c,0x532,0x556)+_0x5e7171(-0xdd,0xc4,0x39,0x53,0x101)+_0x5e7171(-0x25e,-0x1f2,-0x251,-0x180,-0x1b2)+_0x3b2ebc(0x414,0x319,0x445,0x2c6,0x358)+_0x5ca485(0x516,0x5d3,0x4ff,0x63c,0x629)+_0x3b2ebc(0x518,0x653,0x427,0x64f,0x447)+_0x3b2ebc(0x3fd,0x513,0x2a0,0x476,0x4ed)+_0x5e7171(0xcd,0xec,0x25b,0xfb,0x1e7)+_0x3b2ebc(0x2e7,0x297,0x274,0x43b,0x244),'OqtTm':_0x5346ee(0x103,0x296,0x248,0x182,0x139)+_0x5346ee(0x292,0x353,0x1ba,0x1ef,0x310)+_0x3b2ebc(0x43a,0x3bf,0x4f7,0x309,0x411)+_0x5346ee(0x4b8,0x2fd,0x41f,0x375,0x303)+_0x1283e1(0x476,0x4a2,0x468,0x3af,0x3b9)+_0x3b2ebc(0x40a,0x4f4,0x3a4,0x520,0x309),'vEqev':function(_0x44ba1f,_0x4b8d42){return _0x44ba1f===_0x4b8d42;},'fmQGV':_0x5ca485(0x4de,0x434,0x4a2,0x55e,0x5a2),'oOxAQ':_0x5ca485(0x6bb,0x55e,0x672,0x77b,0x72e),'nrxwp':_0x5ca485(0x74a,0x816,0x7e8,0x6f9,0x6c8)+_0x5ca485(0x626,0x74d,0x533,0x699,0x667)+_0x5e7171(-0x1f,-0x89,-0x1c7,-0x128,-0x5d)+_0x5346ee(0x3f9,0x40c,0x444,0x314,0x26c)+_0x1283e1(0x205,0x312,0x17e,0x230,0x332)+_0x5346ee(0x368,0x2eb,0x323,0x36c,0x420)+_0x5346ee(0x318,0x11e,0x2f1,0x1dd,0x1df)+_0x1283e1(0x3f3,0x320,0x366,0x370,0x30f)+_0x5e7171(0x11e,0x108,-0x133,-0x36,0x9)+_0x3b2ebc(0x536,0x3d0,0x4c1,0x599,0x599)+_0x5e7171(0x8,0x23a,0x84,0x10f,0xdb)+_0x5e7171(-0x20,0x58,0x103,0x137,-0x6)+_0x3b2ebc(0x498,0x4e5,0x596,0x33f,0x490)+_0x3b2ebc(0x478,0x59d,0x372,0x45c,0x548)+'rs','AhUkH':_0x3b2ebc(0x3b0,0x3d1,0x4f1,0x4c3,0x29e),'WIXPm':_0x3b2ebc(0x3f3,0x331,0x326,0x4ed,0x4e1),'ErGPj':_0x3b2ebc(0x44e,0x539,0x33c,0x4d4,0x2ee),'LvLBA':_0x5ca485(0x543,0x63c,0x59d,0x57e,0x57c)+_0x5346ee(0xcc,0x148,0x123,0x1cb,0x2bc)+_0x3b2ebc(0x45e,0x3fc,0x3a0,0x493,0x495)+_0x5ca485(0x5a1,0x4fa,0x48a,0x66b,0x54e)+_0x5ca485(0x74c,0x7c6,0x804,0x64f,0x608)+_0x5ca485(0x60e,0x5eb,0x655,0x715,0x56b)+_0x5e7171(0xd,0x1f,0x48,0x125,0x1f1)+_0x1283e1(0x475,0x2ad,0x435,0x409,0x559)+_0x5e7171(0x187,0x22c,0x33,0xd6,0x122)+_0x1283e1(0x2b1,0x3f8,0x2fa,0x3be,0x295)+_0x5ca485(0x71f,0x883,0x736,0x5fc,0x5e3)+_0x5e7171(0x22d,0x20f,0x171,0x10b,0x1b)+_0x1283e1(0x2a3,0x1f5,0x26f,0x272,0x2dd)+'.','NvTEZ':function(_0x33e2a5,_0x2b3bc8){return _0x33e2a5===_0x2b3bc8;},'SFova':_0x3b2ebc(0x37a,0x2f3,0x4db,0x34f,0x32a),'kOhZq':_0x3b2ebc(0x345,0x315,0x220,0x357,0x47b),'Lnelf':function(_0x1d8fa6,_0x5a6f4a){return _0x1d8fa6===_0x5a6f4a;},'GIMGM':_0x5e7171(0x14a,0x10f,0xf7,0x1e,-0xa0),'MvYMF':_0x3b2ebc(0x39b,0x2ef,0x32d,0x452,0x3b3),'ukHYG':_0x5346ee(0x116,0x2f2,0x2bd,0x230,0x1c1)+_0x5346ee(0x22e,0xe3,0x2bc,0x1f4,0x31e)+_0x5e7171(0x68,-0x45,0x44,0x2,-0x13)+_0x1283e1(0x4c0,0x362,0x3f2,0x3a8,0x49d)+_0x1283e1(0x100,0x2a5,0x1dc,0x1ed,0x161)+_0x5ca485(0x725,0x74d,0x7d1,0x7e4,0x79e)+_0x5ca485(0x5c4,0x674,0x494,0x4e9,0x5a7)+_0x1283e1(0x362,0x382,0x22c,0x38f,0x360)+_0x5ca485(0x648,0x5e5,0x6a5,0x563,0x529)+_0x3b2ebc(0x359,0x3df,0x3af,0x397,0x46e)+_0x5346ee(0xdd,0x25b,0x7d,0x167,0x4a)+_0x5346ee(0x2f,0x16b,0x1db,0x142,0xf3)+_0x3b2ebc(0x330,0x355,0x32a,0x31e,0x328)+_0x1283e1(0x295,0x499,0x41a,0x339,0x2f8)+_0x5346ee(0x300,0x134,0x238,0x25b,0x336)+_0x5ca485(0x4c7,0x3d3,0x507,0x361,0x408)+_0x1283e1(0x582,0x36f,0x2fc,0x437,0x468)+_0x5346ee(0x300,0x25b,0x29f,0x337,0x35b)+_0x1283e1(0x3ee,0x386,0x2d7,0x356,0x3da),'HrjMq':function(_0x1f3668,_0x2cda13){return _0x1f3668+_0x2cda13;},'CjsNB':_0x3b2ebc(0x57d,0x467,0x498,0x4d2,0x539)+_0x1283e1(0xc6,0x21e,0x32,0x186,0x2da)+_0x3b2ebc(0x4ca,0x4e8,0x503,0x367,0x4e8)+_0x5ca485(0x571,0x4f8,0x434,0x64c,0x579)+_0x5346ee(0x160,0x2b2,0x119,0x1c8,0x20c)+_0x5346ee(0x145,0x21a,0xf3,0x17c,0x194)+_0x5ca485(0x708,0x773,0x789,0x7de,0x67f)+_0x1283e1(0x3c1,0x2af,0x301,0x2c4,0x22a)+_0x3b2ebc(0x561,0x66b,0x607,0x693,0x5ed)+_0x5ca485(0x748,0x667,0x671,0x85a,0x721)+_0x5e7171(-0x11d,-0x22c,-0x148,-0x14f,-0x22c)+_0x1283e1(0x2ed,0x3b4,0x1a6,0x305,0x23c)+_0x1283e1(0x3f8,0x4f4,0x2a0,0x402,0x446)+_0x5346ee(0x133,0x22b,0x1a4,0x17b,0xc7)+_0x3b2ebc(0x4b8,0x4a8,0x3b4,0x474,0x507)+_0x5e7171(0xe1,0x1ec,0x86,0x10c,0x2)+_0x5ca485(0x668,0x681,0x55e,0x5f9,0x655)+_0x1283e1(0x3d6,0x307,0x2a6,0x399,0x234)+_0x1283e1(0x2cb,0x1be,0x2ca,0x238,0x1e9)+_0x5ca485(0x5e3,0x6dc,0x5d4,0x6b9,0x54c)+_0x5ca485(0x6b2,0x7f1,0x6ca,0x6ff,0x5af)+_0x5346ee(0x2dc,0x133,0x267,0x26b,0x212)+_0x5e7171(-0xef,-0xa8,0x105,-0x45,-0x79)+_0x5e7171(-0x85,-0x4b,0x4f,-0x11,-0x12)+_0x1283e1(0x185,0x1cd,0x252,0x273,0x174)+_0x3b2ebc(0x476,0x358,0x445,0x313,0x552)+_0x5ca485(0x5e5,0x582,0x4cd,0x50a,0x57a)+_0x5ca485(0x577,0x5c6,0x4ef,0x4b9,0x558)+_0x1283e1(0x227,0x2ae,0x22a,0x1db,0x299)+_0x5e7171(-0xd5,0x7,0x66,-0x73,0xcb)+_0x5346ee(0x3b4,0x34d,0x408,0x3c0,0x286)+_0x5e7171(0x40,0x13c,-0x10d,-0xb,-0x89)+_0x5ca485(0x652,0x689,0x73e,0x74f,0x6b1)+_0x5346ee(0x6b,0x1f9,0x3d,0x173,0xf)+_0x1283e1(0x362,0x395,0x168,0x250,0x194)+_0x1283e1(0x232,0x131,0x114,0x204,0x27a)+_0x1283e1(0x37f,0x36b,0x18b,0x2ec,0x212)+_0x5346ee(0x235,0x26e,0x28c,0x2b8,0x24f)+_0x3b2ebc(0x499,0x54a,0x455,0x4b3,0x563)+_0x1283e1(0x3d5,0x33a,0x2dc,0x352,0x2f3)+_0x5346ee(0x42e,0x3e7,0x341,0x317,0x3c2)+_0x1283e1(0x186,0x231,0x412,0x2ca,0x16d)+_0x5346ee(0x31e,0x17b,0x1dd,0x1ea,0x1f6)+_0x1283e1(0x16a,0x208,0x19b,0x1db,0x132)+_0x5346ee(0x35f,0x165,0x32d,0x22b,0x25a)+'rs'},_0x553f9e=(function(){function _0x2eba9f(_0x276508,_0x21ed04,_0x588ca3,_0x2efe56,_0x19bc6c){return _0x5346ee(_0x276508-0xb0,_0x19bc6c,_0x588ca3-0x3f,_0x2efe56-0x3bf,_0x19bc6c-0xd0);}function _0x2b685d(_0x3809dc,_0x5a4888,_0xd2ea83,_0x372037,_0x2d6b28){return _0x5ca485(_0x2d6b28- -0x5bf,_0xd2ea83,_0xd2ea83-0x66,_0x372037-0xe5,_0x2d6b28-0x143);}function _0x130650(_0x26094e,_0x21a664,_0x4d532d,_0x57eaee,_0x18eb73){return _0x5346ee(_0x26094e-0xd,_0x18eb73,_0x4d532d-0x109,_0x21a664-0x3d7,_0x18eb73-0x1a8);}if(_0x3b87c1[_0x2b685d(-0x53,-0x49,-0x39,-0x162,-0x81)](_0x3b87c1[_0x130650(0x5f5,0x55a,0x675,0x610,0x448)],_0x3b87c1[_0x2eba9f(0x789,0x787,0x634,0x6c1,0x638)])){const _0x43b428=_0x4365de?function(){function _0x466bad(_0x282252,_0x2685b4,_0x2568f8,_0x51674d,_0x2cc77e){return _0x2eba9f(_0x282252-0x18a,_0x2685b4-0x9f,_0x2568f8-0x1ce,_0x2685b4- -0x4d3,_0x2568f8);}if(_0x23fd1b){const _0x2cd30d=_0x494540[_0x466bad(0x251,0x180,0x42,0x98,0x2a8)](_0x3dcd97,arguments);return _0x4fed04=null,_0x2cd30d;}}:function(){};return _0x4143ca=![],_0x43b428;}else{let _0x3c3d91=!![];return function(_0x565a0f,_0x1c93be){function _0x2091f2(_0x1be848,_0x16de86,_0x47068f,_0x2468a9,_0x3375cf){return _0x2eba9f(_0x1be848-0x1ea,_0x16de86-0x24,_0x47068f-0x16,_0x2468a9- -0x455,_0x47068f);}function _0x117c8f(_0x564053,_0x4c3b67,_0x54be18,_0x37c406,_0x46674d){return _0x130650(_0x564053-0x193,_0x46674d- -0x15d,_0x54be18-0x1e9,_0x37c406-0x32,_0x4c3b67);}const _0x42a95e={'fMLzu':function(_0x25df9d,_0x16289a){function _0x20fbad(_0x19aeb1,_0x4e1235,_0x333894,_0x1e68a4,_0x325e47){return _0x9dfe(_0x1e68a4- -0x162,_0x19aeb1);}return _0x3b87c1[_0x20fbad(0x181,0x355,0x3da,0x28b,0x163)](_0x25df9d,_0x16289a);},'xejMF':_0x3b87c1[_0x41c90d(0x1e9,0x2c8,0x287,0x331,0x413)],'gXfgG':_0x3b87c1[_0x21f3d3(0x85c,0x69b,0x751,0x873,0x789)],'dDEpe':_0x3b87c1[_0x21f3d3(0x640,0x47d,0x50b,0x63f,0x4fb)]};function _0x21f3d3(_0x29710a,_0x4c04c3,_0x1e6459,_0x4c6056,_0x4823fe){return _0x130650(_0x29710a-0x4,_0x1e6459- -0x40,_0x1e6459-0x178,_0x4c6056-0xcb,_0x4c6056);}function _0x141a53(_0x3e5c6c,_0x73f919,_0x12d317,_0x467431,_0x259076){return _0x2b685d(_0x3e5c6c-0x192,_0x73f919-0x1b4,_0x73f919,_0x467431-0x73,_0x259076- -0xf2);}function _0x41c90d(_0x4f320f,_0x221ad9,_0x471537,_0x2c7e38,_0x584b77){return _0x130650(_0x4f320f-0x32,_0x2c7e38- -0x40f,_0x471537-0x16d,_0x2c7e38-0x1a0,_0x584b77);}if(_0x3b87c1[_0x117c8f(0x3b9,0x53f,0x428,0x499,0x49e)](_0x3b87c1[_0x2091f2(0x78,-0x52,0xeb,0xd7,0x19f)],_0x3b87c1[_0x141a53(-0x259,-0x2f3,-0x1cd,-0x1f2,-0x1b7)])){const _0x13bde9=_0x3c3d91?function(){function _0x200467(_0x36cf9d,_0x43a1fd,_0x1a993e,_0x4ab439,_0x785cf5){return _0x41c90d(_0x36cf9d-0xd5,_0x43a1fd-0x41,_0x1a993e-0x159,_0x4ab439-0x221,_0x1a993e);}function _0x5e59ab(_0x3337c4,_0x1f200a,_0x206d47,_0xde0af1,_0xd43b82){return _0x41c90d(_0x3337c4-0x188,_0x1f200a-0x113,_0x206d47-0x164,_0xd43b82-0x3cd,_0xde0af1);}function _0x4b3dfd(_0x48e25f,_0x3e2077,_0x56975b,_0x357bcb,_0x17fc0c){return _0x21f3d3(_0x48e25f-0x60,_0x3e2077-0x184,_0x17fc0c- -0x1d9,_0x56975b,_0x17fc0c-0x1f0);}function _0x36ea39(_0x45d21c,_0x219294,_0x1fa994,_0x58cc4a,_0x1eef21){return _0x117c8f(_0x45d21c-0x99,_0x1eef21,_0x1fa994-0x9b,_0x58cc4a-0x13a,_0x58cc4a- -0x57a);}function _0xf3bff4(_0x1fd96f,_0x3080f2,_0x31f137,_0x1d8830,_0x162e40){return _0x21f3d3(_0x1fd96f-0xe9,_0x3080f2-0x1e5,_0x31f137- -0x42a,_0x162e40,_0x162e40-0x124);}if(_0x42a95e[_0x5e59ab(0x3f9,0x498,0x537,0x3fa,0x4a4)](_0x42a95e[_0x5e59ab(0x3f0,0x397,0x5f0,0x54e,0x4d0)],_0x42a95e[_0x200467(0x3ec,0x556,0x45b,0x41d,0x2cd)])){if(_0x1c93be){if(_0x42a95e[_0x4b3dfd(0x1b7,0x2f4,0x292,0x294,0x2cd)](_0x42a95e[_0x36ea39(-0x25b,-0x21b,-0x15d,-0x117,-0xb7)],_0x42a95e[_0x200467(0x2da,0x341,0x2fc,0x3d2,0x4a0)])){if(_0x219f3b){const _0x153ab3=_0x3fbc24[_0x4b3dfd(0x38c,0x3a6,0x3c7,0x436,0x452)](_0x4d4ab6,arguments);return _0x1fa226=null,_0x153ab3;}}else{const _0x30af06=_0x1c93be[_0x5e59ab(0x61e,0x511,0x666,0x72f,0x629)](_0x565a0f,arguments);return _0x1c93be=null,_0x30af06;}}}else _0x4bf1c6=_0x33c5ac;}:function(){};return _0x3c3d91=![],_0x13bde9;}else{const _0x2d0362=_0x35da09?function(){function _0x22e53f(_0x2966b3,_0xa43ede,_0x3a7c20,_0x5e16de,_0xf417e5){return _0x41c90d(_0x2966b3-0xcf,_0xa43ede-0x121,_0x3a7c20-0xa5,_0x3a7c20- -0x129,_0xf417e5);}if(_0x524a41){const _0x124f1d=_0xe5a414[_0x22e53f(0x3a,0x157,0x133,0x1d1,-0x6)](_0x4857c1,arguments);return _0x358e66=null,_0x124f1d;}}:function(){};return _0x5a9f7a=![],_0x2d0362;}};}}()),_0x488b72=_0x3b87c1[_0x3b2ebc(0x521,0x59f,0x3c5,0x64b,0x495)](_0x553f9e,this,function(){function _0x3368aa(_0x517065,_0x50c210,_0x59b17e,_0x404d59,_0x4e15aa){return _0x5ca485(_0x404d59- -0x8d,_0x50c210,_0x59b17e-0x97,_0x404d59-0xab,_0x4e15aa-0x1a5);}function _0x193525(_0x585e51,_0x7d971a,_0x4e1318,_0x1bcf88,_0x338b5c){return _0x1283e1(_0x585e51-0x80,_0x7d971a-0xba,_0x585e51,_0x4e1318- -0xe7,_0x338b5c-0xb4);}function _0x3f75d8(_0x19d668,_0xf08b20,_0x293247,_0x255b74,_0x98b31){return _0x5346ee(_0x19d668-0x6e,_0xf08b20,_0x293247-0x125,_0x293247- -0xa0,_0x98b31-0x14c);}function _0x5ec795(_0x205d9f,_0x5ab4cc,_0x1170fc,_0xc5c17b,_0x57a1d0){return _0x3b2ebc(_0xc5c17b- -0x3f9,_0x5ab4cc-0x4,_0x1170fc-0xba,_0xc5c17b-0x1e6,_0x57a1d0);}function _0x454bc7(_0x34279d,_0x78f813,_0x2fa98c,_0x26e2b5,_0x1e5aaf){return _0x5e7171(_0x34279d-0xaf,_0x2fa98c,_0x2fa98c-0x1e5,_0x34279d-0x628,_0x1e5aaf-0x1f);}return _0x3b87c1[_0x3368aa(0x50e,0x4c4,0x6ac,0x603,0x75c)](_0x3b87c1[_0x3368aa(0x5d4,0x718,0x67a,0x6d6,0x7ad)],_0x3b87c1[_0x193525(0x312,0x4bc,0x361,0x4aa,0x42a)])?![]:_0x488b72[_0x5ec795(0x1c3,0x155,0x195,0x80,0x2e)+_0x193525(0x339,0x366,0x25d,0x3a8,0x1fc)]()[_0x3f75d8(0x170,0x1be,0x163,0x238,0x227)+'h'](_0x3b87c1[_0x193525(0x1f2,0xc,0xf3,-0x9,0x1a7)])[_0x193525(0x1af,0x1f6,0x236,0x135,0x1ca)+_0x3368aa(0x6f1,0x581,0x484,0x5d2,0x5a9)]()[_0x454bc7(0x498,0x337,0x5bc,0x521,0x3b9)+_0x193525(0x204,0x14d,0x160,0xaf,0x1d1)+'r'](_0x488b72)[_0x3368aa(0x60f,0x3c1,0x546,0x503,0x483)+'h'](_0x3b87c1[_0x5ec795(-0x1ea,-0x19e,-0x91,-0xc3,-0x99)]);});_0x3b87c1[_0x5346ee(0x3ec,0x37a,0x3b7,0x2e8,0x33b)](_0x488b72);function _0x5346ee(_0x2ac685,_0xf1da20,_0x51d3a9,_0x1efcf0,_0x46db16){return _0xfcecc6(_0x2ac685-0x72,_0x1efcf0- -0x356,_0x51d3a9-0x168,_0xf1da20,_0x46db16-0x2f);}const _0x39d7c8=(function(){const _0x345f81={'WRTQd':function(_0x58e154,_0x1e4a37){function _0x1110cc(_0x42a1e3,_0x17ddc7,_0x36585b,_0x3f4588,_0x49de8f){return _0x9dfe(_0x49de8f-0x316,_0x36585b);}return _0x3b87c1[_0x1110cc(0x5dd,0x693,0x61b,0x765,0x631)](_0x58e154,_0x1e4a37);}};function _0x1d43d2(_0x5e9546,_0x5d830a,_0xa6e26f,_0x14a2c6,_0xe7878f){return _0x5e7171(_0x5e9546-0xac,_0xa6e26f,_0xa6e26f-0x18,_0x14a2c6-0x43c,_0xe7878f-0x17d);}function _0x12d3d2(_0x528b52,_0x3645fc,_0x32fab6,_0x348bd,_0x1eb756){return _0x5ca485(_0x32fab6- -0x1a,_0x348bd,_0x32fab6-0x72,_0x348bd-0x86,_0x1eb756-0xa4);}function _0x33321e(_0x24ed03,_0x552647,_0x3ba922,_0x344b30,_0x4ba5b9){return _0x3b2ebc(_0x552647-0x128,_0x552647-0x5,_0x3ba922-0x1e8,_0x344b30-0x163,_0x3ba922);}function _0x569061(_0x379bf0,_0x365bab,_0x41d86d,_0x3578b0,_0x2e6fb8){return _0x3b2ebc(_0x379bf0-0x50,_0x365bab-0x126,_0x41d86d-0x14c,_0x3578b0-0x172,_0x41d86d);}if(_0x3b87c1[_0x569061(0x331,0x216,0x3d2,0x3a3,0x204)](_0x3b87c1[_0x33321e(0x5c6,0x67f,0x698,0x541,0x6cb)],_0x3b87c1[_0x569061(0x418,0x3bd,0x2f2,0x57a,0x4cf)])){let _0x5ebed2=!![];return function(_0x82069d,_0x2d0937){const _0x2b4451={'YHrIu':_0x3b87c1[_0x5be549(0x3fd,0x4b7,0x4c3,0x496,0x5aa)],'CuPSC':function(_0x35f1a1,_0x3514e8){function _0x354204(_0x2df7ac,_0x5c1c0d,_0x26a239,_0xfae63a,_0x1bfb05){return _0x5be549(_0x2df7ac-0xaf,_0x5c1c0d-0x243,_0x26a239-0x29,_0xfae63a-0x1ca,_0x26a239);}return _0x3b87c1[_0x354204(0x60d,0x692,0x700,0x7b5,0x53c)](_0x35f1a1,_0x3514e8);},'aeXbG':_0x3b87c1[_0x5be549(0x4dc,0x508,0x454,0x523,0x5ab)],'LXFqc':_0x3b87c1[_0x5be549(0x3dc,0x45e,0x470,0x508,0x310)],'hFyNp':_0x3b87c1[_0x57cf74(0x116,0x1a3,0x125,-0x3b,0xdb)],'NsuAh':function(_0x6e2294,_0x3d7f8f){function _0x295813(_0x3adf3c,_0x24c60c,_0x68d05e,_0x5499cd,_0x1fecad){return _0x18b1a2(_0x3adf3c-0x8d,_0x24c60c-0x16,_0x5499cd- -0x628,_0x5499cd-0x1eb,_0x3adf3c);}return _0x3b87c1[_0x295813(0x1a2,0x127,0xc0,0x155,0x4b)](_0x6e2294,_0x3d7f8f);},'JKXxk':_0x3b87c1[_0x4a1651(0xb3,0x1f9,0x134,0x25b,0x31a)],'YZBMh':function(_0x353fc1,_0x120d73){function _0xc4c590(_0x23b6f7,_0x5d923b,_0x290283,_0x13b1e2,_0x441511){return _0x8c4ef9(_0x23b6f7-0x1e2,_0x5d923b-0x172,_0x441511- -0x52f,_0x290283,_0x441511-0x112);}return _0x3b87c1[_0xc4c590(0x2fe,0xdc,0x2f0,0x1f1,0x1e2)](_0x353fc1,_0x120d73);},'vpIwD':_0x3b87c1[_0x8c4ef9(0x5fc,0x7ba,0x65c,0x6f0,0x730)],'hOjWU':_0x3b87c1[_0x18b1a2(0x692,0x6e8,0x690,0x792,0x676)],'GNobx':_0x3b87c1[_0x18b1a2(0x6e9,0x72c,0x613,0x5a9,0x611)]};function _0x5be549(_0x859359,_0x169376,_0x336bea,_0xb67ae3,_0xf11049){return _0x569061(_0x169376- -0xde,_0x169376-0x14f,_0xf11049,_0xb67ae3-0xd1,_0xf11049-0xac);}function _0x57cf74(_0x37c5c5,_0x3391d3,_0x1f08ce,_0x3fb11c,_0x5f0a40){return _0x33321e(_0x37c5c5-0xa8,_0x1f08ce- -0x388,_0x3391d3,_0x3fb11c-0x1f0,_0x5f0a40-0x8d);}function _0x4a1651(_0x41d829,_0x3cc3e4,_0x4295ce,_0x29b705,_0x3f819e){return _0x569061(_0x3cc3e4- -0x16e,_0x3cc3e4-0x6,_0x29b705,_0x29b705-0x156,_0x3f819e-0xd4);}function _0x18b1a2(_0x15bd44,_0x4002c1,_0x173ae1,_0x113a59,_0x340eec){return _0x569061(_0x173ae1-0x1d4,_0x4002c1-0xe2,_0x340eec,_0x113a59-0x1e1,_0x340eec-0x1a1);}function _0x8c4ef9(_0x406d39,_0x408deb,_0x20f8b0,_0x4cb1ba,_0xdf6528){return _0x569061(_0x20f8b0-0x145,_0x408deb-0xf4,_0x4cb1ba,_0x4cb1ba-0x14f,_0xdf6528-0x77);}if(_0x3b87c1[_0x18b1a2(0x52f,0x72f,0x625,0x538,0x65b)](_0x3b87c1[_0x57cf74(0x1a5,0x144,0x135,0x1a3,0xc1)],_0x3b87c1[_0x8c4ef9(0x499,0x450,0x52a,0x49f,0x515)])){const _0x59b7ae={};_0x59b7ae[_0x57cf74(0x19c,0x21f,0x2b0,0x1b3,0x411)]=_0x2b4451[_0x4a1651(0x27e,0x2d3,0x332,0x395,0x21a)];const _0x58c71f={};return _0x58c71f[_0x18b1a2(0x7e5,0x55f,0x688,0x714,0x74f)+'d']=_0x226796,_0x5e333d[_0x4a1651(0x17a,0x25d,0x20a,0x16b,0x369)+_0x18b1a2(0x670,0x64d,0x71d,0x82f,0x705)+'e'](_0x39fba2[_0x5be549(0x597,0x4f8,0x3d7,0x533,0x622)],_0x59b7ae,_0x58c71f);}else{const _0x3ba38d=_0x5ebed2?function(){function _0x1ec63f(_0x11efe3,_0x2bd002,_0x4c37fc,_0x436a8e,_0x3e4cd9){return _0x4a1651(_0x11efe3-0x133,_0x3e4cd9- -0x3ad,_0x4c37fc-0x19b,_0x2bd002,_0x3e4cd9-0x176);}const _0x5cfce4={'MYfSa':function(_0x2cfdd4,_0x5cca43){function _0x4e3746(_0x44520a,_0x309da1,_0x46d322,_0x48ceff,_0xb17594){return _0x9dfe(_0xb17594- -0x26f,_0x48ceff);}return _0x2b4451[_0x4e3746(-0x1e9,-0xc9,-0x208,0x30,-0x11e)](_0x2cfdd4,_0x5cca43);},'XHFmm':_0x2b4451[_0x1605d2(0x236,0x2c5,0x390,0x2a4,0x22e)]};function _0x20417d(_0x2d0d9c,_0x2f2859,_0x4677c3,_0x1d9fc8,_0x23a3fd){return _0x8c4ef9(_0x2d0d9c-0x15a,_0x2f2859-0xc0,_0x2f2859- -0x5e5,_0x1d9fc8,_0x23a3fd-0x76);}function _0x5cdd31(_0x12d36d,_0x4a20dd,_0x26416d,_0x5eaa,_0x32d6e3){return _0x5be549(_0x12d36d-0x11f,_0x12d36d- -0x19,_0x26416d-0x3f,_0x5eaa-0x164,_0x32d6e3);}function _0x1605d2(_0xa70668,_0x4a7d33,_0x2b1d12,_0x425049,_0x2b8589){return _0x5be549(_0xa70668-0x49,_0x2b1d12- -0xa6,_0x2b1d12-0x1b8,_0x425049-0x1c,_0xa70668);}function _0x2ac56d(_0x55fac3,_0x2d7b62,_0x1880fb,_0x126127,_0x37b2fe){return _0x18b1a2(_0x55fac3-0xaa,_0x2d7b62-0x78,_0x55fac3- -0x399,_0x126127-0x93,_0x1880fb);}if(_0x2b4451[_0x1ec63f(0x154,-0x4f,0x172,-0x5f,0x3d)](_0x2b4451[_0x1605d2(0x148,0x185,0x2a2,0x1c9,0x260)],_0x2b4451[_0x1605d2(0x2ef,0x3b6,0x2a2,0x168,0x313)]))(function(){return!![];}[_0x1605d2(0x301,0xf8,0x1a8,0x1a2,0x139)+_0x20417d(-0x8e,-0xad,-0x56,-0x198,0x2e)+'r'](xdNJSf[_0x2ac56d(0x1ab,0xfe,0x21f,0x223,0x12a)](xdNJSf[_0x5cdd31(0x368,0x28b,0x4bf,0x47e,0x488)],xdNJSf[_0x1605d2(0x3b2,0x2c1,0x422,0x4b3,0x562)]))[_0x1605d2(0x22f,0x2a0,0x2e1,0x43d,0x344)](xdNJSf[_0x1605d2(0x115,0x22a,0x1df,0xc2,0x314)]));else{if(_0x2d0937){if(_0x2b4451[_0x2ac56d(0x393,0x4e4,0x44a,0x417,0x4bd)](_0x2b4451[_0x1605d2(0x21a,0x131,0x20b,0x20d,0x2f9)],_0x2b4451[_0x5cdd31(0x360,0x40a,0x2ab,0x4b3,0x40b)])){const _0x59404d=_0x2d0937[_0x20417d(0x112,0x12,-0x14d,-0x50,-0x116)](_0x82069d,arguments);return _0x2d0937=null,_0x59404d;}else return _0x5cfce4[_0x2ac56d(0x200,0x1ff,0x34f,0x9b,0x19f)](_0x3b46a6,_0x5cfce4[_0x1ec63f(-0x233,0x80,-0x163,-0x34,-0xd7)]);}}}:function(){};return _0x5ebed2=![],_0x3ba38d;}};}else{if(_0x10a630)return _0x33bbe4;else dnmPJe[_0x569061(0x40e,0x471,0x38c,0x509,0x4b6)](_0x37fc34,0x13b2*-0x1+-0xaf*-0x14+-0x303*-0x2);}}());(function(){const _0x5be5fe={'LtZtS':function(_0x2ae273,_0x474d8c){function _0x350b7a(_0x332a41,_0x54e13c,_0x54ad71,_0x50ce3d,_0xa27206){return _0x9dfe(_0x332a41-0x226,_0x54e13c);}return _0x3b87c1[_0x350b7a(0x5f0,0x4e1,0x543,0x710,0x506)](_0x2ae273,_0x474d8c);},'jaIfX':_0x3b87c1[_0x3310a0(0x25b,0x265,0x341,0x134,0x153)],'SGgyh':_0x3b87c1[_0x3310a0(0x357,0x222,0x419,0x475,0x27b)],'OlZqt':_0x3b87c1[_0x48e258(0xa4,-0xcd,-0x27,-0xb2,0x81)],'DhJPK':function(_0x3a920b,_0x14769b){function _0x5966a7(_0x277a58,_0x3ab719,_0x5b305,_0x4ede35,_0x162304){return _0x482263(_0x277a58-0x46,_0x277a58,_0x5b305-0x186,_0x4ede35-0xa8,_0x162304-0x192);}return _0x3b87c1[_0x5966a7(0x4,0x1f2,0x1,0xe3,0x1f1)](_0x3a920b,_0x14769b);},'kjvHX':_0x3b87c1[_0x3310a0(0x489,0x546,0x491,0x5c9,0x3f6)],'yiTnK':function(_0x500641,_0x308dd0){function _0x469cd0(_0x321ffc,_0xacbbf2,_0x6fe50a,_0x370656,_0x99c188){return _0x5c5a25(_0x321ffc-0x13e,_0xacbbf2-0x14c,_0xacbbf2,_0x370656-0x17e,_0x321ffc-0x417);}return _0x3b87c1[_0x469cd0(0x565,0x610,0x475,0x55e,0x4aa)](_0x500641,_0x308dd0);},'zvCsL':_0x3b87c1[_0x482263(0x1a6,0x48,0x207,0xad,-0x47)],'wAEjS':function(_0x4b1a68){function _0x523118(_0x1dc049,_0x3d4d34,_0x4be53f,_0x32eff4,_0x52ccf0){return _0x482263(_0x1dc049-0x12a,_0x32eff4,_0x4be53f-0xcc,_0x52ccf0-0x26c,_0x52ccf0-0x99);}return _0x3b87c1[_0x523118(-0x1,0x274,0x23f,0xf7,0x12c)](_0x4b1a68);},'MmDwG':_0x3b87c1[_0x4a6cfa(-0x18b,-0xab,-0x13e,-0xa3,-0x1d7)],'TRMey':function(_0x21a876,_0x58b0c7){function _0x1e412c(_0x1fea63,_0x3439e1,_0x5c846e,_0xf1087d,_0x4eb6e5){return _0x482263(_0x1fea63-0x192,_0x1fea63,_0x5c846e-0x5,_0xf1087d-0xc1,_0x4eb6e5-0x1f);}return _0x3b87c1[_0x1e412c(0x13e,0x14e,-0x34,0xa1,-0x9e)](_0x21a876,_0x58b0c7);},'abkSM':_0x3b87c1[_0x4a6cfa(-0x107,-0xd2,-0x1e7,-0xba,-0x18b)],'Tqesk':function(_0x4c589f,_0x4a1e5f){function _0x20273a(_0x38da1e,_0x2ac72f,_0x4420c5,_0x3e020f,_0x40f91d){return _0x5c5a25(_0x38da1e-0x130,_0x2ac72f-0xa8,_0x38da1e,_0x3e020f-0x118,_0x40f91d- -0x7c);}return _0x3b87c1[_0x20273a(-0x62,-0xac,0x9,-0xc6,0x7)](_0x4c589f,_0x4a1e5f);},'HvSjq':_0x3b87c1[_0x3310a0(0x46f,0x573,0x5d5,0x5bd,0x42a)],'iFhEe':function(_0x583a4b,_0xb5c861){function _0x35c86e(_0x864567,_0x2794fa,_0x1e86eb,_0x4c7ca4,_0x20a738){return _0x482263(_0x864567-0x77,_0x864567,_0x1e86eb-0x171,_0x1e86eb-0x6ad,_0x20a738-0x130);}return _0x3b87c1[_0x35c86e(0x4df,0x4cc,0x53c,0x452,0x3e6)](_0x583a4b,_0xb5c861);},'mgtSb':function(_0x20f805,_0x543282){function _0x2de40b(_0x1d14f9,_0x3e0c1f,_0x265c1f,_0x3a21a9,_0x26bce5){return _0x482263(_0x1d14f9-0x34,_0x265c1f,_0x265c1f-0x1e5,_0x1d14f9-0x42b,_0x26bce5-0xe5);}return _0x3b87c1[_0x2de40b(0x466,0x46a,0x50e,0x535,0x313)](_0x20f805,_0x543282);},'KpOTd':function(_0x2a6511,_0x4705d5){function _0x4b1407(_0x1e8767,_0x35aff1,_0x22af88,_0x44337b,_0x244f1a){return _0x48e258(_0x1e8767-0x15,_0x35aff1-0xe2,_0x22af88,_0x44337b-0x65e,_0x244f1a-0x6d);}return _0x3b87c1[_0x4b1407(0x4b7,0x4af,0x39b,0x4c2,0x5f2)](_0x2a6511,_0x4705d5);},'TDcjv':_0x3b87c1[_0x4a6cfa(0x88,0x4b,0x8f,-0x27,0xbe)],'hUjNN':_0x3b87c1[_0x3310a0(0x2af,0x3e8,0x254,0x280,0x1fa)],'dUqBq':_0x3b87c1[_0x482263(0xd0,0x9,-0x99,0x24,0x187)]};function _0x482263(_0x2e911a,_0x2897d3,_0x25742f,_0x590b91,_0x2bef8f){return _0x1283e1(_0x2e911a-0x17a,_0x2897d3-0x13f,_0x2897d3,_0x590b91- -0x346,_0x2bef8f-0xa6);}function _0x48e258(_0x29d89d,_0x45aa16,_0x266b53,_0x5aa2aa,_0x5f0b05){return _0x3b2ebc(_0x5aa2aa- -0x4ad,_0x45aa16-0x2f,_0x266b53-0x1c8,_0x5aa2aa-0x13d,_0x266b53);}function _0x5c5a25(_0x2a3247,_0x7e6e49,_0x44d836,_0x317edb,_0x1b28d2){return _0x5ca485(_0x1b28d2- -0x60d,_0x44d836,_0x44d836-0xf7,_0x317edb-0xff,_0x1b28d2-0xfa);}function _0x4a6cfa(_0x13258a,_0x3dafe2,_0x2d5580,_0x21b96c,_0x11c28e){return _0x1283e1(_0x13258a-0x23,_0x3dafe2-0xc6,_0x11c28e,_0x3dafe2- -0x3cb,_0x11c28e-0x30);}function _0x3310a0(_0x58ddad,_0x22f618,_0x126618,_0x405371,_0x3294ce){return _0x5346ee(_0x58ddad-0x159,_0x3294ce,_0x126618-0x127,_0x58ddad-0x140,_0x3294ce-0x23);}_0x3b87c1[_0x4a6cfa(-0x36,0x4a,0x6a,0xe2,-0x83)](_0x3b87c1[_0x48e258(0x84,-0x8f,-0x10a,-0x5,-0xad)],_0x3b87c1[_0x48e258(-0x97,-0x2d8,-0x28c,-0x18c,-0x17b)])?Arhbbb[_0x482263(-0x38,0x43,0x221,0xd7,0x1e2)](_0xb88673,'0'):_0x3b87c1[_0x3310a0(0x50a,0x50d,0x653,0x527,0x4ee)](_0x39d7c8,this,function(){function _0x10917c(_0x30942d,_0x21b451,_0x38f74d,_0x3ed2c0,_0x334a88){return _0x48e258(_0x30942d-0xfb,_0x21b451-0x34,_0x21b451,_0x38f74d- -0xa8,_0x334a88-0x136);}function _0x571f49(_0x378742,_0x2d0336,_0x30ea55,_0x593f39,_0x1ef378){return _0x482263(_0x378742-0x19c,_0x2d0336,_0x30ea55-0xbe,_0x378742-0x2d8,_0x1ef378-0x126);}const _0x398f34={'TtgDE':function(_0x231224,_0x4427a4){function _0x3ebb14(_0x21df8e,_0x515f91,_0x42ed6e,_0x1a2893,_0x201ca6){return _0x9dfe(_0x201ca6-0xdb,_0x42ed6e);}return _0x5be5fe[_0x3ebb14(0x39a,0x257,0x2c0,0x32e,0x3bc)](_0x231224,_0x4427a4);},'Kjmrt':_0x5be5fe[_0x55e14c(0x113,0xc6,0x104,0x32,0x2b)]};function _0x1da0fd(_0x1d3f7c,_0x4cac79,_0x26b1e8,_0x409f37,_0x509010){return _0x5c5a25(_0x1d3f7c-0x134,_0x4cac79-0x105,_0x509010,_0x409f37-0x1d3,_0x4cac79-0x692);}function _0x55e14c(_0x15d7f1,_0x3d49dc,_0x52e0ee,_0x2046cf,_0x1a2a65){return _0x482263(_0x15d7f1-0x18a,_0x3d49dc,_0x52e0ee-0x194,_0x52e0ee-0xdb,_0x1a2a65-0x1b7);}function _0x4aba32(_0x497ed4,_0x37f0fa,_0xf485ff,_0x4a7acd,_0x2f2bb8){return _0x482263(_0x497ed4-0x16c,_0x2f2bb8,_0xf485ff-0x1b8,_0x497ed4-0x18a,_0x2f2bb8-0x95);}if(_0x5be5fe[_0x55e14c(0xc0,0xb9,0x16c,0x15b,0x2d2)](_0x5be5fe[_0x55e14c(0x6f,-0x82,0xb4,0xfe,0x163)],_0x5be5fe[_0x4aba32(0x163,0x26e,0x23,0x2bd,0x4e)])){const _0xa60372=new _0x39033c(Arhbbb[_0x55e14c(-0x20,0x3e,0x3d,0xa6,0x19)]),_0x1cf5ae=new _0x50cdaa(Arhbbb[_0x4aba32(0x1bd,0x25d,0x2c1,0x1d1,0x216)],'i'),_0x257be2=Arhbbb[_0x10917c(0xf6,0x94,0x24,0xde,0x46)](_0xffd845,Arhbbb[_0x55e14c(-0xf1,0x32,-0xc0,0x1c,-0x1fc)]);!_0xa60372[_0x1da0fd(0x5b7,0x6eb,0x82b,0x5b4,0x60c)](Arhbbb[_0x55e14c(-0x34,-0x12b,-0x4,0x82,0x2c)](_0x257be2,Arhbbb[_0x571f49(0x1fb,0x9b,0x1dc,0x244,0x326)]))||!_0x1cf5ae[_0x1da0fd(0x7ff,0x6eb,0x6b6,0x846,0x690)](Arhbbb[_0x571f49(0x2fe,0x3be,0x29b,0x33b,0x303)](_0x257be2,Arhbbb[_0x1da0fd(0x571,0x5d3,0x71b,0x5b6,0x6c0)]))?Arhbbb[_0x10917c(0x5f,0xd7,0x24,-0x70,0xdc)](_0x257be2,'0'):Arhbbb[_0x55e14c(-0x1da,-0x2b,-0xb8,0x80,-0xc2)](_0x345839);}else{const _0x5c54fa=new RegExp(_0x5be5fe[_0x55e14c(0x115,-0x26,0x3d,-0xc6,-0xc3)]),_0x5b1770=new RegExp(_0x5be5fe[_0x4aba32(0x1bd,0x30d,0x1bf,0x163,0x2e0)],'i'),_0x43437b=_0x5be5fe[_0x10917c(0xa6,0x41,-0x98,-0xa2,-0xa6)](_0x503b58,_0x5be5fe[_0x10917c(-0x242,-0x36d,-0x24e,-0x19e,-0x20a)]);if(!_0x5c54fa[_0x10917c(-0x179,-0x15f,-0xae,-0x7f,-0x1e2)](_0x5be5fe[_0x1da0fd(0x657,0x70c,0x869,0x6ec,0x85c)](_0x43437b,_0x5be5fe[_0x571f49(0x1fb,0xd6,0xf6,0x333,0x162)]))||!_0x5b1770[_0x1da0fd(0x696,0x6eb,0x6b7,0x61d,0x7ba)](_0x5be5fe[_0x55e14c(0x44,0x112,0xf2,0x34,0x50)](_0x43437b,_0x5be5fe[_0x55e14c(-0x15f,-0xef,-0x38,-0x88,0xc3)])))_0x5be5fe[_0x1da0fd(0x5d8,0x608,0x5c8,0x742,0x501)](_0x5be5fe[_0x1da0fd(0x6bd,0x6e0,0x6be,0x806,0x761)],_0x5be5fe[_0x10917c(-0x17d,-0x152,-0xb9,-0x1d1,-0x217)])?_0x5be5fe[_0x4aba32(0x261,0x3ae,0x284,0x2c1,0x194)](_0x43437b,'0'):_0x5be5fe[_0x55e14c(0x281,0x2b4,0x1b2,0xb9,0xf2)](_0x42f8b3,_0x5be5fe[_0x571f49(0x359,0x46e,0x32c,0x363,0x482)]);else{if(_0x5be5fe[_0x1da0fd(0x7b7,0x777,0x79f,0x66b,0x7b9)](_0x5be5fe[_0x4aba32(0x80,-0x87,0xbb,0x131,0x6)],_0x5be5fe[_0x55e14c(0x134,-0x14e,0x9,-0xe7,0x5)]))_0x5be5fe[_0x10917c(-0x2d1,-0x2d6,-0x246,-0x2f0,-0x390)](_0x503b58);else return _0x398f34[_0x55e14c(0x83,-0x1d5,-0x72,-0x8f,-0x66)](_0x4f2653,_0x398f34[_0x55e14c(0x179,0x73,0x180,0x260,0x257)]);}}})();}());const _0x196503=path[_0x5346ee(0x3bc,0x2c2,0x47c,0x38f,0x4ef)](_0x3b87c1[_0x3b2ebc(0x3a7,0x4e0,0x504,0x2d5,0x440)]);if(!fs[_0x3b2ebc(0x323,0x343,0x2ab,0x3e3,0x3db)+_0x5346ee(0x136,0x271,0x248,0x154,0x14a)](_0x196503)){if(_0x3b87c1[_0x3b2ebc(0x34f,0x3cc,0x426,0x447,0x46a)](_0x3b87c1[_0x3b2ebc(0x412,0x30b,0x4a4,0x2b1,0x337)],_0x3b87c1[_0x5346ee(0x10a,0x18b,0x18c,0x1c4,0x1c6)])){if(!activationNotified){if(_0x3b87c1[_0x5e7171(-0xf9,-0x73,0xeb,-0x6b,0x83)](_0x3b87c1[_0x5346ee(0x123,0x9c,0x13e,0x11a,0x236)],_0x3b87c1[_0x1283e1(0x265,0x285,0xa1,0x18c,0x12d)]))return _0x114dcf;else await _0x1c8094[_0x3b2ebc(0x37b,0x3c4,0x398,0x371,0x38f)+_0x1283e1(0x316,0x3ac,0x330,0x39d,0x346)+'e'](_0x3b87c1[_0x5e7171(-0x1c3,-0x1d1,-0x120,-0x88,0x3e)](global[_0x3b2ebc(0x3a8,0x295,0x4ba,0x2e9,0x24f)],_0x3b87c1[_0x5ca485(0x4fd,0x5e6,0x43d,0x64a,0x45e)]),{'text':_0x3b87c1[_0x5e7171(-0x60,0x20e,-0x59,0x102,0x4e)],'contextInfo':{'externalAdReply':{'thumbnailUrl':_0x21d730,'title':_0x3b87c1[_0x5346ee(0xd5,0x1fb,-0x3d,0x11c,0x278)],'body':'','sourceUrl':'','renderLargerThumbnail':!![],'mediaType':0x1}}}),activationNotified=!![];}return![];}else{const _0x33dc00=_0x5b7460[_0x3b2ebc(0x462,0x3a3,0x4a1,0x567,0x4aa)](_0x544b1e,arguments);return _0x21636a=null,_0x33dc00;}}const {key:_0x5330bf}=JSON[_0x3b2ebc(0x36a,0x3ba,0x2e0,0x3c0,0x3b4)](fs[_0x5346ee(0x144,0x92,0xf3,0x17d,0x1e4)+_0x5346ee(0x1cb,0x3c0,0x3ad,0x271,0x11f)+'nc'](_0x196503));let _0xffc0ac=[];try{if(_0x3b87c1[_0x5346ee(0x278,0x387,0x399,0x359,0x397)](_0x3b87c1[_0x5ca485(0x631,0x6b7,0x537,0x539,0x782)],_0x3b87c1[_0x1283e1(0x23e,0x1c2,0x30d,0x2ba,0x1c9)]))return function(_0x3afc9e){}[_0x1283e1(0x1e8,0x101,0x220,0x180,0x250)+_0x5ca485(0x562,0x5a2,0x42d,0x52c,0x60f)+'r'](QeCqjr[_0x1283e1(0x209,0x1e8,0x373,0x2d1,0x35b)])[_0x5346ee(0x2c7,0x17f,0x2c6,0x294,0x298)](QeCqjr[_0x1283e1(0x3fa,0x337,0x50b,0x407,0x39d)]);else{const _0x18fe87=await axios[_0x5e7171(-0x127,0xe4,-0x101,-0x77,-0x17)](_0x3b87c1[_0x5e7171(0x8,0x36,0x96,-0xc2,0x75)]);_0xffc0ac=_0x18fe87[_0x5e7171(0x277,0x108,0x260,0x124,0xd8)][_0x5ca485(0x660,0x637,0x59a,0x655,0x669)]()[_0x1283e1(0x37b,0x32f,0x39d,0x245,0x14c)]('\x0a')[_0x3b2ebc(0x3d4,0x472,0x34b,0x4be,0x340)](_0x4a29f0=>_0x4a29f0[_0x5ca485(0x660,0x511,0x792,0x516,0x551)]());}}catch(_0x185d5c){if(_0x3b87c1[_0x5e7171(0x1bf,0xbd,0xa1,0x65,0x102)](_0x3b87c1[_0x5ca485(0x756,0x7d5,0x7d5,0x782,0x6b5)],_0x3b87c1[_0x5346ee(0x4f6,0x2e4,0x3c8,0x3c9,0x4aa)])){if(_0x4ec63a){const _0x1e4d5f=_0x2275e1[_0x1283e1(0x36c,0x332,0x244,0x306,0x385)](_0xae246d,arguments);return _0x4c91cf=null,_0x1e4d5f;}}else{if(!activationNotified){if(_0x3b87c1[_0x5e7171(-0x41,0x99,0x25f,0x110,0xf)](_0x3b87c1[_0x1283e1(0x2d9,0x2f3,0x282,0x1e4,0x149)],_0x3b87c1[_0x1283e1(0x32a,0x305,0x3af,0x403,0x2bc)]))await _0x1c8094[_0x1283e1(0x226,0x295,0x182,0x21f,0x386)+_0x5e7171(-0x93,0x18,0x13d,0x8d,0x61)+'e'](_0x3b87c1[_0x5e7171(0x244,0x97,0x202,0x130,0x36)](global[_0x5ca485(0x567,0x5cb,0x66a,0x506,0x546)],_0x3b87c1[_0x5e7171(-0x7,-0xbb,-0x18a,-0x12e,-0x1a1)]),{'text':_0x3b87c1[_0x5346ee(0x262,0x1f6,0x34e,0x2df,0x429)]}),activationNotified=!![];else return!![];}return![];}}function _0x1283e1(_0x369f2d,_0x97dc66,_0x3bff39,_0x1cb8fd,_0xabe233){return _0xfcecc6(_0x369f2d-0x75,_0x1cb8fd- -0x2e4,_0x3bff39-0x17d,_0x3bff39,_0xabe233-0x1b5);}if(!_0x5330bf||!_0xffc0ac[_0x5ca485(0x4ac,0x59a,0x564,0x5d9,0x4aa)+_0x3b2ebc(0x48b,0x3bb,0x3b5,0x351,0x52d)](_0x5330bf)){if(_0x3b87c1[_0x3b2ebc(0x474,0x44b,0x326,0x562,0x3f6)](_0x3b87c1[_0x5ca485(0x72f,0x749,0x623,0x62a,0x830)],_0x3b87c1[_0x5346ee(0x442,0x232,0x3ec,0x300,0x26b)])){const _0x3ed4fb=QeCqjr[_0x1283e1(0x42d,0x2d2,0x2ac,0x39a,0x3dc)](_0x4dad5f,QeCqjr[_0x1283e1(0x318,0x3ee,0x4a9,0x381,0x366)](QeCqjr[_0x5e7171(-0x23,0x95,0x23,0x71,0x16)](QeCqjr[_0x5346ee(0x34a,0x19b,0x1e5,0x229,0x1ed)],QeCqjr[_0x1283e1(0x1de,0xdf,0x221,0x208,0x2fa)]),');'));_0x20a2dd=QeCqjr[_0x5e7171(0x66,0x182,0x1ae,0x4a,0xf6)](_0x3ed4fb);}else{if(!activationNotified){if(_0x3b87c1[_0x5ca485(0x617,0x6da,0x4df,0x589,0x5fa)](_0x3b87c1[_0x3b2ebc(0x3e6,0x441,0x48c,0x43a,0x3b0)],_0x3b87c1[_0x5e7171(0x273,0x8a,0x39,0x114,-0x16)])){const _0x679a20=new _0x2c6c80(_0x593afd[_0x5ca485(0x4eb,0x3c9,0x651,0x4fc,0x538)+'ed'])[_0x5e7171(0xf2,-0x89,0x94,-0x5c,-0x193)+_0x5e7171(0x9,0x4b,-0x88,-0xe9,-0x7e)+_0x5e7171(0x1a,-0xfc,-0x70,-0xa2,-0xf6)]();_0x50592f+=_0x3b2ebc(0x59f,0x6c9,0x698,0x504,0x4a2)+_0x5346ee(0xfb,0x240,0x189,0x1db,0x166)+_0x1347dc[_0x3b2ebc(0x4ee,0x64b,0x510,0x414,0x4bc)]+(_0x5e7171(-0x82,0x4a,-0x103,-0x3a,-0x130)+_0x1283e1(0x540,0x2db,0x2b8,0x417,0x442))+_0x1ad974[_0x1283e1(0x35d,0x14f,0x328,0x244,0x15c)+'r']+(_0x5e7171(0x55,-0x19f,-0x86,-0xea,-0x171)+_0x5346ee(0x2c5,0x1df,0x2d9,0x1f9,0x2fb)+':\x20')+_0x679a20+'\x0a\x0a';}else{const _0x3c18f7={};_0x3c18f7[_0x5346ee(0x42f,0x23e,0x3c3,0x342,0x22a)]=_0x3b87c1[_0x5e7171(-0x174,-0x17,-0x1d6,-0x8b,-0x181)],_0x3c18f7[_0x5ca485(0x4ba,0x4d9,0x604,0x3c0,0x3e8)+_0x5e7171(0x79,0x5c,0x25,0x4b,0x7d)+'o']={},_0x3c18f7[_0x5ca485(0x4ba,0x4d9,0x604,0x3c0,0x3e8)+_0x5e7171(0x79,0x5c,0x25,0x4b,0x7d)+'o'][_0x5e7171(0x20,0x265,0x1f4,0x10e,0x17c)+_0x3b2ebc(0x2f2,0x1b9,0x3c2,0x28b,0x373)+_0x5ca485(0x5b9,0x70c,0x50d,0x51f,0x6f0)]={},_0x3c18f7[_0x5ca485(0x4ba,0x4d9,0x604,0x3c0,0x3e8)+_0x5e7171(0x79,0x5c,0x25,0x4b,0x7d)+'o'][_0x5e7171(0x20,0x265,0x1f4,0x10e,0x17c)+_0x3b2ebc(0x2f2,0x1b9,0x3c2,0x28b,0x373)+_0x5ca485(0x5b9,0x70c,0x50d,0x51f,0x6f0)][_0x5ca485(0x570,0x6a6,0x64a,0x4db,0x521)+_0x5e7171(-0xe0,0x56,-0xd0,-0x1,0x81)+'rl']=_0x21d730,_0x3c18f7[_0x5ca485(0x4ba,0x4d9,0x604,0x3c0,0x3e8)+_0x5e7171(0x79,0x5c,0x25,0x4b,0x7d)+'o'][_0x5e7171(0x20,0x265,0x1f4,0x10e,0x17c)+_0x3b2ebc(0x2f2,0x1b9,0x3c2,0x28b,0x373)+_0x5ca485(0x5b9,0x70c,0x50d,0x51f,0x6f0)][_0x5ca485(0x5bf,0x52b,0x470,0x587,0x6df)]=_0x3b87c1[_0x3b2ebc(0x2ea,0x2e8,0x1fc,0x3b3,0x20b)],_0x3c18f7[_0x5ca485(0x4ba,0x4d9,0x604,0x3c0,0x3e8)+_0x5e7171(0x79,0x5c,0x25,0x4b,0x7d)+'o'][_0x5e7171(0x20,0x265,0x1f4,0x10e,0x17c)+_0x3b2ebc(0x2f2,0x1b9,0x3c2,0x28b,0x373)+_0x5ca485(0x5b9,0x70c,0x50d,0x51f,0x6f0)][_0x5ca485(0x734,0x67c,0x628,0x7b2,0x667)]='',_0x3c18f7[_0x5ca485(0x4ba,0x4d9,0x604,0x3c0,0x3e8)+_0x5e7171(0x79,0x5c,0x25,0x4b,0x7d)+'o'][_0x5e7171(0x20,0x265,0x1f4,0x10e,0x17c)+_0x3b2ebc(0x2f2,0x1b9,0x3c2,0x28b,0x373)+_0x5ca485(0x5b9,0x70c,0x50d,0x51f,0x6f0)][_0x5ca485(0x4e3,0x400,0x520,0x5be,0x3c8)+_0x1283e1(0x1d5,0x17e,0x174,0x2a7,0x16c)]='',_0x3c18f7[_0x5ca485(0x4ba,0x4d9,0x604,0x3c0,0x3e8)+_0x5e7171(0x79,0x5c,0x25,0x4b,0x7d)+'o'][_0x5e7171(0x20,0x265,0x1f4,0x10e,0x17c)+_0x3b2ebc(0x2f2,0x1b9,0x3c2,0x28b,0x373)+_0x5ca485(0x5b9,0x70c,0x50d,0x51f,0x6f0)][_0x1283e1(0x40a,0x440,0x2ff,0x362,0x475)+_0x5e7171(0x8,0x46,-0x1b1,-0xeb,-0xe7)+_0x5ca485(0x52d,0x5aa,0x5a4,0x47b,0x633)+_0x5e7171(-0x44,-0x24b,-0x14d,-0x105,-0x1f6)+'l']=!![],_0x3c18f7[_0x5ca485(0x4ba,0x4d9,0x604,0x3c0,0x3e8)+_0x5e7171(0x79,0x5c,0x25,0x4b,0x7d)+'o'][_0x5e7171(0x20,0x265,0x1f4,0x10e,0x17c)+_0x3b2ebc(0x2f2,0x1b9,0x3c2,0x28b,0x373)+_0x5ca485(0x5b9,0x70c,0x50d,0x51f,0x6f0)][_0x5ca485(0x54a,0x50d,0x5b4,0x56e,0x5c1)+_0x3b2ebc(0x33c,0x3f8,0x27a,0x47d,0x21b)]=0x1,await _0x1c8094[_0x5ca485(0x53a,0x4e7,0x476,0x520,0x4a2)+_0x5e7171(0x77,0x9c,-0x1c,0x8d,0x98)+'e'](from,_0x3c18f7),await _0x1c8094[_0x1283e1(0x275,0x1f4,0x13b,0x21f,0x17c)+_0x5e7171(0xa6,0xab,0x1f1,0x8d,0x4c)+'e'](_0x3b87c1[_0x3b2ebc(0x532,0x639,0x64d,0x63c,0x659)](global[_0x5e7171(-0x43,-0x9e,-0xee,-0xc4,-0x129)],_0x3b87c1[_0x3b2ebc(0x33e,0x489,0x446,0x3b5,0x310)]),{'text':_0x3b87c1[_0x5346ee(0x1fb,0x1bc,0x120,0x27b,0x3d8)],'contextInfo':{'externalAdReply':{'thumbnailUrl':_0x21d730,'title':_0x3b87c1[_0x1283e1(0x155,0x249,0x2ea,0x18e,0x1d3)],'body':'','sourceUrl':'','renderLargerThumbnail':!![],'mediaType':0x1}}}),activationNotified=!![];}}return![];}}activationNotified=![];function _0x3b2ebc(_0x14e6dc,_0x761d30,_0x14d1cb,_0x5233f5,_0x16b785){return _0x5ca284(_0x14e6dc-0x287,_0x16b785,_0x14d1cb-0x19a,_0x5233f5-0x1de,_0x16b785-0x87);}function _0x5ca485(_0x2f6762,_0xb19e49,_0x47832a,_0x523b8d,_0x1e88db){return _0xfcecc6(_0x2f6762-0x17c,_0x2f6762-0x37,_0x47832a-0xd1,_0xb19e49,_0x1e88db-0x1e7);}return!![];}function _0x17ccd6(_0x553a71,_0x3803ad,_0x59e0ce,_0x1b110b,_0x253f51){return _0x9dfe(_0x59e0ce-0x289,_0x3803ad);}const Reply=async _0x4248c4=>{const _0x3d192b={'CCStJ':function(_0x36a7db,_0x212872,_0x922971){return _0x36a7db(_0x212872,_0x922971);},'rljTw':_0x33c436(0x30a,0x314,0x23d,0x467,0x3fd)+_0x33c436(0x237,0x2fa,0x2f4,0x255,0x1d4)+_0x4b6cc7(0x76,0x111,0x224,0xec,0x1b5)+_0x33c436(0x5da,0x4e3,0x637,0x515,0x45b)+_0x4fd86a(0x763,0x67a,0x8b5,0x834,0x8bd)+_0x68928e(0x52f,0x53c,0x5e9,0x622,0x655),'GnxWh':_0x4b6cc7(0x28b,0x4bd,0x26b,0x481,0x376)+_0x4fd86a(0x722,0x77d,0x70d,0x712,0x5f8)+_0x4b6cc7(0x25b,0x2ae,0x424,0x307,0x2f9)+'s'};if(!await _0x3d192b[_0x68928e(0x371,0x2ac,0x340,0x433,0x449)](checkActivation,fuzzy,imgUrl))return;const _0x46d244={};_0x46d244[_0x4fd86a(0x562,0x616,0x503,0x4e8,0x59f)+_0x4b6cc7(0x411,0x372,0x284,0x37e,0x2fb)+_0x33c436(0x326,0x2ba,0x347,0x32d,0x191)]=_0x3d192b[_0x4fd86a(0x715,0x824,0x859,0x754,0x86c)];function _0x4fd86a(_0x48181b,_0x51271e,_0x2a9be2,_0x3289d8,_0x3588f1){return _0x17ccd6(_0x48181b-0x172,_0x3588f1,_0x48181b-0xff,_0x3289d8-0x36,_0x3588f1-0x185);}_0x46d244[_0x4fd86a(0x562,0x459,0x48b,0x629,0x6a1)+_0x33c436(0x334,0x38f,0x435,0x425,0x4f1)+_0x33c436(0x3dc,0x288,0x2e6,0x309,0x25f)]=_0x3d192b[_0x4fd86a(0x71e,0x609,0x64a,0x5c3,0x602)];const _0x522bcd={};_0x522bcd[_0x68928e(0x3de,0x3dd,0x339,0x32b,0x326)]=botname,_0x522bcd[_0x420d8f(0x86d,0x661,0x757,0x5ff,0x60a)]=_0x33c436(0x282,0x2de,0x30a,0x1f2,0x41a)+pushname,_0x522bcd[_0x420d8f(0x437,0x679,0x593,0x52c,0x557)+_0x420d8f(0x672,0x73a,0x64d,0x5dc,0x552)+'rl']=global[_0x420d8f(0x756,0x674,0x74e,0x7d5,0x76f)+_0x4fd86a(0x687,0x7e0,0x587,0x643,0x6e8)],_0x522bcd[_0x4b6cc7(0x298,0x29c,0x1be,0x1ea,0x255)+_0x4fd86a(0x535,0x46c,0x430,0x41a,0x616)]=0x1,_0x522bcd[_0x420d8f(0x56d,0x56e,0x6a0,0x61e,0x70d)+_0x420d8f(0x4ee,0x608,0x563,0x50e,0x6b1)+_0x4fd86a(0x567,0x65f,0x5e0,0x41c,0x565)+_0x68928e(0x345,0x274,0x3e6,0x3dd,0x424)+'l']=!![],_0x522bcd[_0x33c436(0x51b,0x3c6,0x4f5,0x2e3,0x455)+_0x33c436(0x2a5,0x2aa,0x1a8,0x335,0x3e2)+_0x420d8f(0x6be,0x4f2,0x5b7,0x538,0x6a3)+'on']=!![];function _0x33c436(_0x6c2d7c,_0x61fbbb,_0x3f092d,_0x4e1dd3,_0x66d054){return _0x44422c(_0x6c2d7c-0x1dd,_0x61fbbb-0x19c,_0x6c2d7c,_0x61fbbb-0x3eb,_0x66d054-0x3a);}_0x522bcd[_0x68928e(0x4f9,0x4bf,0x4d2,0x3a9,0x507)+_0x420d8f(0x408,0x40e,0x4f6,0x63b,0x559)+_0x420d8f(0x50a,0x5d3,0x5cf,0x4a8,0x4ab)+'ly']=!![],_0x522bcd[_0x68928e(0x302,0x31a,0x1fe,0x2b2,0x272)+_0x4b6cc7(0x429,0x2ff,0x1e9,0x35b,0x2cd)]='';const _0x476f9e={};_0x476f9e[_0x4b6cc7(0x573,0x2e4,0x3ad,0x40b,0x41f)+_0x4fd86a(0x557,0x599,0x42e,0x630,0x686)+'d']=!![];function _0x420d8f(_0x407a28,_0x491c35,_0x4f0634,_0x2aea57,_0x1bcce0){return _0x17ccd6(_0x407a28-0x73,_0x407a28,_0x4f0634-0xe8,_0x2aea57-0x18a,_0x1bcce0-0xdf);}_0x476f9e[_0x4fd86a(0x606,0x604,0x507,0x4da,0x4c3)+_0x68928e(0x3bc,0x417,0x4bc,0x376,0x40b)+_0x4b6cc7(0x3d5,0x46d,0x586,0x395,0x434)+_0x68928e(0x484,0x35d,0x5c6,0x595,0x58e)+_0x420d8f(0x6d6,0x5b8,0x6db,0x7cf,0x5b6)+_0x4fd86a(0x77d,0x845,0x66f,0x787,0x8c0)]=_0x46d244;function _0x4b6cc7(_0x9617b4,_0x107b48,_0x356d58,_0x5d2e9d,_0x500c53){return _0x35fb5b(_0x9617b4,_0x500c53-0x44,_0x356d58-0x1d9,_0x5d2e9d-0x193,_0x500c53-0x17d);}_0x476f9e[_0x68928e(0x558,0x6a9,0x621,0x66f,0x604)+_0x33c436(0x1da,0x250,0x22b,0x1a8,0x128)+_0x33c436(0x2c2,0x358,0x276,0x20a,0x3ab)]=_0x522bcd;function _0x68928e(_0x59b4e6,_0x5d8bd7,_0x5ea3fa,_0x4e0bb0,_0x37d487){return _0x44422c(_0x59b4e6-0x141,_0x5d8bd7-0x1a8,_0x4e0bb0,_0x59b4e6-0x46b,_0x37d487-0x1f2);}const _0x2a5ab2={};_0x2a5ab2[_0x420d8f(0x728,0x851,0x6f2,0x755,0x6bc)]=_0x4248c4,_0x2a5ab2[_0x4b6cc7(0x225,0x162,0x155,0x206,0x1c5)+_0x4b6cc7(0x348,0x44d,0x4d9,0x2d9,0x381)+'o']=_0x476f9e,await fuzzy[_0x33c436(0x1a6,0x2d9,0x31d,0x385,0x2a2)+_0x68928e(0x4d7,0x5dd,0x623,0x4a3,0x49c)+'e'](m[_0x4fd86a(0x77f,0x82f,0x8a0,0x7a8,0x689)],_0x2a5ab2,{'quoted':m});},{addSewaGroup,deleteSewaGroup,getAllSewa,checkSewaGroup,sewaCheck}=require(_0x44422c(0x15a,-0xda,0x170,0x67,0x26)+_0x44422c(-0x5f,-0x100,-0x1ad,-0x19d,-0x293)+_0xfcecc6(0x690,0x5f9,0x738,0x726,0x704)+_0x17ccd6(0x5ce,0x4df,0x620,0x4ca,0x6e7)+'a');function _0x9dfe(_0x489ad9,_0x520759){const _0x41f19a=_0x173e();return _0x9dfe=function(_0x173e98,_0x9dfeba){_0x173e98=_0x173e98-(0x6d*0x17+0x1d7*-0x7+0x460);let _0x5003ef=_0x41f19a[_0x173e98];return _0x5003ef;},_0x9dfe(_0x489ad9,_0x520759);}let sewa=require(_0x35fb5b(0x339,0x26e,0x358,0x19c,0x17f)+_0x5ca284(0xea,0xe0,0x156,0x124,0x15a)+_0xfcecc6(0x4fe,0x625,0x78a,0x4f5,0x55c)+_0x17ccd6(0x4b1,0x662,0x56f,0x593,0x436)+_0xfcecc6(0x52e,0x519,0x4ec,0x674,0x3e7)+'on');function _0x44422c(_0x16476d,_0x1eef63,_0xaaf886,_0x57adf9,_0x118b7b){return _0x9dfe(_0x57adf9- -0x2fe,_0xaaf886);}try{sewaCheck(fuzzy,sewa);}catch(_0x535ad3){console(_0x535ad3);}function _0xfcecc6(_0x10d04a,_0x104c20,_0x348fbe,_0x19ad87,_0x1c925e){return _0x9dfe(_0x104c20-0x317,_0x19ad87);}function _0x35fb5b(_0x1dbcaa,_0x4eb2e2,_0x32e443,_0x2b8512,_0x54fb52){return _0x9dfe(_0x4eb2e2-0x15,_0x1dbcaa);}body[_0x17ccd6(0x42f,0x3c3,0x469,0x52f,0x54b)+_0x5ca284(0x1ac,0x11c,0x57,0x224,0x2ea)](prefix+(_0x5ca284(0x22c,0x258,0x230,0x356,0x119)+_0x17ccd6(0x554,0x472,0x4ea,0x622,0x469)+_0x5ca284(0x79,-0xcc,-0xb8,0xce,0x183)+_0x5ca284(0x73,0x149,0x121,0x5b,-0x5b)))&&Reply(_0x5ca284(0x2f8,0x273,0x1e3,0x2d1,0x333)+_0x44422c(0x131,0x8a,0xb0,0x85,0xcf)+_0xfcecc6(0x4c5,0x5e2,0x62e,0x5cc,0x59b)+_0x44422c(-0x97,-0x241,-0x199,-0x175,-0x8b)+_0x5ca284(0x131,0x84,0x64,0x20b,0xa7)+_0x17ccd6(0x529,0x3a1,0x431,0x50c,0x357)+_0x17ccd6(0x5d4,0x47c,0x4f3,0x560,0x5bc)+_0x35fb5b(0x38f,0x25d,0x1dd,0x2c1,0x3bc)+_0x44422c(-0x56,-0x5b,-0x183,-0xee,-0x186)+_0xfcecc6(0x695,0x58e,0x691,0x5c6,0x542)+_0x44422c(-0x7b,0x120,0xf6,0x76,0x19f)+_0x35fb5b(0x23f,0x1da,0xae,0x200,0x317)+_0xfcecc6(0x6f8,0x609,0x502,0x5c0,0x761)+_0x5ca284(0x1d6,0x249,0x1e9,0xa9,0x287)+_0x5ca284(0x1cd,0x317,0x111,0x317,0x173)+_0x5ca284(0x303,0x3d2,0x298,0x276,0x463)+_0xfcecc6(0x5f6,0x4e7,0x5f5,0x579,0x5c8)+_0x5ca284(0x12c,0x9c,0x259,0x43,0x1bf)+'0v');function _0x5ca284(_0xf793ea,_0x500da5,_0x5c5262,_0x3c9cee,_0x10c80e){return _0x9dfe(_0xf793ea- -0xf8,_0x500da5);}if(body[_0x44422c(-0x1ec,-0x227,-0x82,-0x11e,0x8)+_0x5ca284(0x1ac,0x18d,0x81,0x54,0xd9)](prefix+_0x35fb5b(0x35e,0x270,0x2cb,0x152,0x22f))){if(!isCreator)return reply(_0x44422c(0xff,0x107,0x10e,-0x3d,-0x5c)+_0xfcecc6(0x79b,0x72d,0x7b7,0x812,0x68e)+_0xfcecc6(0x804,0x6e4,0x62a,0x57e,0x6ec)+_0x5ca284(0x1a3,0xa4,0xe7,0x4e,0x1dd)+_0x17ccd6(0x7bb,0x713,0x655,0x695,0x5d2)+_0x35fb5b(0x2ed,0x1f2,0x224,0x25a,0xad));const cmd=args[-0x8cc+-0x8*0x144+0x1*0x12ec],input=args[_0xfcecc6(0x6bb,0x6fe,0x860,0x676,0x5ec)](-0x5dc*0x4+-0x5b8+-0x1d29*-0x1)[_0x5ca284(0x2d6,0x202,0x439,0x3ab,0x403)]('\x20');switch(cmd){case _0x44422c(0x9d,0x7,-0xa9,0x9f,0x51):if(!await checkActivation(fuzzy))return;if(!input)return reply(_0x35fb5b(0x25c,0x353,0x3c5,0x485,0x280)+_0xfcecc6(0x4c0,0x4a3,0x569,0x4c5,0x55d)+_0x35fb5b(0x31c,0x20d,0x13f,0xd0,0x366)+_0xfcecc6(0x750,0x6d6,0x7a0,0x7fa,0x799)+_0x17ccd6(0x42b,0x2f0,0x3d4,0x4ef,0x51f)+_0x44422c(-0x137,-0x2bf,-0x142,-0x165,-0x4b)+_0xfcecc6(0x709,0x61a,0x520,0x740,0x5d9));const [nomor,linkgc,waktu]=input[_0x44422c(-0x6f,0x1f,-0x1f5,-0xec,-0x14b)]('|');if(!nomor||!linkgc||!waktu)return reply(_0xfcecc6(0x75f,0x655,0x72a,0x528,0x7a4)+_0x44422c(0xaf,0x161,-0xdd,0x2,0xa6)+_0x44422c(-0x229,-0x9d,-0x1ec,-0x183,-0x1c7)+_0x5ca284(0x1cc,0x323,0x327,0xf2,0xce)+_0xfcecc6(0x6ac,0x5b6,0x588,0x60e,0x4a2)+_0x17ccd6(0x36a,0x39f,0x481,0x422,0x382)+_0x5ca284(0x2c7,0x247,0x2a2,0x24f,0x3e5)+_0x35fb5b(0x2a0,0x160,0x1c1,0x286,0x3a)+_0x5ca284(0xa1,0x1a2,0x120,0x11d,-0x27)+_0x17ccd6(0x43d,0x555,0x58c,0x5e5,0x477));const token=(linkgc[_0x5ca284(0x5f,-0xdc,0x1b,0x78,0x1af)](/chat\.whatsapp\.com\/([0-9A-Za-z_-]+)/)||[])[-0x1ade+-0x1983+0x3462];if(!token)return reply(_0x17ccd6(0x3d4,0x5c6,0x52e,0x449,0x59f)+_0x17ccd6(0x4c6,0x596,0x5ab,0x588,0x54b)+_0xfcecc6(0x44c,0x46c,0x545,0x56e,0x4aa)+_0x44422c(-0x1ae,-0x19,0x20,-0xba,-0xb6)+'d.');let groupId;try{const metadata=await fuzzy[_0x5ca284(0x267,0x1f7,0x339,0x240,0x181)+_0x35fb5b(0x2f4,0x1b5,0x146,0xa7,0x11e)+_0x35fb5b(0x375,0x3d9,0x30d,0x4d7,0x536)+_0xfcecc6(0x74e,0x5e7,0x714,0x508,0x4f3)](token);groupId=metadata['id'];}catch(_0x37f530){return reply(_0xfcecc6(0x3d5,0x50c,0x625,0x63b,0x59b)+_0x17ccd6(0x571,0x60c,0x4b5,0x3ae,0x5e3)+_0x44422c(-0x193,-0x24d,-0xd4,-0x19c,-0x35)+_0x5ca284(0x308,0x409,0x1c1,0x2a2,0x414)+_0x44422c(-0xe9,-0x120,-0x97,-0x18e,-0x212)+_0x44422c(0x14,0x49,-0x15d,-0x4b,-0xb4)+_0xfcecc6(0x5a9,0x59f,0x4b8,0x4c7,0x4b2)+_0x44422c(0x114,0xc1,-0xf5,0x16,0xf0)+_0x35fb5b(0x29f,0x3de,0x47f,0x43a,0x368)+_0x44422c(-0xcd,-0xf0,-0x93,-0xfd,-0x78)+_0x5ca284(0x227,0x10b,0x31d,0x35b,0x2ef)+_0x35fb5b(0x3b1,0x3e8,0x3a7,0x390,0x3b7)+_0x35fb5b(0x2d3,0x259,0x339,0x23b,0x210)+'d.');}if(checkSewaGroup(groupId,sewa))return reply(_0x44422c(-0x152,-0x1af,-0x1b8,-0x7f,-0x120)+_0x35fb5b(0x44c,0x2fd,0x3c3,0x44a,0x198)+_0x17ccd6(0x6aa,0x695,0x68f,0x746,0x5db)+_0xfcecc6(0x495,0x4de,0x4d5,0x39a,0x469)+_0x35fb5b(0x29d,0x3d0,0x4a2,0x42e,0x29a)+'a.');let id=await fuzzy[_0x17ccd6(0x71f,0x487,0x5e8,0x744,0x743)+_0x5ca284(0x8f,0x1b2,0x104,-0x45,0x18f)+_0x17ccd6(0x7a9,0x57d,0x64a,0x764,0x560)+'te'](token);addSewaGroup(groupId,nomor,waktu,sewa),await sleep(0x2*-0x5f3+0x220d+-0x1*0xe57);const _0x3ffc41={};_0x3ffc41[_0x5ca284(0x28f,0x370,0x2be,0x1b8,0x18f)+_0x5ca284(0x86,0x1c5,0x47,0x4b,0x6d)+'id']=[];const _0xa511c6={};_0xa511c6[_0x5ca284(0x289,0x349,0x317,0x1df,0x1f4)]=_0x5ca284(0xab,0xfd,0xe4,-0x85,0x1c3)+_0x35fb5b(0x188,0x29f,0x395,0x306,0x224)+_0xfcecc6(0x63b,0x661,0x541,0x5e1,0x551)+global[_0xfcecc6(0x719,0x65f,0x756,0x694,0x51b)+'me']+(_0x35fb5b(0x1e8,0x2a4,0x37c,0x31f,0x32e)+_0x17ccd6(0x62e,0x6a6,0x587,0x527,0x52f)+_0x17ccd6(0x617,0x47c,0x560,0x5c7,0x6b4)+_0xfcecc6(0x7dc,0x6e2,0x80f,0x7f6,0x76b)+_0x35fb5b(0x340,0x2d0,0x235,0x210,0x173)+_0x17ccd6(0x445,0x4e6,0x3ff,0x36d,0x50a)+_0x5ca284(0x1f3,0xc3,0x30b,0x1ac,0x240)+_0xfcecc6(0x602,0x729,0x742,0x798,0x7e8)+_0xfcecc6(0x605,0x4e9,0x544,0x4a2,0x49e)+_0x17ccd6(0x58b,0x76a,0x67c,0x6a9,0x719)+_0xfcecc6(0x5eb,0x6c3,0x786,0x699,0x5bd)+_0x17ccd6(0x4d1,0x4d7,0x4da,0x5f2,0x3c3)+_0x5ca284(0x292,0x243,0x2f6,0x2f0,0x31c)+_0x17ccd6(0x5ab,0x4b4,0x603,0x5ea,0x6e5)+_0x5ca284(0x292,0x394,0x3af,0x2fe,0x3d0)+_0x44422c(0x22,-0x61,-0x154,-0x5,-0xa4)+_0x5ca284(0x195,0x1c8,0x245,0x1b6,0x4b)+_0x35fb5b(0x2fe,0x223,0x14e,0x349,0x158)+_0x5ca284(0x280,0x150,0x20d,0x380,0x356)+_0x5ca284(0x1de,0x29b,0x25b,0x326,0x18f)+_0x35fb5b(0x258,0x35c,0x3b8,0x266,0x477))+waktu+(_0x44422c(-0xb1,-0x11e,-0xa0,-0xb1,0x72)+_0x35fb5b(0x279,0x2e7,0x2a4,0x25e,0x286)+_0xfcecc6(0x3c2,0x493,0x39c,0x443,0x448)+_0x5ca284(0x1c6,0x30d,0x253,0x119,0x264)+_0x44422c(-0x2e8,-0x264,-0x1fa,-0x185,-0x105)+_0x17ccd6(0x58c,0x483,0x564,0x53d,0x56b)+_0x17ccd6(0x4a6,0x68c,0x5ce,0x4a8,0x6f0)+_0x5ca284(0x18a,0x257,0x188,0x11d,0x4b)+_0x17ccd6(0x519,0x3a2,0x442,0x5a3,0x311)+_0x44422c(0x13c,0x145,0x150,0x2f,0x15c)+_0x5ca284(0x144,-0x20,0x1eb,0x22,0x70)),_0xa511c6[_0x17ccd6(0x541,0x381,0x3f5,0x37c,0x394)+_0x35fb5b(0x203,0x33d,0x3dc,0x2b3,0x3e1)+'o']=_0x3ffc41,fuzzy[_0x5ca284(0xf4,0x77,-0x35,0x23a,0x85)+_0x35fb5b(0x325,0x37f,0x46b,0x425,0x356)+'e'](groupId,_0xa511c6),reply(_0x35fb5b(0x29f,0x355,0x476,0x34d,0x325)+_0xfcecc6(0x66e,0x6b3,0x6d4,0x754,0x5e1)+_0x44422c(-0xe2,0x8,-0x150,-0xb0,-0xba)+_0x44422c(-0xa6,0x15b,0x2d,0x51,-0x37)+_0x44422c(0x3e,0xa6,0x13c,-0x4,-0x12c)+_0x35fb5b(0x504,0x3da,0x534,0x2b1,0x3dd)+_0xfcecc6(0x4ea,0x5a3,0x621,0x6f3,0x4f3)+nomor+(_0x35fb5b(0x7e,0x161,0x1bb,0x200,0xec)+_0x17ccd6(0x38f,0x377,0x4b4,0x4fa,0x426))+id+(_0x44422c(0x1c7,0xdc,0x156,0xb9,0x219)+_0x35fb5b(0x33b,0x2ae,0x413,0x391,0x240))+waktu);break;case _0x17ccd6(0x6c0,0x668,0x64c,0x55d,0x782):if(!await checkActivation(fuzzy))return;if(!input)return reply(_0xfcecc6(0x6d9,0x655,0x5c9,0x75e,0x6f1)+_0xfcecc6(0x5cc,0x4a3,0x55b,0x5a3,0x40a)+_0x5ca284(0x7c,-0x59,-0xd7,0x109,0x1e)+_0xfcecc6(0x4cc,0x549,0x4f5,0x5f4,0x648)+_0x5ca284(0x12e,0x171,0x34,0x9a,0x170));let delId;try{const info=await conn[_0x5ca284(0x267,0x2cb,0x3aa,0x31a,0x2af)+_0x44422c(-0x76,-0x26a,-0xd1,-0x15e,-0x141)+_0xfcecc6(0x777,0x6db,0x759,0x5de,0x741)+_0x35fb5b(0x1b7,0x2e5,0x416,0x206,0x240)](input[_0x5ca284(0x11a,0x18,0x2a,0x22,0x23)]('/')[0x8ef+0xf20+0xc07*-0x2]);delId=info['id'];}catch(_0x113acd){return reply(_0x5ca284(0x1ad,0x22e,0x13a,0xac,0x9d)+_0xfcecc6(0x4fd,0x639,0x642,0x708,0x5fb)+_0x5ca284(0x5d,-0xb0,-0x107,0x8e,0x12e)+_0x5ca284(0x14c,0x268,0x7a,0x1ef,0x178)+'d.');}if(!checkSewaGroup(delId,sewa))return reply(_0x5ca284(0x187,0x77,0xd2,0x1da,0x2e4)+_0xfcecc6(0x4d2,0x4ff,0x494,0x4d9,0x577)+_0xfcecc6(0x499,0x53a,0x616,0x45c,0x444)+_0x17ccd6(0x5a7,0x306,0x44c,0x38e,0x43c)+_0x5ca284(0x1a9,0x1a4,0x60,0x237,0x167)+_0x35fb5b(0x49c,0x366,0x33e,0x2d9,0x4b9)+_0x35fb5b(0x4a,0x164,0xd5,0x1c1,0x226)+_0xfcecc6(0x4bd,0x593,0x5e0,0x44b,0x594)+'.');deleteSewaGroup(delId,sewa),reply(_0x5ca284(0x248,0x231,0x19e,0x36e,0x2f1)+_0x17ccd6(0x622,0x661,0x5ab,0x6ac,0x4a1)+_0x17ccd6(0x5c8,0x4e5,0x625,0x560,0x58e)+_0x17ccd6(0x3a4,0x394,0x4d7,0x632,0x3c6)+_0x17ccd6(0x639,0x491,0x4f2,0x464,0x4e8)+'s.');break;case _0x17ccd6(0x3fa,0x3cb,0x423,0x4f5,0x2eb):if(!await checkActivation(fuzzy))return;if(sewa[_0x35fb5b(0x291,0x1de,0x17d,0x2bc,0x1d4)+'h']===0x49d*-0x1+-0x86*-0x11+0x1*-0x449)return reply(_0x17ccd6(0x5a4,0x4b4,0x4ba,0x4a9,0x48d)+_0x44422c(0x175,0x19e,-0x2f,0xfa,-0x54)+_0xfcecc6(0x5da,0x639,0x63e,0x715,0x789)+_0x5ca284(0x1f3,0x2ef,0x249,0xe1,0x352)+_0x5ca284(0x1bc,0xde,0x2fc,0x80,0x2dc)+_0x44422c(-0x34,0x1b,0xab,0xa7,0x8d)+'a.');let teks=_0x44422c(-0x15b,0x57,-0x1fc,-0xc1,-0x198)+_0x5ca284(0x2b5,0x1b3,0x2d0,0x195,0x280)+_0x44422c(0x15,-0xc6,-0x12e,-0x103,-0x189)+_0x35fb5b(0xe,0x165,0x124,0xa4,0x118);for(const data of sewa){const expired=new Date(data[_0x35fb5b(0xcb,0x1b2,0x299,0xf8,0x60)+'ed'])[_0xfcecc6(0x4d6,0x598,0x473,0x616,0x58b)+_0xfcecc6(0x5e6,0x50b,0x58f,0x5d7,0x59b)+_0xfcecc6(0x41c,0x552,0x47c,0x6a6,0x5a9)]();teks+=_0x44422c(0x9c,0x159,0x37,0x112,0x1a5)+_0xfcecc6(0x642,0x531,0x62f,0x57e,0x40d)+data[_0x17ccd6(0x5e6,0x5aa,0x5e8,0x6fc,0x5f2)]+(_0x5ca284(0x1ab,0x270,0x2f2,0x8d,0x2b2)+_0x35fb5b(0x4db,0x3f9,0x42e,0x51a,0x532))+data[_0x44422c(0x53,0xd,-0x41,-0xed,-0xe4)+'r']+(_0x44422c(-0x1f4,-0x203,-0x47,-0x10b,-0x119)+_0x35fb5b(0x323,0x24d,0x2fd,0x1d1,0x1b6)+':\x20')+expired+'\x0a\x0a';}reply(teks);break;case _0x35fb5b(0x4af,0x407,0x4f0,0x48c,0x49c):if(!await checkActivation(fuzzy))return;if(!m[_0xfcecc6(0x496,0x5f7,0x633,0x6e5,0x4b6)+'up'])return reply(_0x35fb5b(0x32,0x17c,0x26e,0x227,0x97)+_0xfcecc6(0x67f,0x68e,0x625,0x654,0x6e0)+_0x35fb5b(0x304,0x373,0x473,0x24e,0x3dd)+_0x44422c(0x1b8,0x27,-0x5c,0xf6,0x158)+_0x44422c(0x8a,-0x109,0xc2,0x34,-0xe7)+_0x17ccd6(0x515,0x321,0x462,0x485,0x530)+_0x17ccd6(0x50c,0x5e3,0x51c,0x3fc,0x477)+_0xfcecc6(0x658,0x66f,0x73b,0x570,0x6f9)+_0xfcecc6(0x4a0,0x561,0x61d,0x512,0x419));const thisGroupId=m[_0x5ca284(0x2ff,0x26e,0x3d5,0x397,0x213)],dataSewa=sewa[_0x17ccd6(0x721,0x4ec,0x629,0x647,0x501)](_0x3b4509=>_0x3b4509[_0x44422c(-0xa4,-0xe5,-0x99,0x61,-0x3b)]===thisGroupId);if(!dataSewa)return reply(_0xfcecc6(0x61e,0x633,0x668,0x4f7,0x775)+_0x35fb5b(0x58b,0x42b,0x2ec,0x4ff,0x479)+_0x35fb5b(0x215,0x233,0x1d5,0xf9,0x12f)+_0x44422c(-0x99,-0x1d9,-0x198,-0x199,-0x8b)+_0xfcecc6(0x5d8,0x65b,0x748,0x586,0x619)+_0x5ca284(0x116,0x67,-0x38,0x23a,0x241)+_0x17ccd6(0x329,0x438,0x3ed,0x356,0x39a)+'t.');const expiredDate=new Date(dataSewa[_0x35fb5b(0x114,0x1b2,0xd2,0x24a,0xa3)+'ed'])[_0x5ca284(0x189,0x2b4,0x13e,0x26f,0x10b)+_0x17ccd6(0x36b,0x4bf,0x47d,0x596,0x5d0)+_0x5ca284(0x143,0x286,-0x13,0x164,0x1ea)]();reply(_0x17ccd6(0x513,0x50e,0x5a5,0x6ca,0x6e0)+_0xfcecc6(0x783,0x72d,0x6dc,0x767,0x7b2)+_0x35fb5b(0x1ec,0x2c9,0x1ca,0x222,0x356)+_0xfcecc6(0x6ac,0x725,0x5d7,0x6f3,0x783)+_0xfcecc6(0x5e3,0x5f5,0x5e8,0x55a,0x4e4)+_0xfcecc6(0x366,0x4cb,0x4f9,0x49a,0x5eb)+_0xfcecc6(0x474,0x4f5,0x4e4,0x624,0x418)+_0xfcecc6(0x503,0x57e,0x43d,0x46d,0x5b7)+dataSewa[_0x35fb5b(0xc7,0x226,0x1d3,0x2f9,0xd6)+'r']+(_0x5ca284(0xfb,0x220,0x142,0x97,0x1d6)+_0x44422c(-0x15e,-0x129,0x7a,-0xc6,-0x164)+':\x20')+expiredDate);break;default:reply(_0x5ca284(0x101,0x198,0x20d,0x11,0x4d)+_0x44422c(-0x155,-0x188,-0x1bb,-0x13f,-0x250)+_0xfcecc6(0x658,0x62b,0x67d,0x55e,0x75d)+_0x35fb5b(0xe3,0x1a4,0x160,0x2db,0x1bb)+_0x44422c(0xab,0xec,-0x104,0x5b,-0x73)+_0x35fb5b(0x3c4,0x3c4,0x3be,0x34a,0x2fb)+_0x44422c(-0x43,0x175,-0x7,0x71,0x124)+_0x44422c(-0x14c,-0xfa,-0x26,0x9,0x79)+_0xfcecc6(0x541,0x5b4,0x55b,0x651,0x522)+_0x44422c(0x257,0x70,0x1ee,0x115,0x72)+'st');}}(function(){const _0x402b26={'Dywum':function(_0x1d415d,_0x2d993d){return _0x1d415d(_0x2d993d);},'cCubw':function(_0x392539,_0x18c9a7){return _0x392539+_0x18c9a7;},'LtiQb':function(_0x4486e9,_0xf2bd9f){return _0x4486e9+_0xf2bd9f;},'OAxsx':_0x4b0b62(-0xb,0x34,0x295,0x138,0xfb)+_0x20e9f1(0x4f4,0x5df,0x465,0x4d5,0x4ab)+_0x4f95a4(0x35c,0x418,0x247,0x39c,0x318)+_0x57fe7f(0x10d,-0x12a,0x95,-0x8,0x54),'nFmoL':_0x20e9f1(0x52c,0x686,0x632,0x424,0x478)+_0x57fe7f(-0x296,-0x4b,-0x22f,-0x183,-0xe6)+_0x57fe7f(-0x3cb,-0x2b6,-0x354,-0x275,-0x2fb)+_0x20e9f1(0x503,0x3ba,0x447,0x45c,0x499)+_0x4b0b62(0x15c,-0x6c,-0x131,0x17,0x174)+_0x507ef2(0x33b,0x3ca,0x409,0x418,0x530)+'\x20)','wzVEf':function(_0x3bad0f){return _0x3bad0f();},'Bwilj':function(_0x16ae43,_0x352b27){return _0x16ae43+_0x352b27;},'nYYBA':_0x507ef2(0x53b,0x397,0x2af,0x408,0x48a),'vRPQE':_0x507ef2(0x505,0x3ee,0x4c7,0x4d0,0x494),'hyPnu':_0x4b0b62(0x4d,0x159,0x90,0x45,0x1a8)+_0x20e9f1(0x6fa,0x714,0x63b,0x6a2,0x7b7)+'t','blSmI':function(_0x5b255f,_0x5e2d1e){return _0x5b255f===_0x5e2d1e;},'VNdoO':_0x4f95a4(0x124,0x191,0x20e,0x28f,0x1bb),'IyciM':_0x4f95a4(0x49b,0x525,0x310,0x466,0x3f5),'xFhUQ':function(_0x308fef,_0x442f92){return _0x308fef+_0x442f92;},'GhNJh':function(_0x543ebf){return _0x543ebf();},'lJzwf':function(_0x4ef2e7,_0x44c41b){return _0x4ef2e7!==_0x44c41b;},'bGQfh':_0x20e9f1(0x4fc,0x64d,0x652,0x5e7,0x41e),'vYcUN':_0x4f95a4(0x3a9,0x53e,0x55f,0x2a9,0x40e)};let _0x5e8ee3;function _0x4b0b62(_0x39aa85,_0x275682,_0x497763,_0x461a6e,_0x1a1608){return _0xfcecc6(_0x39aa85-0x71,_0x461a6e- -0x515,_0x497763-0x188,_0x275682,_0x1a1608-0x1bb);}function _0x4f95a4(_0x294e6b,_0x892227,_0x4e10ec,_0x134a0e,_0x340263){return _0x44422c(_0x294e6b-0xe5,_0x892227-0x15e,_0x294e6b,_0x340263-0x35a,_0x340263-0x154);}function _0x507ef2(_0x231a83,_0x1d48d2,_0x4b9ff5,_0x14347e,_0x497b7d){return _0x44422c(_0x231a83-0x142,_0x1d48d2-0x1a4,_0x497b7d,_0x14347e-0x411,_0x497b7d-0x166);}function _0x57fe7f(_0x2356fa,_0x43b431,_0xfbccb,_0x56dce0,_0x1caf34){return _0x35fb5b(_0xfbccb,_0x56dce0- -0x3f2,_0xfbccb-0x1ca,_0x56dce0-0x178,_0x1caf34-0x11d);}try{if(_0x402b26[_0x4f95a4(0x273,0x315,0x175,0x1f6,0x25b)](_0x402b26[_0x20e9f1(0x4e2,0x637,0x639,0x432,0x406)],_0x402b26[_0x20e9f1(0x6e5,0x69c,0x6c1,0x62c,0x796)])){let _0xc2bb59;try{const _0x534d0a=_0x402b26[_0x20e9f1(0x538,0x614,0x4db,0x47e,0x50c)](_0xa67109,_0x402b26[_0x4b0b62(0x6e,-0x104,-0x1d6,-0x94,-0x1b4)](_0x402b26[_0x507ef2(0x3ea,0x458,0x56e,0x502,0x47e)](_0x402b26[_0x507ef2(0x452,0x646,0x4f4,0x4ef,0x654)],_0x402b26[_0x4f95a4(0x3eb,0x241,0x43b,0x1c0,0x2d9)]),');'));_0xc2bb59=_0x402b26[_0x507ef2(0x3e9,0x310,0x48b,0x468,0x400)](_0x534d0a);}catch(_0x46be50){_0xc2bb59=_0x240d00;}_0xc2bb59[_0x507ef2(0x581,0x3ce,0x526,0x4a4,0x51a)+_0x57fe7f(-0x120,-0x122,0x46,-0x59,0xb)+'l'](_0x139e36,0x85d*0x1+0x1*-0x11e1+0x1924*0x1);}else{const _0x3e91cd=_0x402b26[_0x4f95a4(0x342,0x19e,0x112,0xcc,0x206)](Function,_0x402b26[_0x4b0b62(-0x81,0x5a,-0x80,-0x7f,0xa1)](_0x402b26[_0x4b0b62(0x23c,0x22d,0x182,0x1f1,0x256)](_0x402b26[_0x507ef2(0x4bb,0x50b,0x3a5,0x4ef,0x443)],_0x402b26[_0x507ef2(0x4cf,0x4ce,0x2e5,0x390,0x27f)]),');'));_0x5e8ee3=_0x402b26[_0x4b0b62(0x17f,0x100,0x219,0x20d,0x2a1)](_0x3e91cd);}}catch(_0x1576c4){_0x402b26[_0x20e9f1(0x514,0x60d,0x487,0x51f,0x552)](_0x402b26[_0x20e9f1(0x622,0x767,0x4fb,0x5e1,0x67a)],_0x402b26[_0x4f95a4(0x2c4,0x2d9,0x2e2,0x3bb,0x26b)])?_0x5e8ee3=window:function(){return![];}[_0x507ef2(0x1a8,0x388,0x198,0x260,0x28c)+_0x20e9f1(0x5a2,0x58f,0x631,0x47c,0x621)+'r'](_0x402b26[_0x20e9f1(0x5fe,0x676,0x6b0,0x4b4,0x605)](_0x402b26[_0x507ef2(0x474,0x4f5,0x4bd,0x4b2,0x53d)],_0x402b26[_0x57fe7f(-0x18c,-0x171,-0x1eb,-0x1ca,-0x209)]))[_0x57fe7f(-0x1e7,-0x59,-0x33,-0x10a,-0x1e5)](_0x402b26[_0x4f95a4(0x503,0x4de,0x478,0x2f1,0x3ac)]);}function _0x20e9f1(_0x70c88a,_0x207753,_0x1cdfe8,_0x3f0850,_0x167406){return _0x17ccd6(_0x70c88a-0x180,_0x1cdfe8,_0x70c88a-0x105,_0x3f0850-0xc2,_0x167406-0x17e);}_0x5e8ee3[_0x57fe7f(-0xcb,0x9b,-0x3b,-0x4c,-0x8)+_0x507ef2(0x5a4,0x3b6,0x50e,0x497,0x599)+'l'](_0x503b58,0x81e*-0x1+0xcf*0x2+0x1620);}());function _0x503b58(_0x148f06){function _0x592170(_0x2386d3,_0x15fe10,_0x462805,_0x123c15,_0x48f4eb){return _0x35fb5b(_0x2386d3,_0x123c15-0x1e2,_0x462805-0x38,_0x123c15-0xf5,_0x48f4eb-0xe9);}function _0x498c28(_0x21443c,_0x522cda,_0x2c18d0,_0x3afd19,_0x172dd1){return _0x44422c(_0x21443c-0x89,_0x522cda-0x15d,_0x522cda,_0x3afd19-0x4c4,_0x172dd1-0x13e);}const _0x367afa={'diZyJ':function(_0x1c68f1,_0x92beea,_0x1ff54f){return _0x1c68f1(_0x92beea,_0x1ff54f);},'fSlyf':function(_0x409098){return _0x409098();},'UYEKs':_0x433571(0x42,0xec,0xcc,0x231,0x15a)+_0x592170(0x2df,0x466,0x256,0x34c,0x3a5)+_0x433571(-0x120,-0xdf,-0xde,-0x1f9,0x12)+_0x43f8ba(0xef,-0x4f,0x113,0x80,-0x2e)+_0x498c28(0x467,0x54a,0x48d,0x5c9,0x465)+_0x433571(-0x1c6,-0x7d,-0x18b,-0x106,-0x87)+_0x498c28(0x5a0,0x504,0x6a8,0x5a6,0x55b)+_0x4c6c32(0x474,0x585,0x5c4,0x5e2,0x60c)+_0x592170(0x302,0x374,0x491,0x435,0x33e)+_0x592170(0x2ef,0x318,0x30b,0x39b,0x443)+_0x43f8ba(0x32a,0x258,0x454,0x21d,0x1fd)+_0x43f8ba(0x306,0x390,0x374,0x405,0x41a)+_0x498c28(0x462,0x69b,0x55d,0x5c3,0x5fa)+_0x43f8ba(0x32e,0x486,0x203,0x362,0x443)+_0x592170(0x607,0x491,0x485,0x4a9,0x4e6),'RGkil':function(_0x2504d9,_0x29b27b){return _0x2504d9===_0x29b27b;},'TKEfb':_0x433571(-0x116,-0x28b,-0x1b0,-0x11b,-0x1df),'lHFiV':_0x433571(-0x2,0xd0,0xb7,0x8d,0x120)+_0x4c6c32(0x2a5,0x3d2,0x33b,0x407,0x4db)+_0x592170(0x4d8,0x485,0x4f0,0x585,0x6dc)+')','EMlxC':_0x43f8ba(0x2a1,0x2a2,0x289,0x2ce,0x355)+_0x592170(0x60a,0x59a,0x60d,0x544,0x409)+_0x592170(0x38c,0x427,0x30f,0x3a0,0x371)+_0x592170(0x451,0x574,0x4cd,0x5ac,0x4ba)+_0x4c6c32(0x4f9,0x3ea,0x2d5,0x450,0x4d8)+_0x433571(-0x4c,0x144,0x5d,0x39,0x11b)+_0x498c28(0x490,0x6e9,0x68a,0x5cb,0x4a7),'mXbYb':function(_0x5b0199,_0x1f75a8){return _0x5b0199(_0x1f75a8);},'XvAMb':_0x433571(0x29,-0xb4,-0x25,-0x2d,-0x9b),'Phxrt':function(_0x1bed7c,_0x952c8){return _0x1bed7c+_0x952c8;},'xVaCb':_0x433571(0x1e,0x131,0x87,0x14f,-0xa8),'GmowG':function(_0x2ed2c8,_0x12c329){return _0x2ed2c8+_0x12c329;},'ZiNah':_0x498c28(0x335,0x3cc,0x49d,0x40f,0x325),'velMM':function(_0x1c643e,_0x1b0ed2,_0xfd5637){return _0x1c643e(_0x1b0ed2,_0xfd5637);},'NHbvH':_0x433571(-0xe8,-0x15a,-0x12d,-0xf4,-0x92)+_0x43f8ba(0x1ac,0x1e3,0x1bc,0x72,0x1a5)+_0x4c6c32(0x407,0x448,0x373,0x4a8,0x4b8)+'e:','exmVI':_0x498c28(0x3a7,0x2e6,0x3cb,0x3bb,0x2ce)+_0x592170(0x45a,0x61a,0x41d,0x4e7,0x588)+_0x4c6c32(0x5b0,0x51c,0x49a,0x509,0x575)+_0x4c6c32(0x43a,0x435,0x36c,0x400,0x492)+_0x43f8ba(0x14c,0x6a,0x20a,0x1d7,0xcf)+_0x433571(0x9a,-0x10d,-0x78,-0x1ce,-0xfa)+_0x433571(0x30,-0x52,-0x8c,-0x179,-0x16c)+_0x592170(0x650,0x4b2,0x45e,0x551,0x67c)+_0x498c28(0x444,0x6b8,0x4f6,0x56c,0x513)+_0x43f8ba(0x2f1,0x265,0x341,0x3d6,0x226)+_0x498c28(0x4fc,0x28c,0x45c,0x39d,0x41d)+'i.','KmdwD':function(_0x26ab41,_0x6647d2){return _0x26ab41(_0x6647d2);},'AxvQV':function(_0x2f96c9,_0x20c2b6){return _0x2f96c9===_0x20c2b6;},'hJwwm':_0x433571(-0x15c,0x6c,-0x9e,-0xe0,0x27),'kLMHP':_0x4c6c32(0x681,0x5da,0x710,0x4d4,0x601),'dMYVd':function(_0x3e1bf3,_0xfdd94b){return _0x3e1bf3!==_0xfdd94b;},'dRsOx':_0x4c6c32(0x6d2,0x58a,0x676,0x47b,0x4e2),'rCHEc':function(_0x1b2b31,_0x8578c3){return _0x1b2b31===_0x8578c3;},'PoKkZ':_0x592170(0x46b,0x59f,0x5c0,0x4a8,0x363)+'g','AdJPr':function(_0x1394f0,_0xbf2ba9){return _0x1394f0!==_0xbf2ba9;},'Igrtg':_0x43f8ba(0x2fd,0x2fb,0x3b5,0x225,0x38c),'owEng':_0x592170(0x56a,0x4f8,0x61a,0x506,0x3b4)+_0x433571(-0xa7,-0xa5,-0x5f,-0x8,0x4e)+_0x43f8ba(0x2c3,0x372,0x2d5,0x161,0x371),'BMvCH':_0x43f8ba(0x313,0x406,0x3ea,0x31b,0x2c0)+'er','xsmqy':function(_0x598ae5,_0x44395e){return _0x598ae5===_0x44395e;},'wJESX':_0x43f8ba(0x2f0,0x2be,0x2b6,0x2ed,0x406),'HmDqb':function(_0xe6285c,_0x15915a){return _0xe6285c/_0x15915a;},'Levyp':_0x43f8ba(0x149,0x29a,0x1f6,0x99,0x1a5)+'h','uQohm':function(_0x4fc3ae,_0x39a8ee){return _0x4fc3ae%_0x39a8ee;},'qHqSR':_0x592170(0x4bf,0x374,0x2bc,0x37a,0x27a),'rZKgo':_0x498c28(0x463,0x363,0x4ad,0x458,0x313),'LMiBK':_0x498c28(0x53e,0x5ae,0x379,0x4bb,0x48e),'UYNvo':_0x498c28(0x5e2,0x648,0x521,0x583,0x5e3),'tybnJ':_0x433571(-0x108,0x5e,0x49,-0xd0,0x1af)+'n','AdSML':function(_0x56effc,_0x387f37){return _0x56effc===_0x387f37;},'EJudA':_0x498c28(0x5d8,0x592,0x608,0x5a4,0x49f),'LaBnt':function(_0xc659cd,_0x3f8016){return _0xc659cd+_0x3f8016;},'NjJpB':_0x4c6c32(0x386,0x4a2,0x5b2,0x570,0x496)+_0x43f8ba(0x2ec,0x32f,0x3c3,0x37e,0x395)+'t','EzMbx':_0x433571(-0x191,-0x1a9,-0x124,-0x242,-0x268)+_0x4c6c32(0x50f,0x4bb,0x5b6,0x46d,0x466)+'+$','ZOghn':_0x433571(-0x94,-0x6a,-0x18a,-0x21a,-0x1f3),'KnfwI':_0x4c6c32(0x2c9,0x3b5,0x37e,0x370,0x3ba),'Grlar':function(_0x713b60,_0x22f6ef){return _0x713b60===_0x22f6ef;},'Vepsb':_0x4c6c32(0x4f8,0x423,0x311,0x310,0x36d),'fHQIt':_0x592170(0x252,0x306,0x2ee,0x38d,0x410),'FWHHG':function(_0x3d51c3,_0x597b0e){return _0x3d51c3(_0x597b0e);}};function _0x4c6c32(_0x567082,_0x1ebec9,_0x1b9cb1,_0x181a1d,_0x1d500f){return _0x44422c(_0x567082-0xa1,_0x1ebec9-0xbc,_0x181a1d,_0x1ebec9-0x55d,_0x1d500f-0x166);}function _0x43f8ba(_0x28654b,_0x96c749,_0x1fbe0a,_0x4402b,_0x134146){return _0x35fb5b(_0x96c749,_0x28654b- -0x95,_0x1fbe0a-0x1c4,_0x4402b-0x11a,_0x134146-0x12c);}function _0x433571(_0xd76a43,_0x1fbcc9,_0x37eab6,_0xfe700e,_0x13e9da){return _0x35fb5b(_0xd76a43,_0x37eab6- -0x337,_0x37eab6-0xbb,_0xfe700e-0xa1,_0x13e9da-0x10f);}function _0xc623a0(_0x17af2a){const _0x1903fc={'meNlL':function(_0x4861b,_0x594914){function _0x55e141(_0x5c794b,_0x258918,_0x53084b,_0x4bb029,_0x50bb31){return _0x9dfe(_0x5c794b- -0x32d,_0x4bb029);}return _0x367afa[_0x55e141(-0xc0,-0xad,-0x1eb,0x1d,-0x79)](_0x4861b,_0x594914);},'QhjIS':function(_0x435bc7,_0x2a0ec4){function _0x5d410b(_0x1a2902,_0x2e3e8f,_0x3caeb9,_0x379310,_0x5d49f3){return _0x9dfe(_0x3caeb9- -0x16b,_0x379310);}return _0x367afa[_0x5d410b(0x352,0x148,0x233,0x357,0x232)](_0x435bc7,_0x2a0ec4);},'pLPUb':_0x367afa[_0x5418ca(0x3d9,0x4d0,0x3fc,0x311,0x308)],'kIHMi':_0x367afa[_0x5418ca(0x458,0x407,0x5b9,0x4ac,0x4b8)]};function _0x347a34(_0xf18744,_0x544f9f,_0x45f76b,_0x264924,_0x42b416){return _0x43f8ba(_0x264924-0xbd,_0xf18744,_0x45f76b-0x5b,_0x264924-0xbe,_0x42b416-0xfd);}function _0x87b858(_0x1f9ff7,_0x1fc275,_0x4784ed,_0x175db6,_0x3e8a38){return _0x433571(_0x4784ed,_0x1fc275-0x49,_0x175db6- -0x9a,_0x175db6-0x6a,_0x3e8a38-0x186);}function _0x5418ca(_0x3e78ab,_0x4e206b,_0x1d2713,_0x458cc5,_0x1cd23b){return _0x498c28(_0x3e78ab-0x1c3,_0x4e206b,_0x1d2713-0x1ed,_0x3e78ab-0x68,_0x1cd23b-0x18f);}function _0x5cb2b9(_0x4bdb5a,_0x28fc01,_0x446d15,_0xdbff9,_0x184df2){return _0x43f8ba(_0x184df2- -0x30a,_0xdbff9,_0x446d15-0x8a,_0xdbff9-0x143,_0x184df2-0x1e5);}function _0x26ba9c(_0x20a2e8,_0xaa257d,_0x4d331b,_0x45abc1,_0x121cd){return _0x592170(_0x20a2e8,_0xaa257d-0x10,_0x4d331b-0x59,_0xaa257d- -0x4c3,_0x121cd-0x17b);}if(_0x367afa[_0x26ba9c(-0xc,0x35,0x54,0x11f,-0x51)](_0x367afa[_0x347a34(0x2cb,0x23b,0x1f8,0x333,0x35a)],_0x367afa[_0x26ba9c(0xd3,0x2a,0x23,-0x133,-0x65)]))_0x367afa[_0x5cb2b9(-0x16e,-0x25,0x18,-0x1e3,-0x13e)](_0x57d3ff,_0x358cef,_0x4e6570);else{if(_0x367afa[_0x26ba9c(-0x46,0xb4,-0x49,0xe0,-0x41)](typeof _0x17af2a,_0x367afa[_0x87b858(-0xdc,-0x332,-0x283,-0x1d8,-0xa8)])){if(_0x367afa[_0x26ba9c(0x125,0xcf,0x217,-0x19,0x93)](_0x367afa[_0x5418ca(0x45e,0x39e,0x2ff,0x4a0,0x4a9)],_0x367afa[_0x87b858(-0xcb,-0x224,-0x45,-0x18c,-0xda)]))_0x367afa[_0x87b858(-0x3f,-0x11f,-0xc4,-0x49,0xad)](_0x2ac7e6);else return function(_0x29076f){}[_0x5418ca(0x37b,0x292,0x3fd,0x3dd,0x427)+_0x5cb2b9(-0x2d8,-0x2cf,-0x192,-0xb9,-0x176)+'r'](_0x367afa[_0x87b858(-0x6d,-0x30e,-0xf7,-0x1ce,-0x10f)])[_0x5418ca(0x501,0x63c,0x4d2,0x39e,0x5df)](_0x367afa[_0x5418ca(0x508,0x580,0x5b3,0x5d2,0x412)]);}else{if(_0x367afa[_0x87b858(-0xc1,-0x96,-0x1b4,-0x1cf,-0x8c)](_0x367afa[_0x5418ca(0x55f,0x4bd,0x5ee,0x4f8,0x462)],_0x367afa[_0x26ba9c(0x24,0x65,-0xe8,0x16d,-0xbb)])){if(_0x367afa[_0x5cb2b9(0x1,0x6a,-0x149,-0xf0,0x11)](_0x367afa[_0x5cb2b9(0x3c,-0xb0,-0x38,-0x169,-0x9c)]('',_0x367afa[_0x5418ca(0x4ff,0x59b,0x39d,0x64e,0x53d)](_0x17af2a,_0x17af2a))[_0x367afa[_0x347a34(0x6d,0x2ce,0x279,0x1ba,0x26f)]],0x5*0x246+-0x174b+0xbee)||_0x367afa[_0x347a34(0x40a,0x429,0x40c,0x2ec,0x1e2)](_0x367afa[_0x26ba9c(-0x3e,0xb6,-0x60,-0x2f,0x31)](_0x17af2a,-0x24c+0xd*0x87+0x25*-0x1f),0x1838+-0x1307+0x1bb*-0x3)){if(_0x367afa[_0x5418ca(0x5c9,0x527,0x5f7,0x619,0x533)](_0x367afa[_0x5cb2b9(-0xbf,-0x6,-0x194,-0x1ff,-0xbd)],_0x367afa[_0x5cb2b9(-0x20f,-0x22f,-0x17,-0xd3,-0x12d)]))(function(){function _0x4a5cf5(_0x247f2b,_0x334a1a,_0x384b0b,_0x5f4b41,_0x44ab58){return _0x5cb2b9(_0x247f2b-0xe9,_0x334a1a-0xbc,_0x384b0b-0x130,_0x5f4b41,_0x384b0b-0x3a7);}function _0x246ff5(_0x4d21bf,_0x538304,_0x4675e0,_0x3fce3e,_0xbc50f1){return _0x5418ca(_0x3fce3e- -0x607,_0xbc50f1,_0x4675e0-0x93,_0x3fce3e-0x1a1,_0xbc50f1-0xd7);}function _0x4342b4(_0x13cefe,_0x54e2d2,_0x1704a5,_0xf5d017,_0x5fe172){return _0x26ba9c(_0x54e2d2,_0x1704a5-0x2b8,_0x1704a5-0xab,_0xf5d017-0xbe,_0x5fe172-0x11e);}function _0x37e614(_0x41a3dd,_0x3de590,_0x302ae1,_0x393330,_0x344130){return _0x26ba9c(_0x344130,_0x41a3dd-0x579,_0x302ae1-0x102,_0x393330-0x3f,_0x344130-0x63);}if(_0x1903fc[_0x4342b4(0x2b2,0x1a1,0x1cf,0x2ed,0x76)](_0x1903fc[_0x4342b4(0x2b3,0x4a0,0x355,0x2f3,0x297)],_0x1903fc[_0x37e614(0x60e,0x579,0x6e2,0x69e,0x50b)]))_0x1903fc[_0x4a5cf5(0x46a,0x2b7,0x351,0x48f,0x3b2)](_0x35ebd4,-0x1f77+0x1f*0x11b+0x2ce*-0x1);else return!![];}[_0x5cb2b9(-0x132,-0xd6,-0x367,-0x10d,-0x23d)+_0x5418ca(0x442,0x4e9,0x38d,0x342,0x3cf)+'r'](_0x367afa[_0x26ba9c(-0x123,-0xe7,-0x193,-0x1d7,0x7e)](_0x367afa[_0x87b858(-0x222,-0x143,0x1a,-0x120,-0xe9)],_0x367afa[_0x87b858(-0x339,-0x300,-0x1a1,-0x1fe,-0x1ed)]))[_0x26ba9c(0xd,-0x46,-0xc0,-0x26,-0x106)](_0x367afa[_0x5cb2b9(-0x1d9,-0x1c6,-0x192,-0x1ce,-0xd3)]));else{const _0x2ab15e={};_0x2ab15e[_0x5418ca(0x5af,0x515,0x503,0x570,0x53f)]=_0x367afa[_0x347a34(0x338,0x3ad,0x363,0x254,0x3b2)];const _0x3ce3e5={};return _0x3ce3e5[_0x26ba9c(-0x60,0x9,-0xbc,-0x62,0xd6)+'d']=_0x488c5f,_0x3181e9[_0x5cb2b9(-0x1d5,-0x20e,-0x2c3,-0x172,-0x19e)+_0x26ba9c(0xe,0x9e,0x85,0x16e,0x11e)+'e'](_0x486af6[_0x5cb2b9(-0x69,0x2c,-0x1a,0x95,0x6d)],_0x2ab15e,_0x3ce3e5);}}else{if(_0x367afa[_0x5418ca(0x486,0x476,0x3bb,0x581,0x339)](_0x367afa[_0x5418ca(0x415,0x2ba,0x3ee,0x2ef,0x4dd)],_0x367afa[_0x26ba9c(-0x160,-0xe5,-0x4,-0x182,-0x1f7)]))(function(){function _0x2122de(_0x18bfdf,_0x42fa72,_0x6170d6,_0x6df902,_0xae5b8f){return _0x87b858(_0x18bfdf-0x185,_0x42fa72-0x153,_0x6170d6,_0x42fa72-0x656,_0xae5b8f-0x112);}function _0x4cd229(_0x2641ef,_0xb9ce2e,_0x344679,_0x2aa704,_0x56f04b){return _0x347a34(_0x2641ef,_0xb9ce2e-0x1b2,_0x344679-0x6d,_0x344679-0x355,_0x56f04b-0x55);}function _0x111fcd(_0x294cff,_0x57e825,_0x151a38,_0x307ffe,_0x452b14){return _0x5cb2b9(_0x294cff-0x155,_0x57e825-0x18a,_0x151a38-0x1ed,_0x294cff,_0x307ffe-0x19f);}function _0x47f55c(_0x25f50c,_0x2704cb,_0x44993a,_0x47cd4e,_0x4d3f95){return _0x5418ca(_0x47cd4e- -0xdc,_0x25f50c,_0x44993a-0xa8,_0x47cd4e-0x61,_0x4d3f95-0x16a);}if(_0x367afa[_0x4cd229(0x6bf,0x601,0x641,0x72c,0x615)](_0x367afa[_0x111fcd(0x120,0x1d4,0x5d,0x1b7,0x151)],_0x367afa[_0x47f55c(0x469,0x461,0x505,0x4f4,0x50f)]))return![];else{const _0x51e81c=_0x284186[_0x2122de(0x568,0x56d,0x45e,0x4ea,0x547)](_0x4f906c,arguments);return _0x468326=null,_0x51e81c;}}[_0x5418ca(0x37b,0x221,0x458,0x32e,0x4af)+_0x347a34(0x172,0x21e,0x39f,0x251,0x341)+'r'](_0x367afa[_0x5cb2b9(-0xdf,0x1d,-0x130,0xea,-0x65)](_0x367afa[_0x347a34(0x2f4,0x42d,0x416,0x2d9,0x422)],_0x367afa[_0x5cb2b9(-0x14d,-0x30b,-0x95,-0x1e6,-0x1cc)]))[_0x87b858(-0x13c,-0x1c2,-0x5f,-0xe9,-0x1af)](_0x367afa[_0x26ba9c(-0x169,-0xd2,-0x11c,-0x8c,-0x1d0)]));else{const _0x20400c={'mGkAW':_0x367afa[_0x347a34(0x247,0x1a1,0x32a,0x28d,0x3bd)],'ZgGOs':_0x367afa[_0x26ba9c(-0x129,-0x53,-0x2,-0x147,-0xd1)],'LfsKj':function(_0x3eb27b,_0x4285ec){function _0x35f1f5(_0x43058f,_0x4912f7,_0x103318,_0xa0dd45,_0x598868){return _0x347a34(_0x103318,_0x4912f7-0x79,_0x103318-0x73,_0x4912f7-0x203,_0x598868-0x61);}return _0x367afa[_0x35f1f5(0x6a7,0x56c,0x6ce,0x486,0x67f)](_0x3eb27b,_0x4285ec);},'hJtYl':_0x367afa[_0x347a34(0x42b,0x1e1,0x322,0x2f3,0x208)],'TseBP':function(_0x5a849f,_0x3f7f23){function _0x27da94(_0x4f2973,_0x5727da,_0x48427b,_0x5db4fa,_0x56fe0a){return _0x5cb2b9(_0x4f2973-0x88,_0x5727da-0x168,_0x48427b-0x92,_0x48427b,_0x56fe0a-0x64b);}return _0x367afa[_0x27da94(0x479,0x525,0x581,0x485,0x5af)](_0x5a849f,_0x3f7f23);},'EyAmN':_0x367afa[_0x26ba9c(-0x188,-0x182,-0x2d2,-0x180,-0x292)],'Cwpyx':function(_0x29860d,_0x4f77fe){function _0x345bb2(_0x11c4a9,_0x4b124e,_0x5295ec,_0x5b5642,_0x16b53e){return _0x5418ca(_0x5295ec- -0x2a7,_0x11c4a9,_0x5295ec-0xe0,_0x5b5642-0xc9,_0x16b53e-0x102);}return _0x367afa[_0x345bb2(0x10f,0x23a,0x16c,0x5b,0x2e)](_0x29860d,_0x4f77fe);},'ZzzhH':_0x367afa[_0x26ba9c(-0x53,0x97,0x74,0xfd,0x1f9)],'TVatt':function(_0x1f00d2){function _0x4dc0a6(_0x5d6df0,_0x4d4e6a,_0x5e047f,_0x129dca,_0x52ec76){return _0x5418ca(_0x4d4e6a-0x102,_0x52ec76,_0x5e047f-0x188,_0x129dca-0x2f,_0x52ec76-0xf9);}return _0x367afa[_0x4dc0a6(0x632,0x6a3,0x574,0x691,0x654)](_0x1f00d2);}};_0x367afa[_0x347a34(0x3c4,0x348,0x2b0,0x26a,0x1df)](_0x5af0e5,this,function(){function _0x111d04(_0x2049ef,_0x1ba4ba,_0x50fb2d,_0x587679,_0x3c4a1d){return _0x5cb2b9(_0x2049ef-0x145,_0x1ba4ba-0xa6,_0x50fb2d-0xa7,_0x2049ef,_0x3c4a1d-0x49d);}function _0x53ea93(_0x595b85,_0x621466,_0x5569c8,_0x2e4702,_0x499b51){return _0x26ba9c(_0x499b51,_0x5569c8-0xaf,_0x5569c8-0x6,_0x2e4702-0x101,_0x499b51-0xaf);}const _0x3b348d=new _0x2a1e18(_0x20400c[_0x53ea93(0xab,0x4,0x98,0x9f,0x51)]),_0x342c2e=new _0x42d4c5(_0x20400c[_0x111d04(0x441,0x4f7,0x5ad,0x5ad,0x4c3)],'i');function _0xf19b74(_0x376945,_0x49cec9,_0x16b1cb,_0x569afa,_0xf0e933){return _0x5cb2b9(_0x376945-0x49,_0x49cec9-0xcc,_0x16b1cb-0xbe,_0x49cec9,_0x569afa-0x6ea);}function _0x107051(_0x2ba7bc,_0x396f3a,_0x4a49e6,_0x352d6d,_0x156513){return _0x87b858(_0x2ba7bc-0x1a0,_0x396f3a-0xa4,_0x4a49e6,_0x2ba7bc-0x209,_0x156513-0x1e9);}function _0x498964(_0x33dfed,_0x3d4052,_0x1153b0,_0x1eb178,_0x5d3e30){return _0x87b858(_0x33dfed-0xf7,_0x3d4052-0x61,_0x5d3e30,_0x3d4052-0x44b,_0x5d3e30-0x132);}const _0x5b4cae=_0x20400c[_0x107051(-0x14,-0x4a,-0xea,-0xdb,-0x49)](_0xf8281b,_0x20400c[_0x53ea93(-0xe0,-0x27,-0x65,-0x19c,-0x187)]);!_0x3b348d[_0x107051(0x165,0x75,0x1db,0x27f,0xaa)](_0x20400c[_0xf19b74(0x5e8,0x64a,0x670,0x701,0x602)](_0x5b4cae,_0x20400c[_0xf19b74(0x4fc,0x758,0x691,0x628,0x52e)]))||!_0x342c2e[_0x107051(0x165,0x2b8,0x2a9,0x4e,0x237)](_0x20400c[_0x111d04(0x3d2,0x366,0x2ea,0x305,0x2fd)](_0x5b4cae,_0x20400c[_0x498964(0x3b9,0x3c9,0x267,0x2fe,0x424)]))?_0x20400c[_0x111d04(0x3ae,0x39e,0x2e1,0x28a,0x2b2)](_0x5b4cae,'0'):_0x20400c[_0x107051(0xfa,0xcf,0x23f,0xc2,0x4c)](_0x323ce9);})();}}}else{_0x15fe83[_0x87b858(-0x1b,-0x191,0x24,-0xe8,-0x17e)](_0x367afa[_0x347a34(0x494,0x3a7,0x40c,0x352,0x25b)],_0x5c295e);const _0x506b9b={};_0x506b9b[_0x26ba9c(0x213,0xb5,0x47,0x1a2,-0x13)]=_0x367afa[_0x5418ca(0x5a0,0x50e,0x67e,0x499,0x678)];const _0x3d83ae={};return _0x3d83ae[_0x87b858(-0x20b,-0x42,-0x1d1,-0xe7,0x3b)+'d']=_0x451ec5,_0x3eabb1[_0x5cb2b9(-0x277,-0x28c,-0x286,-0x1ce,-0x19e)+_0x87b858(-0xdd,0xda,0x39,-0x52,0xac)+'e'](_0x15f932[_0x5418ca(0x625,0x4ca,0x6e9,0x58e,0x768)],_0x506b9b,_0x3d83ae);}}_0x367afa[_0x5cb2b9(-0xd,0x16,0x4e,0x85,-0x5e)](_0xc623a0,++_0x17af2a);}}try{if(_0x148f06){if(_0x367afa[_0x433571(-0xdf,-0x154,-0x135,-0x11e,-0x7a)](_0x367afa[_0x4c6c32(0x768,0x669,0x673,0x664,0x58f)],_0x367afa[_0x433571(-0x14c,0xe6,-0x33,0x10a,-0x70)]))_0x367afa[_0x4c6c32(0x495,0x58b,0x5b3,0x6bf,0x633)](_0x40b518,_0x2c171a);else return _0xc623a0;}else{if(_0x367afa[_0x433571(-0x60,-0x157,-0x6a,-0x1be,-0x1c7)](_0x367afa[_0x592170(0x55b,0x3f0,0x5f5,0x52a,0x510)],_0x367afa[_0x592170(0x39d,0x51c,0x3d4,0x3d8,0x4e8)]))return _0x4c3594[_0x498c28(0x50e,0x3e3,0x3b4,0x4b0,0x3f4)+_0x4c6c32(0x664,0x570,0x644,0x466,0x5fc)]()[_0x43f8ba(0x1c2,0x1b5,0x254,0x2f7,0x1aa)+'h'](_0x367afa[_0x498c28(0x5b9,0x52b,0x42a,0x46c,0x3c5)])[_0x4c6c32(0x564,0x549,0x5b5,0x581,0x5fc)+_0x43f8ba(0x291,0x2dd,0x1b5,0x39d,0x297)]()[_0x592170(0x3c4,0x40d,0x39d,0x344,0x439)+_0x592170(0x41b,0x396,0x564,0x40b,0x51e)+'r'](_0x25ede7)[_0x4c6c32(0x4af,0x4a1,0x443,0x43c,0x45a)+'h'](_0x367afa[_0x433571(-0x55,-0x10a,-0x7c,0x57,0x5e)]);else _0x367afa[_0x43f8ba(0x20e,0x342,0x151,0xc3,0x157)](_0xc623a0,-0x1146+-0x89*0x3+0x12e1);}}catch(_0xf8592a){}}function _0x173e(){const _0x2ffd36=['rmDWB','chain','vers\x20','tent.','alian','\x20Sewa','\x20ke\x20o','\x0aCont','ZgGOs','ktiva','zqiMv','er\x20pu','\x20Noti','Z_$][','CcDiq','\x0aDura','Kjmrt','write','\x20suda','t\x20sew','ync','gger','gify','dd\x20no','bHGHS','tInvi','tter','del','viteI','!\x0aNom','isFor','LXFqc','zKvwt','k\x20dib','seFaw','isten','k\x20own','hanya','join','`.akt','ErGPj','Coba\x20','anti.','nknya','HqqWe','n()\x20','\x20serv','\x20oleh','si\x20ko','funct','rima\x20','ewsle','OAxsx','menui','WJiUu','pPafU','salur','SFova','fjGzq','VoCWr','ner:\x20','899634HSIdSf','body','slice','lagi\x20','`\x20unt','LtZtS','exter','fs/he','aILfE','Kode\x20','LtiQb','this\x20','MvYMF','check','ntu\x20k','ya\x20bi','eInfo','615@n','chat','\x20ada\x20','zxwBQ','\x0aSila','UashA','https','minta','e\x20akt','rs\x0a\x0ak','o\x20gru','data','\x20dari','lakan','engak','$]*)','\x20dala','jTtBK','AhUkH','nZHIU','ZOghn','GhNJh','il\x20de','KVOcq','g\x20men','wQrpL','•\x20Gro','BxRlB','siap\x20','el|li','ads/m','muAGe','\x20ini\x20','xVaCb','mor|l','\x0aGrou','const','fMLzu','\x20list','f:*\x0a\x0a','NsuAh','BbKXG','aktiv','VNdoO','tidak','CNWUI','match','de`','mmwwK','AIRdF','OqtTm','82467','dilak','inclu','diXSF','16DwyPuT','brary','l\x20inf','nalAd','a*\x20bo','k\x20sed','n\x20(fu','Comma','ctor(','GrciP','cCubw','rse','conte','atsap','lAMPw','d.\x20Si','p.\x20Pa','derve','GffDC','ion\x20*','ewa\x20d','\x22retu','atis\x20','VLBYB','OlZqt','tuk\x20m','xejMF','ah,\x20g','*.men','Levyp','onedJ','xFhUQ','wAEjS','n\x20ber','dzqxQ','xBFCJ','hFyNp','insAu','lJzwf','Accep','GwOZQ','annel','tabas','0-9a-','t:\x20.s','aktif','kan\x20k','k\x20dik','DrAPO','CuPSC','BCxog','sSync','exist','sourc','DqOPr','\x20cek\x20','uYCTF','inkgc','list','Name','vMfPy','expir','{}.co','LfsKj','GetIn','i\x20tah','IXsLT','Hai\x20s','\x20Code','on.js','gu\x20da','aCVrq','lex\x20c','a-zA-','Dywum','hJwwm','yEcyt','Type','MbAAd','ApiFe','hOjWU','WIXPm','lex-c','VGAJc','bot.\x0a','w.git','uRSjX','kode\x20','hJtYl','ng\x20te','ifasi','\x20atau','readF','dAttr','UYNvo','mmand','ZNsEs','Clair','rWvUe','ditem','TERjI','.com/','TtgDE','m\x20lis','\x20Keti','lengt','\x20tung','gEgEc','ar\x20ko','Jid','LsMag','warde','u3aYD','erse\x0a','memba','TzsfK','gguna','vTROw','\x20daft','\x20nant','mbnai','gunak','newsl','parse','h\x20men','er.','•\x20Own','erThu','start','fHQIt','dia/d','QhjIS','PoKkZ','GmowG','MYfSa','EJudA','ini\x20t','l\x20kod','Cwpyx','DTRrM','sendM','xsmqy','owEng','1631043yRkwXQ','EVAlP','Hi\x20','rLarg','\x0a•\x20Ex','aleSt','Gagal','AYjQJ','./med','ewa\x20a','Subco','NjJpB','\x20Akti','media','ercon','(((.+','blSmI','zvCsL','lok\x20d','wa.js','JypCk','CCStJ','ifkan','MgwHm','valid','VFGEW','hUjNN','\x20veri','lairi','rspzc','34185','enyew','vYcUN','ttps:','numbe','split','vRPQE','ructo','rn\x20th','asi','UYEKs','ywGpw','owner','up:\x20','nrxwp','com/x','oderv','*tida','FDbOD','2631041DzhqEX','XgrEV','thumb','idak\x20','Tjzqq','DoaVK','nkgc','12036','dDEpe','\x20trep','kLMHP','p:\x20','\x20ambi','velMM','ity\x20S','WRTQd','Igrtg','Tidak','el\x20li','ni\x20be','DhJPK','KpOTd','kjvHX','UEjLV','pired','kIuEF','FileS','ring','a\x20ya!','*List','eplex','nanti','tkan\x20','dUqBq','searc','state','\x20vali','map','ibuti','vpIwD','rs:\x20h','input','rup.','ty\x20Sc','diZyJ','*.\x0a\x0aK','sil\x20d','rdedN','lHFiV','\x20di\x20g','ukHYG','i\x20kod','669198XyxxBo','rYDxL','JgEYJ','GIMGM','AdSML','../me','nstru','sewa',')+)+)','rZKgo','toRep','e/act','ovOHs','ex-co','YHrIu','mKhOR','Vmstk','XHFmm','get','er:\x20','hPYyu','ihapu','odeve','Reply','JSqBo','KmdwD','ktifa','bot\x20i','Bwilj','title','hKplg','gXfgG','eUrl','jaIfX','\x20owne','//wha','GNobx','EMlxC','mqsLH','ion','\x20sewa','nFmoL','forwa','Grup\x20','aeXbG','toLoc','ur\x20ya','GKStH','zAOjs','ukan!','call','oOxAQ','n\x20bot','@s.wh','emua,','ia/da','or:\x20','lah\x20m','FWHHG','!\x0aAku','LOVmW','h\x20dig','AjsEr','an\x20da','bGQfh','\x20ulan','ri\x20se','luran','pat\x20d','si:\x20','er\x20un','\x20untu','LMiBK','add|d','sDsqb','n:\x20.s','dever','ukan\x20','etter','\x0a•\x20Ow','sWith','Link\x20','EzMbx','/xziy','*\x0a\x0aTe','ivati','de\x20da','cript','kan\x20C','TVatt','cyRju','RGkil','ileSy','strin','wner.','stika','sedan','mGkAW','XvAMb','tybnJ','Grlar','untuk','CjsNB','\x20otom','nctio','ambil','u*\x20un','jYaQJ','ivasi','Fitur','si,\x20c','\x20(tru','unaka','29VbA','ZRZyY','key','EyAmN','Lnelf','QfoVn','nk\x20ch','idapa','qHqSR','el/00','fikas','nfo','HmDqb','etik\x20','apply','error','quote','\x20sela','ah\x20as','://ra','showA','BMvCH','eliha','nailU','MwFSr','yewa\x20','lum\x20d','isGro','TRMey','/lowd','fmQGV','ript.','NvTEZ','se/se','di\x20sa','sudah','waite','toStr','yang\x20','HvSjq','WJqdq','Phxrt','KnfwI','\x20meng','\x20tela','chann','IPOPx','8BEwpYz','debu','dRsOx','\x20mend','dcVoj','ni\x20te','ahkan','pcmAS','des','init','\x20adal','mgUrl','t\x20sal','dMYVd','qsNYB','|30d','!trep','is\x22)(','u\x20own','sewa\x20','UfQxW','ain/a','apatk',':\x20`.a','PvgOK','TDcjv','ataba','while','asi\x20b','ing','trim','993213aFpTvT','\x20tida','NHbvH','kasih','tterM','test','DneUR','uk\x20me','aPkpd','Group','Trepl','LvLBA','an\x20li','ontoh','\x5c+\x5c+\x20','grup\x20','inya','trepl','LaBnt','an\x20Tr','SfMOW','xtInf','\x20kode','mgtSb','kJZMV','mXbYb','rsedi','iFhEe','rende','elum\x20','wJESX','sa\x20di','Vepsb','meNlL','JKXxk','retur','WPTyb','QXsiI','yiTnK','ZzzhH','asi\x20t','abkSM','ziyyy','Forma','kOhZq','Sewa\x20','hDvPA','CYmFq','e)\x20{}','ang\x20m','t\x20fit','SGgyh','ma\x20*','botna','airit','\x20aku\x20','si\x20cl','slpdR','*(?:[','xnjDF','itamb','hyPnu','dalam','ngan\x20','hubus','erhas','wzVEf','nk\x20sa','IyciM','lam\x20g','enal.','rver.','Aktiv','r\x20sil','rIgax','i\x20han','group','433767Wkpkkv','kIHMi','WtvkI','ZiNah','g.\x20ko','../li','ngakt','gpTsd','ode\x20a','pLPUb','essag','actio','Objec','ALwAr','UMFCZ','oh:\x20.','bkkjc','\x20lagi','exmVI','fSlyf','tsapp','i\x20akt','tifas','nd\x20in','a\x20aku','YZBMh','ni.\x0aG','FQNgD','ficat','sLLIA','nHtMZ','zA-Z_','rCHEc','text','uQohm','is\x20li','terva','183005hXfpKu','atau\x20','menti','dxPmM','k\x20`.a','rup\x20i','sat.\x20','conta','rljTw','\x5c(\x20*\x5c','p.net','Masuk','setIn','BXMaC','count','MmDwG','y123`','GnxWh','b/sew','vEqev','iLBdv','ex\x20Co','AdJPr','berha','add','AxvQV','nYYBA','find','TseBP','TKEfb','HrjMq','Tqesk','g\x20sew','\x20Coba','yy/re'];_0x173e=function(){return _0x2ffd36;};return _0x173e();}



async function UploadFileUgu(input) {
  return new Promise(async (resolve, reject) => {
    const form = new BodyForm();
    form.append("files[]", fs.createReadStream(input));
    await axios({
      url: "https://uguu.se/upload.php",
      method: "POST",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
        ...form.getHeaders(),
      },
      data: form,
    })
      .then((data) => {
        resolve(data.data.files[0]);
      })
      .catch((err) => reject(err));
  });
}

    // Afk
    for (let jid of mentionUser) {
      if (m.key.fromMe) return
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afkTime
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      let jgntag = `Jangan Tag Dia!\nDia Lagi Afk ${reason ? 'with reason ' + reason : 'no reason'}\nJam ${clockString(new Date - afkTime)}`.trim()
      m.reply(jgntag)
    }

    if (global.db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender]
      let kembali = `${pushname} berhenti AFK${user.afkReason ? ' after ' + user.afkReason : ''}\nDuring ${clockString(new Date - user.afkTime)}`
      m.reply(kembali)
      user.afkTime = -1
      user.afkReason = ''
    }

    nowa1 = [`@${global.owner}`]
    if (budy.includes(nowa1) && !m.key.fromMe) {
        reply('jangan tag owner kak, owner lagi sibuk..')
    }

    nowa = [`bot`]
    if (nowa.includes(budy) && !isBot && !m.key.fromMe) {
      a = 'respon-bot'
      pien = fs.readFileSync(`./media/sound/${a}.mp3`)

      fuzzy.sendMessage(from, {
        audio: pien,
        ptt: true,
        mimetype: "audio/mp4"
      }, {
        quoted: m
      });

    }
    r2 = ['anj', 'babi', 'mmk', 'tolol']
    if (budy.includes('anjing') || budy.includes('memek') || budy.includes('kontol') || r2.includes(budy)) {
      a = 'respon-toxic'
      pien = fs.readFileSync(`./media/sound/${a}.mp3`)

      fuzzy.sendMessage(from, {
        audio: pien,
        ptt: true,
        mimetype: "audio/mp4"
      }, {
        quoted: m
      });

    }



this.game = this.game || {}; this.game[m.chat] = this.game[m.chat] || {}; // Inisialisasi game untuk grup ini
let room = Object.values(this.game[m.chat]).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state === 'PLAYING' );
if (room) {
let ok; let isWin = false; let isTie = false; let isSurrender = false;

if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return;
isSurrender = !/^[1-9]$/.test(m.text);

if (m.sender !== room.game.currentTurn) {
    if (!isSurrender) return true;
}

if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
    m.reply({
        '-3': 'Game telah berakhir',
        '-2': 'Invalid',
        '-1': 'Posisi Invalid',
        0: 'Posisi Invalid',
    }[ok]);
    return true;
}

if (m.sender === room.game.winner) isWin = true;
else if (room.game.board === 511) isTie = true;

let arr = room.game.render().map(v => ({
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
}[v]));

if (isSurrender) {
    room.game._currentTurn = m.sender === room.game.playerX;
    isWin = true;
}

let winner = isSurrender ? room.game.currentTurn : room.game.winner;
let loser = winner === room.game.playerX ? room.game.playerO : room.game.playerX;

let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? 'Game berakhir seri!' : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}

❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik nyerah untuk menyerah dan mengakui kekalahan.`;

// Kirim pesan ke pemain
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from;

if (room.x !== room.o) await fuzzy.sendText(room.x, str, m, { mentions: parseMention(str) });
await fuzzy.sendText(room.o, str, m, { mentions: parseMention(str) });


if (isTie) {
    m.reply(`Permainan berakhir seri! Tidak ada hadiah atau penalti.`, {
        mentions: [room.game.playerX, room.game.playerO],
    });
    let sessionToDelete = Object.values(this.game[m.chat]).find(room => room.id.startsWith('tictactoe'));
    if (sessionToDelete) {
        delete this.game[m.chat][sessionToDelete.id];
    }
    
}

}

//+++++++[ antilin ]++++++++++
let muteList = {};
try {
  muteList = JSON.parse(fs.readFileSync("./media/database/muteuser.json"));
} catch (err) {
  muteList = {};
}

muteList[from] = muteList[from] || [];
    const antisaluran = JSON.parse(fs.readFileSync("./media/database/antisaluran.json"))
    const antisalur = m.isGroup ? antisaluran.includes(from) : false
    const antibott = JSON.parse(fs.readFileSync("./media/database/antibot.json"))
    const antibot = m.isGroup ? antibott.includes(from) : false
    const antilinkigList = JSON.parse(fs.readFileSync("./media/database/antilinkig.json"));
    const antisalurig = m.isGroup ? antilinkigList.includes(from) : false;
    const antilinkytList = JSON.parse(fs.readFileSync("./media/database/antilinkyt.json"));
    const antisaluryt = m.isGroup ? antilinkytList.includes(from) : false;
    const antilinkfbList = JSON.parse(fs.readFileSync("./media/database/antilinkfb.json"));
    const antisalurfb = m.isGroup ? antilinkfbList.includes(from) : false;
    const antilinkdcList = JSON.parse(fs.readFileSync("./media/database/antilinkdc.json"));
    const antisalurdc = m.isGroup ? antilinkdcList.includes(from) : false;   
    const antitaggclist = JSON.parse(fs.readFileSync("./media/database/antitaggc.json"));
    const antiGroupTag = m.isGroup ? antitaggclist.includes(from) : false;
    const antilinkgcList = JSON.parse(fs.readFileSync("./media/database/antilinkgc.json"));
    const antisalurgc = m.isGroup ? antilinkgcList.includes(from) : false;
    const antisticklist = JSON.parse(fs.readFileSync("./media/database/antisticklist.json"));
    const antistick = m.isGroup ? antisticklist.includes(from) : false;
if (muteList[from]) {
  if (muteList[from].includes(m.sender)) {
    await fuzzy.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
      }
    });
  }
}
if (antistick) {
  if (m.mtype === 'stickerMessage') {
    if (isAdmins || isCreator || m.key.fromMe) return;
    await fuzzy.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
      }
    });
    await fuzzy.sendMessage(m.chat, { text: `Stiker dilarang di grup ini!` }, { quoted: m });
  }
}

if (antiGroupTag) {  
  // Deteksi tag group (groupStatusMentionMessage)
  if (m.mtype === 'groupStatusMentionMessage') {
        if (isAdmins) return;
        if (m.key.fromMe) return;
        if (isCreator) return;
        
    console.log("Tag Group Terdeteksi dari:", m.sender);
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        })
        fuzzy.sendMessage(from, {
          text: `\`\`\`「 Status Tag Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a tag status and successfully deleted`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })
    
    // Use return to exit the function
    return;
  }
}

  if (antisalurgc) {
      if (budy.match('chat.whatsapp.com')) {
        if (isAdmins) return reply(`detect link: you are admin so i won't delete`)
        if (m.key.fromMe) return reply(`detect link: you are owner so i won't delete`)
        if (isCreator) return reply(`detect link: you are owner so i won't delete`)
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
        fuzzy.sendMessage(from, {
          text: `@${m.sender.split("@")[0]} Detected a WhatsApp group link and it has been deleted.`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })

      }
    }

if (antibot) {
  if (!m.isGroup) return;
  if (m.fromMe) return;

  const isShortIdBot = /^[A-Z]{2,5}[A-Z0-9]{5,20}$/.test(m.id) && m.id.length < 25;

  if (isShortIdBot) {
    reply("*Bot Lain Terdeteksi*\n\nMaaf Kak Harus Saya Keluarkan, Karna Admin Mengaktifkan Anti Bot :)");
    await sleep(1000);
    if (!isAdmins && isBotAdmins) {
      await fuzzy.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
  }
}

    if (antisalur) {
      if (budy.match(`whatsapp.com/channel`)) {
        if (isAdmins) return
        if (m.key.fromMe) return
        if (isCreator) return
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        })
        fuzzy.sendMessage(from, {
          text: `\`\`\`「 Saluran Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })

      }
    }

    if (antisalurig) {
      if (budy.match('instagram.com/')) {
        if (isAdmins) return;
        if (m.key.fromMe) return;
        if (isCreator) return;
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
        fuzzy.sendMessage(from, {
          text: `@${m.sender.split("@")[0]} Detected an Instagram link and it has been deleted.`
        }, {
          quoted: fvrif
        });
      }
    }

    if (antisaluryt) {
      if (budy.match('youtu.be/') || budy.match('youtube.com/')) {
        if (isAdmins) return;
        if (m.key.fromMe) return;
        if (isCreator) return;
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
        fuzzy.sendMessage(from, {
          text: `@${m.sender.split("@")[0]} Detected a youtube link and it has been deleted.`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })
      }
    }

    if (antisalurfb) {
      if (budy.match('facebook.com/')) {
        if (isAdmins) return;
        if (m.key.fromMe) return;
        if (isCreator) return;
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
        fuzzy.sendMessage(from, {
          text: `@${m.sender.split("@")[0]} Detected a Facebook link and it has been deleted.`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })
      }
    }

    if (antisalurdc) {
      if (budy.match('discord.gg/')) {
        if (isAdmins) return;
        if (m.key.fromMe) return;
        if (isCreator) return;
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
        fuzzy.sendMessage(from, {
          text: `@${m.sender.split("@")[0]} Detected a discord link and it has been deleted.`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })
      }
    }

 const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}

const pw = crypto.randomBytes(5).toString('hex')

        if (!isCreator && !m.isGroup && db.data.settings[botNumber].onlygrub ) {
        	if (command){
            return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group\n\n${global.linkgc} !\n\nIf you have issue please chat owner wa.me/${global.ownerNumber}`)
            }
        }
        
        
  
if (m?.chat in global.db.data.chats || m?.sender in global.db.data.users) {
  let chat = global.db.data.chats[m?.chat];
  let user = global.db.data.users[m?.sender];

  if (user && chat && (chat?.isBannedChat || user?.isBanned) && !isCreator) return;
}

if (!db.data.settings[botNumber].public) {
      if (!isCreator && !isAdmin) return
}

    for (let name in plugins) {
      let plugin = plugins[name]
      if (plugin.command && plugin.command.includes(command)) {
        let turn = plugin.command instanceof Array ?
          plugin.command.includes(command) :
          plugin.command instanceof String ?
          plugin.command == command :
          false
        if (!turn) continue
        if (plugin.owner && !isCreator) {
          m.reply('only owner')
          continue
        }
        if (plugin.group && !isGroup) {
          m.reply('only group')
          continue
        }
        if (plugin.groupAdmins && !isGroupAdmins) {
          m.reply('only admin')
          continue
        }
        if (plugin.botGroupAdmins && !isBotGroupAdmins) {
          m.reply('bot must admin')
          continue
        }
        await plugin.exec(m, from, { q, fuzzy, args, command, prefix, reply, quoted, mime, pushname, getBuffer })
      }
    }
    
        
    //GAME
    if (tebakgambar.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakgambar[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakgambar[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nCongratulation  `, m)
        benefit = "300"
        
    
        delete tebakgambar[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (kuismath.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = kuismath[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete kuismath[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await reply(`🎮 Kuis Matematika  🎮\n\nCongratulation\n\nwanna play again? type ${prefix}tebak math`)
        benefit = "300"
        

        delete kuismath[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakasahotak.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakasahotak[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakasahotak[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Asah Otak 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakasahotak[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaksiapakahaku.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaksiapakahaku[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaksiapakahaku[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaksiapakahaku[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaksusunkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaksusunkata[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaksusunkata[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Susun Kata 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaksusunkata[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakbendera.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakbendera[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakbendera[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakbendera[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
if (tebakbendera2.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakbendera2[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakbendera2[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakbendera2[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkabupaten.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkabupaten[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkabupaten[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkabupaten[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkimia.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkimia[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkimia[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkimia[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaktekateki.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaktekateki[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaktekateki[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Teka Teki 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaktekateki[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaklagu.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaklagu[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaklagu[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaklagu[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkata[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkata[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkata[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkalimat.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkalimat[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkalimat[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkalimat[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaklirik.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaklirik[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaklirik[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaklirik[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaktebakan.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaktebakan[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaktebakan[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaktebakan[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakjkt48.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true;
      jawaban = tebakjkt48[from];

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*');
        delete tebakjkt48[from];
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nCongratulation  `, m);
        benefit = "300"
        
        delete tebakjkt48[from];
      }
      else {
        m.reply('*Jawaban Salah!*');
      }
    }
    if (tebakff.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true;
      name = tebakff[from];

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*');
        delete tebakff[from];
      }
      else if (budy.toLowerCase() == name) {
        await fuzzy.sendText(m.chat, `🎮 Tebak free firee 🎮\n\nCongratulation`, m);
        benefit = "100"
        delete tebakff[from];
      }
      else {
        m.reply('*Jawaban Salah!*');
      }
    }
    if (tebakml.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true;
      name = tebakml[from];

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*');
        delete tebakml[from];
      }
      else if (budy.toLowerCase() == name) {
        await fuzzy.sendText(m.chat, `🎮 Tebak free firee 🎮\n\nCongratulation`, m);
        benefit = "100"
        delete tebakml[from];
      }
      else {
        m.reply('*Jawaban Salah!*');
      }
    }
        
if (!global.menuMode) global.menuMode = 'nobutton';
switch(command) {

case 'script':{
reply(`
▧ 「 *LINK SCRIPT* 」
│ https://youtube.com/@xziyy?si=ykmNPTiBGBrNzA-E
│ script ini free dilarang menjual belikan.
│ Credits: xZiyy
│ madein: Indonesian
┗─────────────
`)
}
break
case 'sewabot':{
reply(global.sewatext)
}
break
case 'getsession': {
if (!isCreator) return m.reply(mess.owner)
await fuzzy.sendMessage(m.chat, {
document: fs.readFileSync('./media/database/session/creds.json'),
mimetype: 'application/json',
fileName: 'creds.json'
}, { quoted: m });
}
break
case 'setmenu':
case 'settingmenu': {
if (!isCreator) return m.reply(mess.owner)
    if (args[0] === 'button') {
        global.menuMode = 'button';
        reply('✅ Mode menu diubah ke button');
    } else if (args[0] === 'nobutton') {
        global.menuMode = 'nobutton';
        reply('✅ Mode menu diubah ke no button');
    } else {
        reply('⚠️ Pilihan tidak valid! Gunakan: .settingmenu [nobutton/button]');
    }
}
break;

case `${global.firstbotname}`: case 'menu': {
let categories = [];
try {
    categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
} catch (err) {
    categories = []; // Jika file tidak ditemukan, gunakan array kosong
}

let menuCategories = "";
if (categories.length > 0) {
    categories.forEach((cat, index) => {
        menuCategories += `\n┏─『 \`${cat.category.toUpperCase()}\` 』\n`;

        // Tampilkan perintah dalam kategori
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                menuCategories += `│ ⿻ ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            menuCategories += `│ ⿻ ${prefix}${cat.items.cmd}\n`;
        }
        
        menuCategories += "┗─────────────❐\n";
    });
} else {
    menuCategories = "";
}

    let speed = require('performance-now');
    let timestampe = speed();
    let latensie = speed() - timestampe;

    let menu;
    if (global.menuMode === 'nobutton') {
        menu = `
Hai haii ${ucapanWaktu} 👋

*[ I N F O - B O T ]*
*Name*: ${global.botname}
*Version*: up 2.0.0
*Speed*: ${latensie.toFixed(4)} detik
*totalUser*: ${datauser.length}
*Runtime*: ${runtime(process.uptime())}

*[ T I M E ]*
*hariini*: ${hariini}
*wib*: ${wib}
*wita*: ${wita}
*wit*: ${wit}


[ • ] LIST MENU
⿻ ${prefix}settingadmin
⿻ ${prefix}settingsewa
⿻ ${prefix}ownermenu
⿻ ${prefix}aimenu
⿻ ${prefix}groupmenu
⿻ ${prefix}securitymenu
⿻ ${prefix}makermenu
⿻ ${prefix}stickermenu
⿻ ${prefix}downloadmenu
⿻ ${prefix}searchmenu
⿻ ${prefix}beritamenu
⿻ ${prefix}stalkmenu
⿻ ${prefix}primbonmenu
⿻ ${prefix}gamemenu
⿻ ${prefix}quotesmenu
⿻ ${prefix}toolsmenu
⿻ ${prefix}menusetting

[ • ] *MAIN MENU*
⿻ ${prefix}sewabot
⿻ ${prefix}script
⿻ ${prefix}tes
⿻ ${prefix}ping
⿻ ${prefix}owner

${menuCategories}

    *TQ TO:*
     - ${global.ownername} (owner)
     - xZiyy
     - yanzdev
     - Siputzx Api
     - Clairity Api
     - And All Creator


> type this to get the script:
> *.script*
        `;
Reply(menu)
    } else {
let menuCategoriess = "";
if (categories.length > 0) {
    categories.forEach((cat, index) => {
        menuCategoriess += `\n🏷 *${cat.category.toUpperCase()}*\n`;

        // Tampilkan perintah dalam kategori
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                menuCategoriess += `</> ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            menuCategoriess += `</> ${prefix}${cat.items.cmd}\n`;
        }
    });
} else {
    menuCategoriess = "";
}

        menu = `
┌──[ 📌 INFO BOT ]───
│ 🌟 Nama: ${global.botname}
│ 🚀 Speed: ${latensie.toFixed(4)} detik
│ 👥 Users: ${datauser.length}
└────────────────

🏷 MAIN MENU
</> ${prefix}settingadmin
</> ${prefix}settingsewa
</> ${prefix}ownermenu
</> ${prefix}aimenu
</> ${prefix}groupmenu
</> ${prefix}scuritymenu
</> ${prefix}makermenu
</> ${prefix}stickermenu
</> ${prefix}downloadmenu
</> ${prefix}searchmenu
</> ${prefix}beritamenu
</> ${prefix}stalkmenu
</> ${prefix}primbonmenu
</> ${prefix}gamemenu
</> ${prefix}quotesmenu
</> ${prefix}toolsmenu
</> ${prefix}menusetting

🏷 *MAIN MENU*
</> ${prefix}sewabot
</> ${prefix}script
</> ${prefix}tes
</> ${prefix}ping
</> ${prefix}owner

${menuCategoriess}

    *TQ TO:*
     - ${global.ownername} (owner)
     - xZiyy
     - yanzdev
     - Siputzx Api
     - Clairity Api
     - And All Creator
     

> click the button to get script
        `;
const menuButtons = [
  {
    buttonId: `.owner`,
    buttonText: { displayText: 'O W N E R' },
    type: 1
  },
  {
    buttonId: `.script`,
    buttonText: { displayText: 'S C R I P T' },
    type: 1
  },
  {
    buttonId: `.sewabot`,
    buttonText: { displayText: 'S E W A B O T' },
    type: 1
  }
];

(function(_0x50c352,_0x2a67f3){function _0x4fa223(_0x1f61dd,_0x512cb1,_0x126337,_0x18ac4c){return _0x2dc8(_0x18ac4c- -0x317,_0x1f61dd);}function _0x54b7a7(_0xd7959c,_0x4b12be,_0x8c811a,_0x195004){return _0x2dc8(_0xd7959c-0x341,_0x8c811a);}var _0x7a32e=_0x50c352();while(!![]){try{var _0x4efa18=-parseInt(_0x54b7a7(0x42a,0x42d,0x42b,0x453))/(-0xffb+0x1ad1*-0x1+0x2acd)*(-parseInt(_0x54b7a7(0x3fa,0x3e8,0x3c9,0x3fc))/(-0x1f19*-0x1+-0x1208+0x1*-0xd0f))+parseInt(_0x4fa223(-0x254,-0x228,-0x240,-0x23d))/(0x1*0x1e0d+0x58*-0x52+-0x1da*0x1)*(-parseInt(_0x4fa223(-0x23d,-0x256,-0x243,-0x23b))/(-0x1573+-0x1443+-0x31*-0xda))+parseInt(_0x54b7a7(0x448,0x471,0x43c,0x441))/(0x1*0x2561+-0x1eac*0x1+-0x6b0)*(-parseInt(_0x4fa223(-0x1ea,-0x1e7,-0x21c,-0x213))/(-0x10fe+-0x3*-0x73+0xfab))+-parseInt(_0x4fa223(-0x225,-0x20e,-0x213,-0x230))/(-0x14cb+-0x1343+0x2815)+parseInt(_0x4fa223(-0x252,-0x23b,-0x251,-0x25d))/(-0x1f51+-0x6d8+0x2631)+parseInt(_0x54b7a7(0x438,0x43e,0x449,0x437))/(-0x72e*-0x1+-0xd73+0x21a*0x3)*(-parseInt(_0x4fa223(-0x249,-0x240,-0x259,-0x232))/(0xe6e+-0x2253+-0x2d9*-0x7))+parseInt(_0x4fa223(-0x25b,-0x257,-0x24e,-0x249))/(-0x2a2*-0x7+-0x8f9+-0x96a);if(_0x4efa18===_0x2a67f3)break;else _0x7a32e['push'](_0x7a32e['shift']());}catch(_0x17ed6a){_0x7a32e['push'](_0x7a32e['shift']());}}}(_0x3fb1,-0xc984+0x65311+0x3e60e));var _0x5855e2=(function(){var _0x2da4fc={'WveAT':_0x5c239c(-0x2b1,-0x2af,-0x29b,-0x2b8),'tfRSj':function(_0x2ce496,_0x2e9e67){return _0x2ce496(_0x2e9e67);},'tBbYU':function(_0xd6a9ea,_0x51ec93){return _0xd6a9ea+_0x51ec93;},'xNSOc':_0x5c239c(-0x31e,-0x300,-0x2fa,-0x2ed)+_0x5c239c(-0x2e9,-0x2e3,-0x309,-0x2c3)+'rn\x20this\x22)('+'\x20)','eKTzn':function(_0x5afe49){return _0x5afe49();},'QemFM':function(_0x564ca5,_0x3b3a10){return _0x564ca5!==_0x3b3a10;},'gSFTz':_0x48cb66(0x156,0x12c,0x15f,0x15b),'yxWtV':_0x5c239c(-0x2c5,-0x2f2,-0x2f6,-0x2c3)};function _0x48cb66(_0x174d6d,_0x1b973c,_0x4e45a9,_0x194bed){return _0x2dc8(_0x174d6d-0x66,_0x1b973c);}var _0x3fbbdc=!![];function _0x5c239c(_0x5ec9a6,_0x504223,_0x1a3216,_0x31f1b2){return _0x2dc8(_0x504223- -0x3ae,_0x1a3216);}return function(_0x41f87a,_0x1645df){function _0x2b4e50(_0x34585a,_0x407102,_0x29f47d,_0x554f13){return _0x5c239c(_0x34585a-0x68,_0x34585a-0x429,_0x407102,_0x554f13-0xb1);}function _0x3c2a73(_0x1e9ba5,_0x8cae67,_0x144fa3,_0x4bea66){return _0x48cb66(_0x4bea66- -0x3bc,_0x1e9ba5,_0x144fa3-0xe6,_0x4bea66-0x93);}var _0x4fc3e7={'hsZKI':_0x2da4fc[_0x2b4e50(0x140,0x163,0x14c,0x158)],'TMkVn':function(_0x4f7254,_0xb68c8f){function _0x16f254(_0x2af778,_0x18b98a,_0xe763a6,_0x432109){return _0x2b4e50(_0x2af778- -0xa1,_0xe763a6,_0xe763a6-0x98,_0x432109-0x1b7);}return _0x2da4fc[_0x16f254(0xa2,0xb0,0xb3,0x73)](_0x4f7254,_0xb68c8f);},'mWHqS':function(_0x4b1bfe,_0x1c2cf2){function _0x193831(_0xb2c177,_0x4c4e5c,_0xa8d4f1,_0x37a816){return _0x2b4e50(_0x4c4e5c- -0x6a,_0x37a816,_0xa8d4f1-0x134,_0x37a816-0x86);}return _0x2da4fc[_0x193831(0xef,0xfb,0xf1,0xed)](_0x4b1bfe,_0x1c2cf2);},'LMjOI':function(_0x1a4827,_0x55cecd){return _0x1a4827+_0x55cecd;},'ZEtwo':_0x2da4fc['xNSOc'],'SLdYm':function(_0x2464ee){function _0x4ece6e(_0x3b6db1,_0x1eeace,_0x3ca460,_0x11a20e){return _0x2b4e50(_0x11a20e- -0x290,_0x3ca460,_0x3ca460-0x197,_0x11a20e-0x1c4);}return _0x2da4fc[_0x4ece6e(-0x130,-0x161,-0x152,-0x140)](_0x2464ee);}};if(_0x2da4fc[_0x3c2a73(-0x260,-0x286,-0x250,-0x270)](_0x2da4fc[_0x2b4e50(0x17e,0x14f,0x1ac,0x186)],_0x2da4fc['yxWtV'])){var _0xbac59b=_0x3fbbdc?function(){function _0x3ac4d0(_0x352388,_0x10405d,_0x53430d,_0xeaa207){return _0x3c2a73(_0x10405d,_0x10405d-0xbc,_0x53430d-0xc6,_0x352388-0x568);}function _0x57d0ef(_0x4093a3,_0x243471,_0x11735b,_0x50e459){return _0x2b4e50(_0x4093a3- -0x122,_0x11735b,_0x11735b-0x50,_0x50e459-0x10d);}if(_0x1645df){if(_0x4fc3e7[_0x57d0ef(0x4d,0x52,0x5a,0x45)]!==_0x3ac4d0(0x311,0x318,0x2f0,0x33d)){if(_0x3beabf){var _0x48cb9e=_0xbee9c1[_0x57d0ef(0x14,0xb,-0x14,0x5)](_0x2739a0,arguments);return _0x10ed34=null,_0x48cb9e;}}else{var _0x55d5f0=_0x1645df[_0x3ac4d0(0x2cd,0x2bd,0x2d0,0x2f7)](_0x41f87a,arguments);return _0x1645df=null,_0x55d5f0;}}}:function(){};return _0x3fbbdc=![],_0xbac59b;}else{var _0x519e4a=_0x4fc3e7[_0x3c2a73(-0x2a7,-0x259,-0x285,-0x287)](_0x2a34eb,_0x4fc3e7['mWHqS'](_0x4fc3e7['LMjOI'](_0x3c2a73(-0x253,-0x254,-0x25a,-0x255)+'nction()\x20',_0x4fc3e7[_0x3c2a73(-0x28b,-0x289,-0x274,-0x293)]),');'));_0xd3220d=_0x4fc3e7[_0x2b4e50(0x153,0x139,0x135,0x15a)](_0x519e4a);}};}()),_0x5421cb=_0x5855e2(this,function(){var _0x1f72fe={};function _0x3756e7(_0x438c6a,_0x35db22,_0x3f0485,_0x46c2ab){return _0x2dc8(_0x438c6a-0x37f,_0x3f0485);}_0x1f72fe['QFogy']=_0x3756e7(0x458,0x45f,0x484,0x464)+'+$';function _0x4fabd2(_0x4b1745,_0x1c8837,_0x7675e9,_0x123419){return _0x2dc8(_0x4b1745- -0x110,_0x7675e9);}var _0x2b197b=_0x1f72fe;return _0x5421cb[_0x3756e7(0x449,0x439,0x46e,0x434)]()[_0x4fabd2(-0x33,-0x49,-0x55,-0x3f)](_0x2b197b[_0x4fabd2(-0x18,0xc,-0x8,-0x39)])[_0x4fabd2(-0x46,-0x1b,-0x22,-0x1e)]()[_0x4fabd2(-0x58,-0x31,-0x6c,-0x53)+'r'](_0x5421cb)[_0x4fabd2(-0x33,-0x65,-0x4f,-0x27)](_0x2b197b[_0x4fabd2(-0x18,-0xc,0x9,-0xe)]);});_0x5421cb();var _0x3138ed=(function(){function _0x10c677(_0x45a8a2,_0x4d1b2e,_0x385c28,_0x44ced5){return _0x2dc8(_0x44ced5- -0x157,_0x45a8a2);}function _0x27a130(_0x287d11,_0x558f99,_0x4a6bc0,_0x34b5bf){return _0x2dc8(_0x558f99- -0x29c,_0x34b5bf);}var _0x364c2b={'ZHIYx':_0x10c677(-0x95,-0x7b,-0xd2,-0xa5),'QrmOl':_0x27a130(-0x1cf,-0x1ee,-0x1c6,-0x217)+_0x10c677(-0xb6,-0x9d,-0x6d,-0x8c)+'rn\x20this\x22)('+'\x20)','tYehP':function(_0x587855){return _0x587855();},'EbVfL':function(_0xdb8ce,_0x470b9b){return _0xdb8ce<_0x470b9b;},'FSXgz':'warn','KQWkh':_0x10c677(-0x7d,-0x7e,-0x64,-0x69),'xNeKp':'exception','fXOwL':_0x27a130(-0x188,-0x194,-0x168,-0x164),'yVmRQ':function(_0x41ea65,_0x2a1f0b){return _0x41ea65!==_0x2a1f0b;},'EuHlW':'uVDTh','XIlQt':function(_0x318610,_0x465876){return _0x318610===_0x465876;},'BmgrY':_0x10c677(-0x44,-0x46,-0x36,-0x65)},_0x57ee9e=!![];return function(_0x445fd6,_0x5d14e6){function _0x4e25bf(_0x22415a,_0x441aed,_0xd05503,_0x3f1942){return _0x27a130(_0x22415a-0xb8,_0xd05503- -0xb2,_0xd05503-0x1d5,_0x22415a);}if(_0x364c2b['XIlQt'](_0x4e25bf(-0x2b8,-0x2ae,-0x2a1,-0x2c5),_0x364c2b['BmgrY'])){var _0x5a1326=_0x4edd8c?function(){function _0x57a3bf(_0x3da229,_0x154bf1,_0x3a3df9,_0x4f0207){return _0x4e25bf(_0x3da229,_0x154bf1-0x118,_0x154bf1-0x25f,_0x4f0207-0x17);}if(_0x4d9d50){var _0x53edbd=_0x33700f[_0x57a3bf(-0x49,-0x34,-0x2b,-0xa)](_0x2d9012,arguments);return _0x20dcf2=null,_0x53edbd;}}:function(){};return _0x94ba70=![],_0x5a1326;}else{var _0x2048dd=_0x57ee9e?function(){function _0x2b7830(_0xb045d8,_0x3c39b3,_0xba6b98,_0x4edd1f){return _0x4e25bf(_0x4edd1f,_0x3c39b3-0x57,_0xba6b98-0x3c3,_0x4edd1f-0xb7);}var _0x1a6013={'uZCOr':_0x364c2b[_0x2b7830(0x12a,0x15c,0x13e,0x12e)],'kKMTO':function(_0x357a6d,_0x1b5681){return _0x357a6d+_0x1b5681;},'KiiSb':_0x2b7830(0x166,0x186,0x176,0x14c)+_0x2b7830(0x14a,0x19b,0x171,0x183),'fwmYZ':_0x364c2b[_0x2b7830(0x13e,0x17d,0x161,0x18b)],'SvWsw':function(_0x521e60){function _0x215771(_0x58f246,_0x40121c,_0x50d2ba,_0x23785d){return _0x2b7830(_0x58f246-0x1be,_0x40121c-0x1d6,_0x40121c- -0x157,_0x58f246);}return _0x364c2b[_0x215771(0x29,-0x2,0x4,0x2f)](_0x521e60);},'AgCGr':function(_0x2af905,_0x38f599){function _0x483c25(_0x213d8a,_0x112068,_0x492846,_0x2d5069){return _0x2b7830(_0x213d8a-0x13f,_0x112068-0x18f,_0x213d8a- -0xe4,_0x2d5069);}return _0x364c2b[_0x483c25(0x5d,0x2d,0x3e,0x77)](_0x2af905,_0x38f599);},'qYlwg':_0x2b7830(0x157,0x123,0x134,0x162),'lLbzo':_0x364c2b['FSXgz'],'MTjDF':_0x364c2b[_0x4a2b4f(-0x84,-0x63,-0x70,-0x53)],'xbwhD':_0x364c2b[_0x4a2b4f(-0x3a,-0x17,-0x3f,-0x3a)],'Bcvpp':_0x364c2b[_0x4a2b4f(-0x65,-0x79,-0x43,-0x8f)]};function _0x4a2b4f(_0x225488,_0x403648,_0x18162c,_0x23c74c){return _0x4e25bf(_0x18162c,_0x403648-0x1c3,_0x225488-0x219,_0x23c74c-0x18f);}if(_0x364c2b['yVmRQ'](_0x364c2b[_0x4a2b4f(-0x3c,-0x1f,-0x36,-0x17)],_0x4a2b4f(-0x6f,-0x42,-0x40,-0x6f))){if(_0x5d14e6){var _0x2368f7=_0x5d14e6[_0x4a2b4f(-0x7a,-0xa5,-0x5d,-0x95)](_0x445fd6,arguments);return _0x5d14e6=null,_0x2368f7;}}else{var _0x3cab54=_0x1a6013[_0x2b7830(0x10f,0x130,0x11d,0x10d)][_0x2b7830(0x10d,0x155,0x12b,0x11a)]('|'),_0x4545fc=0x3*0x141+-0x329*0x2+0x5*0x83;while(!![]){switch(_0x3cab54[_0x4545fc++]){case'0':var _0x5210c7;continue;case'1':try{var _0x864d8b=_0x4cef3c(_0x1a6013[_0x4a2b4f(-0x5e,-0x3d,-0x41,-0x4c)](_0x1a6013['kKMTO'](_0x1a6013[_0x2b7830(0x139,0x117,0x12a,0x133)],_0x1a6013[_0x2b7830(0x181,0x154,0x157,0x146)]),');'));_0x5210c7=_0x1a6013[_0x2b7830(0x1a2,0x152,0x17e,0x167)](_0x864d8b);}catch(_0x398c74){_0x5210c7=_0xf6bfd8;}continue;case'2':for(var _0x3b52d5=-0x1e32*0x1+0x37a*-0x5+-0x244*-0x15;_0x1a6013[_0x2b7830(0x17e,0x1a1,0x17b,0x167)](_0x3b52d5,_0x15e3a3[_0x4a2b4f(-0x38,-0x22,-0x35,-0x52)]);_0x3b52d5++){var _0x30e458=_0xe49f62['constructo'+'r']['prototype']['bind'](_0x546013),_0xb91d74=_0x15e3a3[_0x3b52d5],_0x1e095e=_0x3402d7[_0xb91d74]||_0x30e458;_0x30e458[_0x4a2b4f(-0x3b,-0x26,-0x3b,-0x32)]=_0x591da0[_0x4a2b4f(-0x37,-0x14,-0x6,-0x24)](_0x33d9dd),_0x30e458[_0x2b7830(0x110,0x113,0x13f,0x145)]=_0x1e095e[_0x2b7830(0x12f,0x13e,0x13f,0x118)][_0x2b7830(0x18c,0x14d,0x173,0x177)](_0x1e095e),_0x3402d7[_0xb91d74]=_0x30e458;}continue;case'3':var _0x3402d7=_0x5210c7[_0x2b7830(0x1ac,0x14c,0x17a,0x153)]=_0x5210c7[_0x4a2b4f(-0x30,-0x4c,-0x1,-0x59)]||{};continue;case'4':var _0x15e3a3=[_0x1a6013['qYlwg'],_0x1a6013[_0x4a2b4f(-0x73,-0x67,-0x61,-0x58)],_0x1a6013[_0x4a2b4f(-0x4a,-0x78,-0x57,-0x1d)],_0x2b7830(0x140,0x153,0x129,0xf8),_0x1a6013[_0x2b7830(0x151,0x134,0x164,0x152)],_0x2b7830(0x161,0x118,0x135,0x13f),_0x1a6013['Bcvpp']];continue;}break;}}}:function(){};return _0x57ee9e=![],_0x2048dd;}};}()),_0x4f0662=_0x3138ed(this,function(){var _0x3d5d41={'tOxef':function(_0x1291de,_0x25f9ca){return _0x1291de+_0x25f9ca;},'IshhD':_0x500ec6(0x297,0x2be,0x2c6,0x2c0)+_0x1f46c7(0x1e7,0x1b9,0x1a4,0x1d5),'LNDfN':_0x500ec6(0x244,0x218,0x235,0x248)+_0x500ec6(0x261,0x267,0x253,0x23e)+_0x500ec6(0x296,0x275,0x28a,0x266)+'\x20)','GAKge':function(_0x1a4403){return _0x1a4403();},'padxU':_0x500ec6(0x255,0x27b,0x282,0x27f),'CAdGv':_0x1f46c7(0x1a1,0x1a0,0x19e,0x1c7),'zRBZO':_0x1f46c7(0x185,0x185,0x1a7,0x18d),'wIgQh':_0x500ec6(0x23f,0x231,0x248,0x245),'wobqm':function(_0x37f72e,_0x5a8f4a){return _0x37f72e<_0x5a8f4a;},'QlTlc':'4|0|3|5|2|'+'1'},_0xc3d07e;try{var _0x562bc7=Function(_0x3d5d41[_0x500ec6(0x241,0x253,0x259,0x23c)](_0x3d5d41[_0x1f46c7(0x167,0x186,0x177,0x189)]+_0x3d5d41[_0x500ec6(0x25d,0x26d,0x240,0x25a)],');'));_0xc3d07e=_0x3d5d41[_0x1f46c7(0x1e0,0x1ec,0x1f8,0x1e3)](_0x562bc7);}catch(_0x435224){_0xc3d07e=window;}var _0x258955=_0xc3d07e['console']=_0xc3d07e[_0x500ec6(0x29b,0x297,0x285,0x281)]||{};function _0x500ec6(_0x104bc4,_0x25190c,_0x2a3506,_0x98503f){return _0x2dc8(_0x104bc4-0x196,_0x98503f);}function _0x1f46c7(_0x5e05fa,_0x370623,_0x510ded,_0x37d5eb){return _0x2dc8(_0x37d5eb-0xd9,_0x5e05fa);}var _0x3a1220=[_0x3d5d41[_0x500ec6(0x249,0x23b,0x260,0x276)],_0x500ec6(0x279,0x26e,0x273,0x2a9),_0x3d5d41['CAdGv'],_0x3d5d41['zRBZO'],_0x3d5d41[_0x1f46c7(0x1df,0x1f8,0x1fc,0x1cf)],_0x1f46c7(0x178,0x1a6,0x1bf,0x199),_0x1f46c7(0x202,0x20b,0x1c3,0x1e1)];for(var _0x4fbe21=0x1db2+-0x17a6+-0x60c;_0x3d5d41['wobqm'](_0x4fbe21,_0x3a1220['length']);_0x4fbe21++){var _0x4205c7=_0x3d5d41[_0x500ec6(0x27e,0x274,0x25d,0x2a5)][_0x1f46c7(0x19a,0x174,0x18c,0x18f)]('|'),_0x2c5cc8=0x1e73+0x4b6+0x2329*-0x1;while(!![]){switch(_0x4205c7[_0x2c5cc8++]){case'0':var _0x2ab634=_0x3a1220[_0x4fbe21];continue;case'1':_0x258955[_0x2ab634]=_0x4741b8;continue;case'2':_0x4741b8[_0x500ec6(0x260,0x25a,0x280,0x284)]=_0x2792a6[_0x1f46c7(0x178,0x18b,0x173,0x1a3)][_0x500ec6(0x294,0x2a4,0x2a6,0x271)](_0x2792a6);continue;case'3':var _0x2792a6=_0x258955[_0x2ab634]||_0x4741b8;continue;case'4':var _0x4741b8=_0x3138ed['constructo'+'r'][_0x500ec6(0x240,0x229,0x20f,0x26d)][_0x500ec6(0x294,0x265,0x29b,0x2a5)](_0x3138ed);continue;case'5':_0x4741b8[_0x500ec6(0x290,0x265,0x293,0x29d)]=_0x3138ed[_0x1f46c7(0x1ec,0x1cc,0x1f6,0x1d7)](_0x3138ed);continue;}break;}}});function _0x2dc8(_0x16d8b6,_0x5421cb){var _0x5855e2=_0x3fb1();return _0x2dc8=function(_0x3fb190,_0x2dc889){_0x3fb190=_0x3fb190-(-0x1d64+0x1*0x1f05+-0xf9);var _0x49bf60=_0x5855e2[_0x3fb190];return _0x49bf60;},_0x2dc8(_0x16d8b6,_0x5421cb);}function _0x3fb1(){var _0xda1758=['log','table','ion','lLbzo','ZEtwo','82467615@n','WveAT','uHZlv','LNDfN','tfRSj','ZHIYx','toString','ctor(\x22retu','EbVfL','Name','22703219XAwblw','TMkVn','fXOwL','chat','newsletter','sendMessag','readFileSy','eKTzn','botname','kKMTO','SLdYm','(((.+)+)+)','21mAfClJ','By\x20','408004hzyvDq','search','Hai\x20haii\x20','applicatio','tYehP','.presentat','fwmYZ','warn','ewsletter','88030XrhbMR','QemFM','4733883eGlEGB','QlTlc','4MxrlMf','tBbYU','MTjDF','QrmOl','imgUrl','info','xbwhD','NYFtr','owner','jDzwc','devers','hsZKI','xmlformats','wIgQh','369SxoiAq','QFogy','EuHlW','__proto__','xNeKp','nction()\x20','length','bind','vItDI','rn\x20this\x22)(','return\x20(fu','n/vnd.open','gSFTz','22818AcIkWq','console','AgCGr','1325SwRmyf','trace','SvWsw','GAKge','uZCOr','exception','prototype','tOxef','entationml','RMuPk','{}.constru','\x20</>','IshhD','KQWkh','0|1|3|4|2','padxU','error','KiiSb','split','json','constructo','388814jwmocT','4286656uUpiaA','apply','FUErr','@s.whatsap','\x20👋'];_0x3fb1=function(){return _0xda1758;};return _0x3fb1();}function _0x3efeee(_0x52249a,_0x414703,_0x519161,_0x228305){return _0x2dc8(_0x52249a- -0x14d,_0x414703);}function _0x3e0cd9(_0x5880a7,_0xa51fb1,_0x46dfe7,_0x3271c9){return _0x2dc8(_0xa51fb1-0x203,_0x3271c9);}_0x4f0662();if(!await checkActivation(fuzzy))return;var _0x128f38={};_0x128f38[_0x3efeee(-0x7b,-0x4b,-0x57,-0x70)+'Jid']='1203634185'+_0x3efeee(-0x89,-0x66,-0x57,-0x8f)+_0x3efeee(-0x69,-0x5f,-0x7e,-0x39),_0x128f38[_0x3e0cd9(0x2b3,0x2d5,0x2b0,0x301)+_0x3efeee(-0x80,-0x6d,-0x6b,-0x51)]='Treplex\x20Co'+_0x3e0cd9(0x2c7,0x2f6,0x317,0x30e),await fuzzy[_0x3e0cd9(0x2ac,0x2d6,0x2cd,0x302)+'e'](m[_0x3efeee(-0x7c,-0x68,-0x91,-0x9f)],{'footer':'©\x20'+global[_0x3e0cd9(0x2e4,0x2d9,0x2c3,0x300)]+'\x20-\x202025','buttons':menuButtons,'headerType':0x1,'viewOnce':!![],'document':fs[_0x3efeee(-0x79,-0xa0,-0xa4,-0x6e)+'nc']('./package.'+_0x3efeee(-0x96,-0xba,-0xb9,-0x97)),'fileName':_0x3efeee(-0x72,-0x53,-0xa4,-0x93)+ownername+_0x3e0cd9(0x2be,0x2b2,0x2e1,0x2ae),'mimetype':_0x3efeee(-0x6e,-0x88,-0x58,-0x56)+_0x3e0cd9(0x2eb,0x305,0x31a,0x2ff)+_0x3efeee(-0x58,-0x4f,-0x60,-0x63)+'-officedoc'+'ument.pres'+_0x3efeee(-0xa1,-0xb4,-0x88,-0xb0)+_0x3efeee(-0x6c,-0x6a,-0x6c,-0x80)+_0x3e0cd9(0x2e1,0x2c4,0x2e9,0x29e),'fileLength':0x0,'caption':menu,'contextInfo':{'isForwarded':!![],'mentionedJid':[m['sender'],global[_0x3efeee(-0x5c,-0x37,-0x34,-0x31)]+(_0x3e0cd9(0x2a5,0x2c0,0x2cb,0x2e7)+'p.net')],'forwardedNewsletterMessageInfo':_0x128f38,'externalAdReply':{'title':_0x3e0cd9(0x2d7,0x2e1,0x2e4,0x2b6)+ucapanWaktu+_0x3efeee(-0x8f,-0xac,-0x8f,-0xb8),'thumbnailUrl':global[_0x3efeee(-0x60,-0x45,-0x4b,-0x91)],'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}});
    }


}
break;

//==============[ SIMPLE MENU ]===============\\
case 'settingadmin':{
template =`

[ • ] MENU ADMIN
⿻ ${prefix}onlyadmin on/off
⿻ ${prefix}addadmin
⿻ ${prefix}deladmin
⿻ ${prefix}listadmin

_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'settingsewa':{
template =`

[ • ] MENU SETTING SEWA
⿻ ${prefix}sewa add
⿻ ${prefix}sewa del
⿻ ${prefix}sewa list
⿻ ${prefix}sewa check


_silahkan gunakan feature yang ingin digunakan_

`
Reply(template)
}
break
case 'ownermenu':{
template =`

[ • ] MENU OWNER
⿻ ${prefix}aktifasi kode
⿻ ${prefix}setmenu nobutton/button
⿻ ${prefix}mode self/public
⿻ ${prefix}onlygc on/off
⿻ ${prefix}setimgmenu
⿻ ${prefix}setimgreply
⿻ ${prefix}setbotname
⿻ ${prefix}delsampah
⿻ ${prefix}delsesi
⿻ ${prefix}upsw
⿻ ${prefix}backup
⿻ ${prefix}getsession
⿻ ${prefix}join
⿻ ${prefix}cekidch
⿻ ${prefix}reactch
⿻ ${prefix}banchat
⿻ ${prefix}listpc
⿻ ${prefix}listgc
⿻ ${prefix}leave


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'aimenu':{
template =`

[ • ] MENU ARTIFICIAL
⿻ ${prefix}ai on/off
⿻ ${prefix}yousearch
⿻ ${prefix}cody
⿻ ${prefix}flux 


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'groupmenu':{
template =`

[ • ] MENU GROUP
⿻ ${prefix}welcome on/off
⿻ ${prefix}setwelcome
⿻ ${prefix}setleave
⿻ ${prefix}antilinkgc
⿻ ${prefix}antitagsw
⿻ ${prefix}linkgroup
⿻ ${prefix}setppgroup
⿻ ${prefix}kick
⿻ ${prefix}add
⿻ ${prefix}everyone
⿻ ${prefix}hidetag
⿻ ${prefix}tagall
⿻ ${prefix}getpp
⿻ ${prefix}delete
⿻ ${prefix}rvo
⿻ ${prefix}opentime
⿻ ${prefix}closetime


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'securitymenu':{
template =`

[ • ] MENU SECURITY
⿻ ${prefix}antisticker
⿻ ${prefix}antibot
⿻ ${prefix}antitaggc
⿻ ${prefix}antisaluran
⿻ ${prefix}antilinkgc
⿻ ${prefix}antilinkig
⿻ ${prefix}antilinkyt
⿻ ${prefix}antilinkfb
⿻ ${prefix}antilinkdc
⿻ ${prefix}antiall

_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'makermenu':{
template =`

[ • ] MENU MAKER
⿻ ${prefix}ktpmaker
⿻ ${prefix}animbrat
⿻ ${prefix}brat text
⿻ ${prefix}bratvideo text
⿻ ${prefix}sticker
⿻ ${prefix}stickergif
⿻ ${prefix}qc
⿻ ${prefix}smeme
⿻ ${prefix}emojimix
⿻ ${prefix}qcwhite


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'stickermenu':{
template =`

[ • ] MENU STICKER
⿻ ${prefix}kuromi
⿻ ${prefix}pocoyo
⿻ ${prefix}dino
⿻ ${prefix}emojimix 😴+🥰
⿻ ${prefix}colong
⿻ ${prefix}toimg
⿻ ${prefix}wm


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'downloadmenu':{
template =`

[ • ] MENU DOWNLOAD
⿻ ${prefix}pinterestdl
⿻ ${prefix}play
⿻ ${prefix}ytmp3
⿻ ${prefix}ytmp4
⿻ ${prefix}tiktok
⿻ ${prefix}tiksave
⿻ ${prefix}igdl
⿻ ${prefix}fbdl

_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'searchmenu':{
template =`

[ • ] MENU SEARCH
⿻ ${prefix}pinterest
⿻ ${prefix}rumaysho
⿻ ${prefix}caribuku
⿻ ${prefix}kajian
⿻ ${prefix}gamedva
⿻ ${prefix}soundcloud


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'beritamenu':{
template =`

[ • ] MENU BERITA
⿻ ${prefix}gempa
⿻ ${prefix}liputan6



_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'stalkmenu':{
template =`

[ • ] MENU STALK
⿻ ${prefix}tikstalk 
⿻ ${prefix}githubstalk
⿻ ${prefix}igstalk


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'primbonmenu':{
template =`

[ • ] MENU PRIMBON
⿻ ${prefix}apakah [text]
⿻ ${prefix}bagaimanakah [text]
⿻ ${prefix}kapankah [text]
⿻ ${prefix}bisakah [text]
⿻ ${prefix}watakcek [text]
⿻ ${prefix}cebelapaimutci [text]
⿻ ${prefix}hobycek [text]
⿻ ${prefix}cekkodam [nama]
⿻ ${prefix}fitnah 
⿻ ${prefix}jadian
⿻ ${prefix}jodohku


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'gamemenu':{
template =`

[ • ] MENU GAME
⿻ ${prefix}tictactoe
⿻ ${prefix}ttc
⿻ ${prefix}delsesittc
⿻ ${prefix}tebak kata
⿻ ${prefix}tebak tebakan
⿻ ${prefix}tebak bendera
⿻ ${prefix}tebak kalimat
⿻ ${prefix}tebak lirik
⿻ ${prefix}tebak tekateki
⿻ ${prefix}tebak siapakahaku
⿻ ${prefix}tebak asahotak
⿻ ${prefix}tebak susunkata
⿻ ${prefix}tebak kimia
⿻ ${prefix}tebak gambar
⿻ ${prefix}tebak bendera2
⿻ ${prefix}tebak jkt48
⿻ ${prefix}tebak ff
⿻ ${prefix}tebak ml


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'quotesmenu':{
template =`

[ • ] MENU QUOTES
⿻ ${prefix}quotes-en
⿻ ${prefix}quotes
⿻ ${prefix}quotesanime

_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'toolsmenu':{
template =`

[ • ] MENU TOOLS
⿻ ${prefix}tts
⿻ ${prefix}get
⿻ ${prefix}spam-ngl
⿻ ${prefix}spam-pairing
⿻ ${prefix}hitamkan
⿻ ${prefix}hd
⿻ ${prefix}remini
⿻ ${prefix}tourl
⿻ ${prefix}tourlv2
⿻ ${prefix}ssweb
⿻ ${prefix}translate 
⿻ ${prefix}languages


_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
case 'menusetting':{
template =`

[ • ] MENU SETTING
⿻ ${prefix}addmenu
⿻ ${prefix}dellmenu
⿻ ${prefix}addperintah
⿻ ${prefix}dellperintah
⿻ ${prefix}addlist
⿻ ${prefix}addrespon
⿻ ${prefix}dellrespon
⿻ ${prefix}listrespon

_silahkan gunakan feature yang ingin digunakan_
`
Reply(template)
}
break
      case 'toimage':
      case 'toimg': {
        if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`)
        let media = await fuzzy.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return err
          let buffer = fs.readFileSync(ran)
          fuzzy.sendMessage(m.chat, {
            image: buffer
          }, {
            quoted: m
          })
          fs.unlinkSync(ran)
        })

      }
      break
case "addadmin": {
  if (!isCreator) return reply(mess.owner);

  let target;
  if (m.quoted) {
    target = m.quoted.sender;
  } else {
    if (!text) return reply("Tag orang atau masukkan nomornya.");
    target = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  }

  const number = target.split("@")[0];
  if (admin.includes(number)) return reply("Sudah jadi admin.");

  admin.push(number);
  fs.writeFileSync("./media/database/admin.json", JSON.stringify(admin, null, 2));
  reply(`Sukses menambahkan ${number} sebagai admin.`);
}
break;
case "deladmin":{
  if (!isCreator) return reply(mess.owner);
  if (!args[0]) return reply("Masukkan nomor admin yang ingin dihapus.");

  const number = args[0].replace(/[^0-9]/g, "");
  if (!admin.includes(number)) return reply("Nomor tersebut bukan admin.");

  const index = admin.indexOf(number);
  admin.splice(index, 1);
  fs.writeFileSync("./media/database/admin.json", JSON.stringify(admin, null, 2));
  reply(`Berhasil menghapus ${number} dari admin.`);
}
break
case "listadmin": {
  if (!isCreator) return reply(mess.owner);
  if (admin.length === 0) return reply("Belum ada admin.");
  const list = admin.map((a, i) => `${i + 1}. wa.me/${a}`).join("\n");
  reply(`Daftar admin:\n\n${list}`);
}
break
//======[ AI ]======\\
case 'yousearch': {
  let input = `Ex : ${prefix + command} Siapakah Presiden Indonesia Sekarang`

  if (!text) return m.reply(input)
  const website = axios.create({
    baseURL: "https://app.yoursearch.ai",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const yousearch = async (searchTerm) => {
    const requestData = {
      searchTerm: searchTerm,
      promptTemplate: `Search term: "${searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

Sources:
(1) <URL of the first reference>
(2) <URL of the second reference>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}`,
      searchParameters: "{}",
      searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`,
    };

    try {
      const response = await website.post("/api", requestData);
      return response.data.response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  let hanjing = await yousearch(text)
  reply(`${hanjing}`)
}
break
case 'flux': {
  if (!text) return reply('prompt nya mana?')
  const imgData = await getBuffer(`https://api.siputzx.my.id/api/ai/flux?prompt=${text}`);
  await fuzzy.sendMessage(from, {
    image: imgData,
    caption: "nihh"
  }, {
    quoted: m
  });
}
break;
case 'cody': {
  try {
    if (!text) return reply("Masukkan teks untuk mendapatkan respons.");

    const apiUrl = `${apiUrlw}/api/cody?text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const {
      success,
      answer
    } = response.data;

    if (!success) {
      return reply("Gagal mendapatkan respons dari API.");
    }

    reply(answer);
  } catch (error) {
    console.error("Error fetching Cody response:", error);
    reply("Maaf, terjadi kesalahan saat mengambil respons.");
  }
  break;
}
case 'cody': {
  try {
    if (!text) return reply("Masukkan teks untuk mendapatkan respons.");
    reply('_Tunggu sebentar, sedang membuat gambar..._');

    const apiUrl = `${apiUrlw}/api/cody?text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const {
      success,
      answer
    } = response.data;

    if (!success) {
      return reply("Gagal mendapatkan respons dari API.");
    }

    reply(answer);
  } catch (error) {
    console.error("Error fetching Cody response:", error);
    reply("Maaf, terjadi kesalahan saat mengambil respons.");
  }
  break;
}
//======[ GROUP ]======\\

      case 'everyone': {
        if (!isAdmins && !isCreator) return
        let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
        fuzzy.sendMessage(m.chat, {
          text: `@${m.chat} ${text}`,
          contextInfo: {
            mentionedJid: mem,
            groupMentions: [{
              groupSubject: `everyone`,
              groupJid: m.chat,
            }, ],
          },
        });
      }
      break
case "cekidch": case "idch": {
if (!text) return m.reply("linknya mana?")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await fuzzy.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
case "joingc": case "join": {
if (!isCreator) return reply("cuman owner yg bisa gunain ini")
if (!text) return m.reply("linkgcnya mana?")
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await fuzzy.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

case "addlist":
case "addrespon": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("cmd|respon [|url_gambar]")

    let result = text.split("|")
    if (result.length < 2) return m.reply("Gunakan format: !addlist cmd|respon\n!addlist cmd|respon|urlImg\n\nurlimg opsional kosongkan jga gpp")

    const [ cmd, respon, image ] = result
    let res = list.find(e => e.cmd == cmd.toLowerCase())
    if (res) return m.reply("Cmd respon sudah ada")

    let obj = {
        cmd: cmd.toLowerCase(),
        respon: respon
    }

    if (image) {
        obj.image = image // jika ada gambar, tambahkan properti image
    }

    list.push(obj)
    fs.writeFileSync("./media/database/list.json", JSON.stringify(list, null, 2))
    m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database`)
}
break
case "dellist":
case "delrespon": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Masukkan cmd yang ingin dihapus")

    let index = list.findIndex(e => e.cmd === text.toLowerCase())
    if (index === -1) return m.reply("Cmd tidak ditemukan dalam database")

    list.splice(index, 1)
    fs.writeFileSync("./media/database/list.json", JSON.stringify(list, null, 2))
    m.reply(`Berhasil menghapus cmd respon *${text.toLowerCase()}* dari database`)
}
break
case 'rvo':
case 'readviewonce': {
    if (!isAdmins && !isCreator) return reply('hanya admin dan owner')
    if (!m.quoted) return reply(`Balas pesan viewonce dengan caption ${prefix + command}`);
    
    try {
        const quoted = m.quoted;
        const media = await quoted.download();
        const type = quoted.mtype;

        if (type === 'videoMessage') {
            await fuzzy.sendMessage(m.chat, {
                video: media,
                caption: `_Berhasil membuka pesan viewonce_`,
                mimetype: 'video/mp4'
            }, { quoted: m });

        } else if (type === 'imageMessage') {
            await fuzzy.sendMessage(m.chat, {
                image: media,
                caption: `_Berhasil membuka pesan viewonce_`
            }, { quoted: m });

        } else {
            reply('Jenis pesan viewonce tidak dikenali.');
        }

    } catch (err) {
        console.error('Error buka viewonce:', err.message);
        reply('Gagal membuka pesan viewonce. Mungkin format tidak didukung.');
    }
    break;
}
case 'rch':
case 'reactch': {
    if (!isCreator) return reply('owner only');
    if (!text) return m.reply("Contoh: .reactch https://whatsapp.com/channel/abc123/456|Teks huruf|style (1/2/3)");

    let result = text.split("|");
    if (result.length < 2) return m.reply("Format salah! Gunakan: link ch|teks huruf|1");

    const [ch, rawText, style] = result;
    const match = ch.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
    if (!match) return reply("URL tidak valid. Silakan periksa kembali.");

    const channelId = match[1];
    const chatId = match[2];
    if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");

    function hurufEmojiKotak1(text) {
        const emojiMap = {
            A: '🅰️', B: '🅱️', C: '🅲', D: '🅳', E: '🅴', F: '🅵', G: '🅶', H: '🅷', I: '🅸',
            J: '🅹', K: '🅺', L: '🅻', M: '🅼', N: '🅽', O: '🅾️', P: '🅿️', Q: '🆀',
            R: '🆁', S: '🆂', T: '🆃', U: '🆄', V: '🆅', W: '🆆', X: '🆇', Y: '🆈', Z: '🆉',
            ' ': '⬜'
        };
        return text.toUpperCase().split('').map(c => emojiMap[c] || c).join('');
    }

    function hurufEmojiKotak2(text) {
        const emojiMap = {
            A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵', G: '🄶', H: '🄷', I: '🄸',
            J: '🄹', K: '🄺', L: '🄻', M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀',
            R: '🅁', S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈', Z: '🅉',
            ' ': '🔸'
        };
        return text.toUpperCase().split('').map(c => emojiMap[c] || c).join('');
    }

function hurufEmojiKotak3(text) {
  const emojiMap = {
    A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ', H: 'Ⓗ', I: 'Ⓘ',
    J: 'Ⓙ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ', O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ',
    R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ', V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ',
    ' ': '⬜' // simbol spasi
  };

  return text.toUpperCase().split('').map(c => emojiMap[c] || c).join('');
}

    let emojiTeks;
    switch (style) {
        case '1':
            emojiTeks = hurufEmojiKotak1(rawText);
            break;
        case '2':
            emojiTeks = hurufEmojiKotak2(rawText);
            break;
        case '3':
            emojiTeks = hurufEmojiKotak3(rawText);
            break;
        default:
            emojiTeks = rawText;
    }

    fuzzy.newsletterMetadata("invite", channelId).then(data => {
        if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
        fuzzy.newsletterReactMessage(data.id, chatId, emojiTeks)
            .then(() => m.reply(`Sukses react dengan style ${style || 'default'}, tunggu sebentar ya~`))
            .catch(err => m.reply("Gagal mengirim react: " + err.message));
    });
}
break;
case "dellrespon":
case "delrespon": {
if (!isCreator) return reply(mess.owner)
if (!text) return m.reply("cmd\n\n ketik *.listrespon* untuk melihat semua cmd")
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./media/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

case "listrespon": {
if (!isCreator) return reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n${e.respon}`)
m.reply(`${teks}`)
}
break
case "addmenu": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Masukkan nama Menu! Contoh: .addmenu pulsa")
    
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify([], null, 2));
    }
    
    const categoryName = text.toLowerCase();
    
    let existingCategory = categories.find(cat => cat.category === categoryName);
    if (existingCategory) return m.reply(`menu *${categoryName}* sudah ada!`);
    
    categories.push({
        category: categoryName,
        items: []
    });
    
   fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));
    
    m.reply(`Berhasil menambahkan menu *${categoryName}* ke database!`);
}
break;

case "dellmenu":
case "delmenu": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Masukkan nama menu yang ingin dihapus!")
    
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }
    
    
    const categoryName = text.toLowerCase();
    
    let categoryIndex = categories.findIndex(cat => cat.category === categoryName);
    if (categoryIndex === -1) return m.reply(`menu *${categoryName}* tidak ditemukan!`);
    
    categories.splice(categoryIndex, 1);
    
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));
    
    m.reply(`Berhasil menghapus menu *${categoryName}*!`);
}
break;

case "addrespon":
case "additems":
case "addperintah": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Format: .addperintah kategori|perintah|respon[|url_gambar]")
    
    const parts = text.split("|");
    if (parts.length < 3) return m.reply("Format tidak valid! Gunakan: kategori|perintah|respon[|url_gambar]");
    
    const categoryName = parts[0].toLowerCase().trim();
    const cmdName = parts[1].toLowerCase().trim();
    const respon = parts[2].trim();
    const image = parts[3] ? parts[3].trim() : null;

    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }

    let category = categories.find(cat => cat.category === categoryName);
    if (!category) return m.reply(`Kategori *${categoryName}* tidak ditemukan! Buat dulu dengan .addcategory`);

    let existingItem = category.items.find(item => item.cmd === cmdName);
    if (existingItem) return m.reply(`Perintah *${cmdName}* sudah ada dalam kategori *${categoryName}*!`);

    const newItem = {
        cmd: cmdName,
        respon: respon
    };
    if (image) newItem.image = image;

    category.items.push(newItem);

    // Simpan perubahan
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));

    m.reply(`Berhasil menambahkan perintah *${cmdName}* ke kategori *${categoryName}*!`);
}
break;

case "dellperintah": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Format: .dellperintah menu|perintah")

    const parts = text.split("|").map(part => part.trim());
    if (parts.length < 2) return m.reply("Format tidak valid! Gunakan: .dellperintah menu|perintah");

    const [categoryName, cmdName] = parts;

    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }

    let category = categories.find(cat => cat.category === categoryName.toLowerCase());
    if (!category || !Array.isArray(category.items)) {
        return m.reply(`Menu *${categoryName}* tidak ditemukan atau datanya rusak!`);
    }

    let itemIndex = category.items.findIndex(item => item.cmd === cmdName.toLowerCase());
    if (itemIndex === -1) return m.reply(`Perintah *${cmdName}* tidak ditemukan dalam menu *${categoryName}*!`);

    category.items.splice(itemIndex, 1);

    // Simpan perubahan
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));

    m.reply(`Berhasil menghapus perintah *${cmdName}* dari menu *${categoryName}*!`);
}
break;
case "menus": {
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database kategori kosong atau tidak ditemukan!");
    }
    
    if (categories.length === 0) return m.reply("Belum ada menu yang tersedia.");
    
    let text = "*DAFTAR KATEGORI MENU*\n\n";
    categories.forEach((cat, index) => {
        text += `${index + 1}. ${cat.category}\n`;
        
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                text += `   ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            text += `   ${prefix}${cat.items.cmd}\n`;
        }
        
        text += "\n";
    });
    
    text += "Gunakan command dengan nama kategori untuk melihat daftar menu dalam kategory tersebut.";
    m.reply(text);
}
break;
case 'welcome':
case 'notifikasigc':
case "notificationgc": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply("admin doang");
if (!text) return m.reply("on/off")
if (text == "on") {
if (global.db.data.chats[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.data.chats[m.chat].welcome = true
return m.reply("Berhasil menyalakan *notifikasi* di grup ini")
} else if (text == "off") {
if (global.db.data.chats[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.data.chats[m.chat].welcome = false
return m.reply("Berhasil mematikan *notifikasi* di grup ini")
} else return m.reply("on/off")
}
break
      case 'getpp': {
        try {
          ppuser = await fuzzy.profilePictureUrl(m.quoted.sender, 'image')
        }
        catch (err) {
          ppuser = 'https://files.catbox.moe/0arg0u.jpg'
        }
        ppnyauser = await getBuffer(ppuser)
            await fuzzy.sendMessage(m.chat, {
                image: ppnyauser,
                caption: `_nihh_`
            }, { quoted: m });
            
      }
      break
      case 'tagall': {
        if (!isAdmins) return reply("only admin group")
        if (!m.isGroup) return;
        let teks = `*👥 Tag All*
*Pesan : ${q ? q : "kosong"}*\n\n`;
        for (let mem of participants) {
          teks += `ルジ @${mem.id.split("@")[0]}\n`;
        }
        fuzzy.sendMessage(
          m.chat, {
            text: teks,
            mentions: participants.map((a) => a.id)
          }, {
            quoted: m
          },
        );
      }
      break;
      case "hidetag":
      case "z":
      case "h":
        {
          if (!m.isGroup) return reply("gc doang");
          if (!isAdmins && !isCreator) return reply("admin doang");
          if (!m.quoted && !text) return reply("teksnya/replyteks");
          var teks = m.quoted ? m.quoted.text : text;
          var member = await groupMetadata.participants.map((e) => e.id);
          fuzzy.sendMessage(m.chat, { text: teks, mentions: [...member] });
        }
        break;
case 'mute': {
  if (!m.isGroup) return reply("Hanya untuk grup!");
  if (!isAdmins && !isCreator) return reply("Hanya admin yang bisa menggunakan ini!");
  if (!isBotAdmins) return reply(mess.Badmin)

  muteList[from] = muteList[from] || [];

  let target;
  if (m.quoted) {
    target = m.quoted.sender;
  } else if (m.mentionedJid && m.mentionedJid.length > 0) {
    target = m.mentionedJid[0];
  } else {
    return reply(`Gunakan perintah dengan tag atau balas pesan:\n*${prefix + command} on* atau *off*\n\ncontoh reply:\n!mute on\n\ncontoh tag:\n!mute on @user`);
  }

  if (args[0] === 'on') {
    if (muteList[from].includes(target)) return reply("User sudah di-mute.");
    muteList[from].push(target);
    fs.writeFileSync("./media/database/muteuser.json", JSON.stringify(muteList, null, 2));
    reply("User berhasil di-mute.");
  } else if (args[0] === 'off') {
    if (!muteList[from].includes(target)) return reply("User tidak sedang di-mute.");
    muteList[from] = muteList[from].filter(u => u !== target);
    fs.writeFileSync("./media/database/muteuser.json", JSON.stringify(muteList, null, 2));
    reply("User berhasil di-unmute.");
  } else {
    reply(`Gunakan perintah:\nBalas pesan atau tag user lalu ketik: *${prefix + command} on* atau *off*`);
  }
}
break;
case 'antisticker': {
  if (!isBotAdmins) return reply(mess.Badmin)
  if (!isAdmins && !isCreator) return reply("Fitur ini hanya bisa digunakan oleh admin.");
  if (!m.isGroup) return reply('Fitur ini hanya bisa digunakan dalam grup!');

  if (args[0] === "on") {
    if (antistick) return reply('Antisticker sudah aktif di grup ini.');
    antisticklist.push(from);
    fs.writeFileSync('./media/database/antisticklist.json', JSON.stringify(antisticklist));
    reply('Antisticker berhasil diaktifkan di grup ini.');
  } 
  else if (args[0] === "off") {
    if (!antistick) return reply('Antisticker belum aktif di grup ini.');
    let off = antisticklist.indexOf(from);
    antisticklist.splice(off, 1);
    fs.writeFileSync('./media/database/antisticklist.json', JSON.stringify(antisticklist));
    reply('Antisticker telah dinonaktifkan di grup ini.');
  } 
  else {
    await reply(`Silakan pilih opsi:\n\nContoh: ${prefix + command} on\nContoh: ${prefix + command} off\n\n'on' untuk mengaktifkan\n'off' untuk menonaktifkan`);
  }
}
break;
      case 'antitagsw':
      case 'antitaggc': {
        if (!isAdmins && !isCreator) return
        if (!m.isGroup) return
        if (!isBotAdmins) return reply(mess.Badmin)
        if (args[0] === "on") {
          if (antiGroupTag) return reply('Sukses Mengaktifikan Tuan✅')
          antitaggclist.push(from)
          fs.writeFileSync('./media/database/antitaggc.json', JSON.stringify(antitaggclist))
          reply('Success in turning on antiGroupTag in this group')
          var groupe = await fuzzy.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          fuzzy.sendMessage(from, {
            text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nanti tag status`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          })
        }
        else if (args[0] === "off") {
          if (!antiGroupTag) return reply('Sukses Menonaktifkan Tuan✅')
          let off = antitaggclist.indexOf(from)
          antitaggclist.splice(off, 1)
          fs.writeFileSync('./media/database/antitaggc.json', JSON.stringify(antitaggclist))
          reply('Success in turning off antiGroupTag in this group')
        }
        else {
          await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
        }
      }
      break
      case 'antilinkgc': {
        if (!isAdmins && !isCreator) return reply("admin doang");
        if (!m.isGroup) return reply('This command can only be used in groups!');
        if (!isBotAdmins) return reply(mess.Badmin)
  
        if (args[0] === "on") {
          if (antisalurgc) return reply('Antilinkgc is already active in this group.');
          antilinkgcList.push(from);
          fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          reply('Antilinkgc has been enabled in this group.');
          var groupe = await fuzzy.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });

           reply(`⚠️ Warning ⚠️\n\nPlease be aware of group links being shared in this group.`)
            
        }
        else if (args[0] === "off") {
          if (!antisalurgc) return reply('Antilinkgc is not active in this group.');
          let off = antilinkgcList.indexOf(from);
          antilinkgcList.splice(off, 1);
          fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          reply('Antilinkgc has been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;
      case 'antibot': {
        if (!isAdmins && !isCreator) return
        if (!m.isGroup) return
        if (!isBotAdmins) return reply(mess.Badmin)
        if (args[0] === "on") {
          if (antibot) return reply('Sukses Mengaktifikan Tuan✅')
          antibott.push(from)
          fs.writeFileSync('./media/database/antibot.json', JSON.stringify(antibott))
          reply('Success in turning on antibot in this group')
          var groupe = await fuzzy.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          fuzzy.sendMessage(from, {
            text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTolong jika ada bot ada disini mohon di self atau mute jika ada bot maka antibot akan kena kick`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          })
        }
        else if (args[0] === "off") {
          if (!antibot) return reply('Sukses Menonaktifkan Tuan✅')
          let off = antibott.indexOf(from)
          antibott.splice(off, 1)
          fs.writeFileSync('./media/database/antibot.json', JSON.stringify(antibott))
          reply('Success in turning off antibot in this group')
        }
        else {
          await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
        }
      }
      break
      case 'antisaluran': {
        if (!isAdmins) return
        if (!m.isGroup) return
        if (!isBotAdmins) return reply(mess.Badmin)
  
        if (args[0] === "on") {
          if (antisalur) return reply('Sukses Mengaktifikan Tuan✅')
          antisaluran.push(from)
          fs.writeFileSync('./media/database/antisaluran.json', JSON.stringify(antisaluran))
          reply('Success in turning on antisaluran in this group')
          var groupe = await fuzzy.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          fuzzy.sendMessage(from, {
            text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nBagi yang sering promosi link saluran mohon waspada`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          })
        }
        else if (args[0] === "off") {
          if (!antisalur) return reply('Sukses Menonaktifkan Tuan✅')
          let off = antisaluran.indexOf(from)
          antisaluran.splice(off, 1)
          fs.writeFileSync('./media/database/antisaluran.json', JSON.stringify(antisaluran))
          reply('Success in turning off antisaluran in this group')
        }
        else {
          await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
        }
      }
      break

      // Case 'antilinkig' (Instagram Link)
      case 'antilinkig': {
        if (!isAdmins) return reply('You are not an admin!');
        if (!m.isGroup) return reply('This command can only be used in groups!');
        if (!isBotAdmins) return reply(mess.Badmin)
  
        if (args[0] === "on") {
          if (antisalurig) return reply('Antilinkig is already active in this group.');
          antilinkigList.push(from);
          fs.writeFileSync('./media/database/antilinkig.json', JSON.stringify(antilinkigList));
          reply('Antilinkig has been enabled in this group.');
          var groupe = await fuzzy.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          fuzzy.sendMessage(from, {
            text: `⚠️ Warning ⚠️\n\nPlease be aware of Instagram links being shared in this group.`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          });
        }
        else if (args[0] === "off") {
          if (!antisalurig) return reply('Antilinkig is not active in this group.');
          let off = antilinkigList.indexOf(from);
          antilinkigList.splice(off, 1);
          fs.writeFileSync('./media/database/antilinkig.json', JSON.stringify(antilinkigList));
          reply('Antilinkig has been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;

      // Case 'antilinkyt' (YouTube Link)
      case 'antilinkyt': {
        if (!isAdmins) return reply('You are not an admin!');
        if (!m.isGroup) return reply('This command can only be used in groups!');
        if (!isBotAdmins) return reply(mess.Badmin)
  
        if (args[0] === "on") {
          if (antisaluryt) return reply('Antilinkyt is already active in this group.');
          antilinkytList.push(from);
          fs.writeFileSync('./media/database/antilinkyt.json', JSON.stringify(antilinkytList));
          reply('Antilinkyt has been enabled in this group.');
          var groupe = await fuzzy.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          fuzzy.sendMessage(from, {
            text: `⚠️ Warning ⚠️\n\nPlease be aware of YouTube links being shared in this group.`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          });
        }
        else if (args[0] === "off") {
          if (!antisaluryt) return reply('Antilinkyt is not active in this group.');
          let off = antilinkytList.indexOf(from);
          antilinkytList.splice(off, 1);
          fs.writeFileSync('./media/database/antilinkyt.json', JSON.stringify(antilinkytList));
          reply('Antilinkyt has been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;

      // Case 'antilinkfb' (Facebook Link)
      case 'antilinkfb': {
        if (!isAdmins) return reply('You are not an admin!');
        if (!m.isGroup) return reply('This command can only be used in groups!');
        if (!isBotAdmins) return reply(mess.Badmin)
  
        if (args[0] === "on") {
          if (antisalurfb) return reply('Antilinkfb is already active in this group.');
          antilinkfbList.push(from);
          fs.writeFileSync('./media/database/antilinkfb.json', JSON.stringify(antilinkfbList));
          reply('Antilinkfb has been enabled in this group.');
          var groupe = await fuzzy.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          fuzzy.sendMessage(from, {
            text: `⚠️ Warning ⚠️\n\nPlease be aware of Facebook links being shared in this group.`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          });
        }
        else if (args[0] === "off") {
          if (!antisalurfb) return reply('Antilinkfb is not active in this group.');
          let off = antilinkfbList.indexOf(from);
          antilinkfbList.splice(off, 1);
          fs.writeFileSync('./media/database/antilinkfb.json', JSON.stringify(antilinkfbList));
          reply('Antilinkfb has been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;

      // Case 'antilinkdc' (Discord Link)
      case 'antilinkdc': {
        if (!isAdmins) return reply('You are not an admin!');
        if (!m.isGroup) return reply('This command can only be used in groups!');
        if (!isBotAdmins) return reply(mess.Badmin)
  
        if (args[0] === "on") {
          if (antisalurdc) return reply('Antilinkdc is already active in this group.');
          antilinkdcList.push(from);
          fs.writeFileSync('./media/database/antilinkdc.json', JSON.stringify(antilinkdcList));
          reply('Antilinkdc has been enabled in this group.');
          var groupe = await fuzzy.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          fuzzy.sendMessage(from, {
            text: `⚠️ Warning ⚠️\n\nPlease be aware of Discord links being shared in this group.`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          });
        }
        else if (args[0] === "off") {
          if (!antisalurdc) return reply('Antilinkdc is not active in this group.');
          let off = antilinkdcList.indexOf(from);
          antilinkdcList.splice(off, 1);
          fs.writeFileSync('./media/database/antilinkdc.json', JSON.stringify(antilinkdcList));
          reply('Antilinkdc has been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;

      case 'antiall': {
        if (!isAdmins) return reply('You are not an admin!');
        if (!m.isGroup) return reply('This command can only be used in groups!');
        if (!isBotAdmins) return reply(mess.Badmin)
  
        if (args[0] === "on") {
          // Cek apakah semua fitur sudah aktif
          if (antistick && antibot && antisaluran && antisalurgc && antisalurig && antisaluryt && antisalurfb && antisalurdc)
            return reply('All protections are already active in this group.');

          // Aktifkan semua fitur antilink
          antisticklist.push(from);
          antibott.push(from);
          antisaluran.push(from);
          antilinkgcList.push(from);
          antilinkigList.push(from);
          antilinkytList.push(from);
          antilinkfbList.push(from);
          antilinkdcList.push(from);

          fs.writeFileSync('./media/database/antisticklist.json', JSON.stringify(antisticklist));
          fs.writeFileSync('./media/database/antibot.json', JSON.stringify(antibott));
          fs.writeFileSync('./media/database/antisaluran.json', JSON.stringify(antisaluran));
          fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          fs.writeFileSync('./media/database/antilinkig.json', JSON.stringify(antilinkigList));
          fs.writeFileSync('./media/database/antilinkyt.json', JSON.stringify(antilinkytList));
          fs.writeFileSync('./media/database/antilinkfb.json', JSON.stringify(antilinkfbList));
          fs.writeFileSync('./media/database/antilinkdc.json', JSON.stringify(antilinkdcList));

          reply('All protections have been enabled in this group.');

          var groupe = await fuzzy.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          fuzzy.sendMessage(from, {
            text: `⚠️ Warning ⚠️\n\nAll protection features are now active in this group. Please follow group rules regarding links and bots.`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          });
        }
        else if (args[0] === "off") {
          // Nonaktifkan semua fitur antilink
          if (!antistick && !antibot && !antisaluran && !antisalurgc && !antisalurig && !antisaluryt && !antisalurfb && !antisalurdc)
            return reply('All protections are already inactive in this group.');

          antisticklist.splice(antibott.indexOf(from), 1);
          antibott.splice(antibott.indexOf(from), 1);
          antisaluran.splice(antisaluran.indexOf(from), 1);
          antilinkgcList.splice(antilinkgcList.indexOf(from), 1);
          antilinkigList.splice(antilinkigList.indexOf(from), 1);
          antilinkytList.splice(antilinkytList.indexOf(from), 1);
          antilinkfbList.splice(antilinkfbList.indexOf(from), 1);
          antilinkdcList.splice(antilinkdcList.indexOf(from), 1);

          fs.writeFileSync('./media/database/antisticklist.json', JSON.stringify(antisticklist));
          fs.writeFileSync('./media/database/antibot.json', JSON.stringify(antibott));
          fs.writeFileSync('./media/database/antisaluran.json', JSON.stringify(antisaluran));
          fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          fs.writeFileSync('./media/database/antilinkig.json', JSON.stringify(antilinkigList));
          fs.writeFileSync('./media/database/antilinkyt.json', JSON.stringify(antilinkytList));
          fs.writeFileSync('./media/database/antilinkfb.json', JSON.stringify(antilinkfbList));
          fs.writeFileSync('./media/database/antilinkdc.json', JSON.stringify(antilinkdcList));

          reply('All protections have been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;
case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins && !isCreator) return reply('only admin')
  let media = await fuzzy.downloadAndSaveMediaMessage(quoted)
  await fuzzy.updateProfilePicture(m.chat, {
    url: media
  }).catch((err) => fs.unlinkSync(media))
  m.reply('done')
}
break
case 'linkgroup':
case 'linkgc': {
  if (!isAdmins && !isCreator) return reply("admin doang");
  if (!isBotAdmins) return reply(mess.Badmin)
  let response = await fuzzy.groupInviteCode(from)
  fuzzy.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
    detectLink: true
  })
}
break
case 'd':
case 'del':
case 'delete':
case 'hapus': {
  if (!isAdmins && !isCreator) return reply('only admin')
  if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
  fuzzy.sendMessage(from, {
    delete: {
      remoteJid: from,
      id: m.quoted.id,
      fromMe: m.quoted.fromMe,
      participant: m.quoted.sender
    }
  })
}
break
case 'totag': {
  if (!isAdmins && !isCreator) return reply('only admin')
  if (!m.quoted)
    return reply(`Reply pesan dengan caption ${prefix + command}`);
  fuzzy.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map((a) => a.id),
  });
}
break;
case 'closetime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (!isAdmins && !isCreator) return reply('only admin')
if (args[1] == "detik") {
  var timer = args[0] * `1000`
} else if (args[1] == "menit") {
  var timer = args[0] * `60000`
} else if (args[1] == "jam") {
  var timer = args[0] * `3600000`
} else if (args[1] == "hari") {
  var timer = args[0] * `86400000`
} else {
  return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
  const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
  fuzzy.groupSettingUpdate(from, 'announcement')
  reply(close)
}, timer)
break

case 'opentime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
  if (!isAdmins && !isCreator) return reply('only admin')
if (args[1] == "detik") {
  var timer = args[0] * `1000`
} else if (args[1] == "menit") {
  var timer = args[0] * `60000`
} else if (args[1] == "jam") {
  var timer = args[0] * `3600000`
} else if (args[1] == "hari") {
  var timer = args[0] * `86400000`
} else {
  return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
}
reply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
  const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
  fuzzy.groupSettingUpdate(from, 'not_announcement')
  reply(open)
}, timer)
break
      case 'afk': {
        try {
          var ppimg = await fuzzy.profilePictureUrl(m.sender, 'image');
        }
        catch (err) {
          console.log(err);
          var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
        }

        let user = global.db.data.users[m.sender]
        user.afkTime = +new Date
        user.afkReason = text
        let afkteks = `${pushname} sekarang Kamu Lagi Afk dengan Alasan? ${text ? ': ' + text : 'tidak ada alasan'}`
        m.reply(afkteks)
      }
      break
case 'add': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.Badmin)
  if (!isAdmins && !isCreator) return reply('only admin')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await fuzzy.groupParticipantsUpdate(from, [users], 'add')
  reply('succss')
}
break
case 'kick': {
  if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins && !isCreator) return reply('only admin')
  let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await fuzzy.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
  m.reply('bye bye kasian deh')
}
break
//======[ DOWNLOAD ]======\\
case 'ccdwn':
case 'capcut':{
  if (!text) return m.reply('Silahkan masukkan URL CapCut yang ingin diunduh!')
  
  m.reply('Sedang memproses, mohon tunggu...')
  
  try {
    const apiUrl = `https://jazxcode.biz.id/downloader/capcutdl?url=${text}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    if (data.status) {
      const videoUrl = data.result.videoUrl
      
      await fuzzy.sendMessage(m.chat, {
        video: {
          url: videoUrl,
        },
        caption: `🎥 Video CapCut berhasil diunduh`,
        fileName: `capcut.mp4`,
        mimetype: 'video/mp4'
      });
    } else {
      m.reply('Gagal mengunduh video, periksa URL dan coba lagi.')
    }
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat mengunduh video.')
  }
}
break
case 'fbdl': {

  async function fetchFbVideo(url) {
    const res = await axios.get(`https://api.vreden.my.id/api/fbdl?url=${url}`);
    return res.data.data;
  }

  const fburl = args[0]; // Link Facebook diberikan sebagai argumen

  if (!fburl) {
    return m.reply('Masukkan URL Facebook yang ingin diunduh.');
  }

  reply('Tunggu sebentar, sedang mengunduh video dari Facebook...');
  

  try {
    const result = await fetchFbVideo(fburl);

    if (!result || !result.status) {
      return m.reply('Gagal mengunduh video. Pastikan URL benar.');
    }

    // Menggunakan link HD jika tersedia, jika tidak gunakan SD
    const videoUrl = result.hd_url || result.sd_url;
    const caption = `Judul: ${result.title || 'Video Facebook'}`;

    m.reply('Video berhasil ditemukan! Mengirim video...');
    await fuzzy.sendMessage(m.chat, {
      video: {
        url: videoUrl,
      },
      caption: caption,
      fileName: `fb.mp4`,
      mimetype: 'video/mp4'
    }, {
      quoted: m
    });
    
  } catch (error) {
    console.error('Error fetching Facebook video:', error);
    m.reply('Maaf, terjadi kesalahan saat mengunduh video.');
  }
}
break;
      case 'igdl':
      case 'instagram':
      case 'instadl': {
        if (!text) return m.reply('Berikan link Instagram yang ingin di-download');

        const instaDl = {
          dl: async (link) => {
            try {
              const {
                data
              } = await axios.post('https://yt1s.io/api/ajaxSearch',
                new URLSearchParams({
                  p: 'instagram',
                  q: link,
                  lang: 'en'
                }), {
                  headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  },
                }
              );

              if (data.status !== 'ok') throw new Error('Tidak ada respons dari API');

              const $ = cheerio.load(data.data);
              const results = $('a.abutton.is-success.is-fullwidth')
                .map((_, el) => ({
                  title: $(el).text().includes('Video') ? 'Download Video' : 'Download Image',
                  url: $(el).attr('href'),
                  sourceUrl: link
                }))
                .get();

              return results;
            }
            catch (error) {
              console.error('Error fetching Instagram download links:', error);
              throw error;
            }
          }
        };

        try {
          const results = await instaDl.dl(text);

          if (results.length === 0) {
            return m.reply('Tidak ada hasil yang ditemukan.');
          }

          const images = results.filter(item => item.title.includes('Image'));
          const videos = results.filter(item => item.title.includes('Video'));

          // Kirim video menggunakan sendMessage jika ada video
          if (videos.length > 0) {
            for (const video of videos) {
              await fuzzy.sendMessage(from, {
                video: {
                  url: video.url
                },
                caption: `Download Video\n\nSumber: ${video.sourceUrl}`,
              });
            }
          }
          else if (images.length > 0) {
            // Kirim gambar hanya jika tidak ada video
            const formattedImages = images.map(item => ({
              url: item.url,
              sourceUrl: item.sourceUrl,
              title: item.title,
            }));

            async function generateCarouselMessage(imageData, from, headerText = "Berikut adalah hasil download Instagram:") {
              const cardsPromises = imageData.map(async data => {
                const preparedMedia = await prepareWAMessageMedia({
                  image: {
                    url: data.url
                  },
                }, {
                  upload: fuzzy.waUploadToServer
                });

                return {
                  header: {
                    hasMediaAttachment: true,
                    ...preparedMedia
                  },
                  body: {
                    text: data.title
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: JSON.stringify({
                        display_text: "Sumber",
                        url: data.sourceUrl,
                      }),
                    }],
                  },
                };
              });

              const cards = await Promise.all(cardsPromises);

              const carouselMessage = {
                cards,
                messageVersion: 1,
              };

              const msg = generateWAMessageFromContent(
                from, {
                  viewOnceMessage: {
                    message: {
                      interactiveMessage: {
                        body: {
                          text: headerText
                        },
                        carouselMessage,
                      },
                    },
                  },
                }, {}
              );

              await fuzzy.relayMessage(from, msg.message, {
                messageId: msg.key.id
              });
            }

            await generateCarouselMessage(formattedImages, from);
          }
         
        }
        catch (error) {
          console.error('Error in Instagram download process:', error);
          return m.reply('Terjadi kesalahan saat mencoba mendownload. Pastikan link valid.');
        }
      }
      break;
      case 'tt':
      case 'tiktok':
      case 'tiksave':
      case 'ttmp4':
      case 'ttsv': {

        const qs = require('qs');
        const tiksave = {
          getData: async (url) => {
            const apiUrl = 'https://tiksave.io/api/ajaxSearch';
            const data = qs.stringify({
              q: url,
              lang: 'id'
            });
            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': '*/*',
                'User-Agent': 'MyApp/1.0',
                'Referer': 'https://tiksave.io/en',
                'X-Requested-With': 'XMLHttpRequest'
              }
            };

            try {
              const response = await axios.post(apiUrl, data, config);
              const html = response.data.data;
              const $ = cheerio.load(html);
              const thumbnail = $('.thumbnail img').attr('src');
              const title = $('.tik-left h3').text().trim();
              const downloadLinks = [];

              $('.dl-action a').each((index, element) => {
                const link = $(element).attr('href');
                const label = $(element).text().trim();
                downloadLinks.push({
                  label,
                  link
                });
              });

              return {
                thumbnail,
                title,
                downloadLinks
              };
            }
            catch (error) {
              console.error('Error:', error);
              throw error;
            }
          },

          download: async (url) => {
            try {
              const videoData = await tiksave.getData(url);
              if (videoData && videoData.downloadLinks.length) {
                const audioUrl = videoData.downloadLinks.find(link => link.label === 'Download MP3')?.link;

                return {
                  videoData,
                  audioUrl
                };
              }
              else {
                throw new Error('Link unduhan tidak tersedia.');
              }
            }
            catch (error) {
              console.error('Error:', error);
              throw error;
            }
          }
        };


        try {
          // Memeriksa apakah teks yang dimasukkan adalah URL valid
          if (!text.startsWith('http')) return reply("Masukkan URL yang valid.");

          // Mendapatkan data unduhan TikTok
          let {
            videoData,
            audioUrl
          } = await tiksave.download(text);

          if (videoData.downloadLinks.length) {
            await fuzzy.sendMessage(m.chat, {
              video: {
                url: videoData.downloadLinks[0].link,
              },
              caption: `🎥 ${videoData.title}`,
              fileName: `tiktok.mp4`,
              mimetype: 'video/mp4'
            });
          }
          else {
            reply("Video tidak tersedia.");
          }

          // audio
          let res = await tiktok(`${args[0]}`)
          fuzzy.sendMessage(m.chat, {
            audio: {
              url: res.audio
            },
            fileName: `tiktok.mp3`,
            mimetype: 'audio/mp4'
          })


        }
        catch (error) {
          console.error("Error fetching TikTok data:", error);
          reply("Maaf, terjadi kesalahan saat mengambil data TikTok.");
        }

      }
      break;
      

case 'ttmp3':{
          if (!text.startsWith('http')) return reply("Masukkan URL yang valid.");
        try {
          let res = await tiktok(`${args[0]}`)
          fuzzy.sendMessage(m.chat, {
            audio: {
              url: res.audio
            },
            fileName: `tiktok.mp3`,
            mimetype: 'audio/mp4'
          })
       } catch (error) {
          console.error("Maaf server limit, coba lagi lain waktu", error);
          reply("Maaf server limit, coba lagi lain waktu.");
        }
}
break

            case 'upstatus':
			case 'upsw': {
				if (!isCreator) return m.reply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				try {
					if (quoted.isMedia) {
						if (/image|video/.test(quoted.mime)) {
							await fuzzy.sendMessage('status@broadcast', {
								[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
								caption: text || m.quoted?.body || ''
							}, { statusJidList, broadcast: true })
						} else if (/audio/.test(quoted.mime)) {
							await fuzzy.sendMessage('status@broadcast', {
								audio: await quoted.download(),
								mimetype: 'audio/mp4',
								ptt: true
							}, { backgroundColor, statusJidList, broadcast: true })
						} else m.reply('Only Support video/audio/image/text')
					} else if (quoted.text) {
						await fuzzy.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
							textArgb: 0xffffffff,
							font: Math.floor(Math.random() * 9),
							backgroundColor, statusJidList,
							broadcast: true
						})
					} else m.reply('Only Support video/audio/image/text')
				} catch (e) {
					m.reply('Gagal Mengupload Status Whatsapp!')
				}
			}
			break
case 'ytmp4': {
  if (!text) return reply(`Masukkan link YouTube.\nContoh: ${prefix}ytmp4 https://youtu.be/S6bxlUq1tk4`);
function extractVideoId(url) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : '';
}
  try {
    const encodedUrl = encodeURIComponent(text);
    const apiUrl = `https://ytdlpyton.nvlgroup.my.id/download/?url=${encodedUrl}&resolution=720&mode=url`;

    const { data } = await axios.get(apiUrl);

    if (!data || !data.download_url) {
      return reply('Gagal mengambil data, pastikan link valid.');
    }


    await fuzzy.sendMessage(from, {
      video: { url: data.download_url },
      caption: `✅ Berikut hasil download dari *${data.title}*`,
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('Gagal mengambil video, pastikan link YouTube valid.');
  }
}
break;
case "uwak":
case 'ytmp3': {
  if (!text) return reply(`Masukkan link YouTube.\nContoh: ${prefix}ytmp3 https://youtu.be/S6bxlUq1tk4`);
function extractVideoId(url) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : '';
}

  try {
    const encodedUrl = encodeURIComponent(text);
    const apiUrl = `https://ytdlpyton.nvlgroup.my.id/download/?url=${encodedUrl}&resolution=720&mode=url`;

    const { data } = await axios.get(apiUrl);

    if (!data || !data.download_url) {
      return reply('Gagal mengambil data audio.');
    }

            let doc = {
              audio: {
                url: data.download_url
              },
              mimetype: 'audio/mpeg',
              fileName: `${data.title}.mp3`,
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  title: '',
                  body: `${data.title}`,
                  thumbnailUrl: 'https://i.ytimg.com/vi/' + extractVideoId(text) + '/maxresdefault.jpg',
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            };

            // Kirim audio
            await fuzzy.sendMessage(from, doc, {
              quoted: m
            });

  } catch (err) {
    console.error(err);
    reply('Terjadi kesalahan saat mengambil audio.');
  }
}
break;
      case 'pinterestdl':
      case 'pindl': {
        const {
          JSDOM
        } = require("jsdom");

        class Pinterest {
          async getURL(url) {
            try {
              const response = await axios.get(url);
              const dom = new JSDOM(response.data);
              const document = dom.window.document;
              let contentUrl = '';
              const video = document.querySelector('video');
              if (video) {
                const videoUrl = video.getAttribute('src');
                contentUrl = videoUrl.replace('hls', '720p').replace('.m3u8', '.mp4');
              }
              else {
                const img = document.querySelector('meta[property="og:image"]');
                if (img) {
                  contentUrl = img.getAttribute('content');
                }
              }
              return contentUrl;
            }
            catch (error) {
              console.error('Error:', error.message);
              return '';
            }
          }

          async getBuffer(rawUrl) {
            try {
              const url = await this.getURL(rawUrl);
              const response = await axios.get(url, {
                responseType: 'arraybuffer'
              });
              return response.data;
            }
            catch (error) {
              console.error('Error:', error.message);
              return null;
            }
          }
        }

        if (!args[0]) {
          return reply(m.chat, `Harap masukkan URL Pinterest.\nContoh: ${usedPrefix}${command} <url>`, m);
        }

        const url = args[0];
        const pinterest = new Pinterest();

        await fuzzy.sendMessage(m.chat, {
          react: {
            text: '🕒',
            key: m.key
          }
        });

        const buffer = await pinterest.getBuffer(url);

        if (buffer) {
          const contentUrl = await pinterest.getURL(url);
          const isImage = contentUrl.endsWith('.jpg') || contentUrl.endsWith('.png') || contentUrl.endsWith('.jpeg');
          if (isImage) {
            await fuzzy.sendMessage(m.chat, {
              image: buffer,
              caption: "Berhasil mengunduh gambar dari Pinterest!"
            }, {
              quoted: m
            });
          }
          else {
            await fuzzy.sendMessage(m.chat, {
              video: buffer,
              caption: "Berhasil mengunduh video dari Pinterest!"
            }, {
              quoted: m
            });
          }
        }
        else {
          reply("Gagal mengambil konten dari URL yang diberikan. Pastikan URL benar atau coba lagi nanti.");
        }
      }
      break
      case 'spam-pairing': {
        if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
        let [peenis, pepekk = "200"] = text.split("|")

        let target = peenis.replace(/[^0-9]/g, '').trim()
        let {
          default: makeWaSocket,
          useMultiFileAuthState,
          fetchLatestBaileysVersion
        } = require('@whiskeysockets/baileys')
        let {
          state
        } = await useMultiFileAuthState('./media/tmp/pepek')
        let {
          version
        } = await fetchLatestBaileysVersion()
        let pino = require("pino")
        let sucked = await makeWaSocket({
          auth: state,
          version,
          logger: pino({
            level: 'fatal'
          })
        })
        reply('succss')
        for (let i = 0; i < pepekk; i++) {
          await sleep(1500)
          let prc = await sucked.requestPairingCode(target)
          await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
        }
        await sleep(15000)
      }
      break
      case 'tts': {
        if (!text) return reply(`[ ! ] ${prefix}${command} halo world`)
        const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", {
          text: text,
          voice: "id_001"
        }, {
          headers: {
            Referer: "https://gesserit.co/tiktok",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
            responseType: "arraybuffer"
          }
        })).data
        const b = Buffer.from(a.audioUrl)
        fuzzy.sendMessage(m?.chat, {
          audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
          mimetype: "audio/mpeg"
        })
      }
      break
      case 'get': {
        if (!text) return m.reply(`awali *URL* dengan http:// atau https://`)
        try {
          const gt = await axios.get(text, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Referer": "https://www.google.com/",
              "Referrer-Policy": "strict-origin-when-cross-origin",
              "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            responseType: 'arraybuffer'
          });
          const contentType = gt.headers['content-type'];
          console.log(`Content-Type: ${contentType}`);
          if (/json/i.test(contentType)) {
            const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
            return m.reply(JSON.stringify(jsonData, null, 2));
          }
          else if (/text/i.test(contentType)) {
            const textData = Buffer.from(gt.data, 'binary').toString('utf8');
            return m.reply(textData);
          }
          else if (text.includes('webp')) {
            return fuzzy.sendImageAsSticker(m.chat, text, m, {
              packname: packname,
              author: author
            })
          }
          else if (/image/i.test(contentType)) {
            return fuzzy.sendMessage(m.chat, {
              image: {
                url: text
              }
            }, {
              quoted: m
            });
          }
          else if (/video/i.test(contentType)) {
            return fuzzy.sendMessage(m.chat, {
              video: {
                url: text
              }
            }, {
              quoted: m
            });
          }
          else if (/audio/i.test(contentType) || text.includes(".mp3")) {
            return fuzzy.sendMessage(m.chat, {
              audio: {
                url: text
              }
            }, {
              quoted: m
            });
          }
          else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
            return fuzzy.sendFile(m.chat, text, '', text, m)
          }
          else if (/application\/pdf/i.test(contentType)) {
            return fuzzy.sendFile(m.chat, text, '', text, m)
          }
          else {
            return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
          }
        }
        catch (error) {
          console.error(`Terjadi kesalahan: ${error}`);
          return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
        }
      }
      break
case 'play': {
  if (!text) return m.reply(`• Example :* .play *[query]`)
  m.reply('_Mohon tunggu, sedang memproses..._')

  const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
  const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

  const ddownr = {
    download: async (url, format) => {
      if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
        throw new Error('Format nya gk support wak, coba cek lagi listnya.');
      }

      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        const response = await axios.request(config);

        if (response.data && response.data.success) {
          const {
            id,
            title,
            info
          } = response.data;
          const {
            image
          } = info;
          const downloadUrl = await ddownr.cekProgress(id);

          return {
            id: id,
            image: image,
            title: title,
            downloadUrl: downloadUrl
          };
        } else {
          throw new Error('Failed to fetch video details.');
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    cekProgress: async (id) => {
      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        while (true) {
          const response = await axios.request(config);

          if (response.data && response.data.success && response.data.progress === 1000) {
            return response.data.download_url;
          }
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
  }

  try {
    const searchResults = await yts(text)
    if (!searchResults.videos.length) {
      return m.reply('Tidak menemukan video yang cocok.')
    }

    const videoData = searchResults.videos[0]
    const videoUrl = videoData.url

    try {
      const downloadResult = await ddownr.download(videoUrl, 'mp3')

      if (!downloadResult || !downloadResult.downloadUrl) {
        return m.reply('Gagal mendapatkan audio. Pastikan query valid.')
      }

      await fuzzy.sendMessage(m.chat, {
        audio: {
          url: downloadResult.downloadUrl
        },
        mimetype: "audio/mpeg",
        fileName: `${downloadResult.title || 'Play Downloader'}.mp3`,
      }, {
        quoted: m
      })


    } catch (scraperError) {
      console.error('Scraper error:', scraperError)
      return m.reply('Terjadi kesalahan saat mengunduh audio. Silakan coba lagi.')
    }

  } catch (searchError) {
    console.error('Search error:', searchError)
    return m.reply('Terjadi kesalahan saat mencari video. Silakan coba lagi.')
  }
}
break
//======[ SEARCH ]======\\
      case 'colong':
      case 'wm': {
        if (!m?.quoted) return m.reply('reply with a sticker!')
        let stiker = false
        try {
          let [packname, ...author] = text.split('|')
          author = (author || []).join('|')
          let mime = m.quoted.mimetype || ''
          if (!/webp/.test(mime)) return m.reply('m?.reply with a sticker!')
          let img = await m.quoted.download()
          if (!img) return m.reply('Failed to download sticker!')
          stiker = await addExif(img, packname || '', author || '')
        }
        catch (e) {
          console.error(e)
          if (Buffer.isBuffer(e)) stiker = e
          else return m?.reply('An error occurred: ' + e)
        }
        finally {
          if (stiker) fuzzy.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, {
            asSticker: true
          })
          else return m.reply('Conversion failed')
        }
      }
      break
      case 'smeme':
      case 'stickermeme':
      case 'stickmeme': {
        if (!/webp/.test(mime) && /image/.test(mime)) {
          if (!text) return reply(`Usage: ${prefix + command} bawah|atas\n\ncontoh !smeme hallo|dek`)
          atas = text.split('|')[0] ? text.split('|')[0] : '-'
          bawah = text.split('|')[1] ? text.split('|')[1] : '-'
          mee = await fuzzy.downloadAndSaveMediaMessage(quoted)
          mem = await UploadFileUgu(mee)
          meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
          memek = await fuzzy.sendImageAsSticker(m.chat, meme, m, {
            packname: global.packname,
            author: global.author
          })
        }
        else {
          reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} text1|text2`)
        }
      }
      break
case 'pin':
case 'pinterest': {
    if (!args[0]) return m.reply("Masukkan kata kunci pencarian! Contoh: *!pinterest cat*");

    let query = args.join(" ");
    let url = `https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(query)}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (!data.status || !Array.isArray(data.data) || data.data.length === 0) {
            return m.reply("Gagal mengambil gambar. Coba kata kunci lain!");
        }

        let images = data.data.slice(0, 3); // Ambil 3 gambar pertama

        let mediaArray = images.map(item => ({
            image: { url: item.images_url },
            caption: `📌 *Pin:* ${item.pin}\n📆 *Tanggal:* ${item.created_at}\n🖼️ *Judul:* ${item.grid_title || "Tidak ada"}`
        }));

        for (let media of mediaArray) {
            await fuzzy.sendMessage(from, media, { quoted: m });
        }

    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil data.");
    }
}
break;
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replynano(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replynano(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await fuzzy.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
case 'kuromi': {
  try {
    let query = 'kuromi';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'dino': {
  try {
    let query = 'dino kuning';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'pucoyo': case 'pocoyo': {
  try {
    let query = 'pocoyo';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'caribuku': {
  if (!text) return reply(`Gunakan dengan cara ${command} *judul*\n\n_Contoh_\n\n${command} Nayla`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "📚",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API cari buku
    let {
      data
    } = await axios.get(`${apiUrlw}/api/caribuku?query=${text}`);

    // Cek apakah respons memiliki data buku
    if (!data || !data.length) {
      return reply("Tidak ada buku yang ditemukan. Silakan coba dengan judul yang berbeda.");
    }

    // Menyusun hasil buku dalam format pesan
    let bukuList = `Hasil Pencarian Buku untuk *"${text}"*:\n\n`;
    data.slice(0, 5).forEach((buku, index) => {
      bukuList += `*${index + 1}. ${buku.title}*\n`;
      bukuList += `📖 Rating: ${buku.rating}\n`;
      bukuList += `🔗 [Goodreads Link](${buku.link})\n\n`;
    });

    reply(bukuList); // Menampilkan hasil buku

  } catch (error) {
    console.error("Error fetching book data:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data buku. Silakan coba lagi nanti.");
  }
}
break;
			case 'wastalk': case 'whatsappstalk': {
				if (!text) return m.reply(`Example: ${prefix + command} @tag / 628xxx`)
				try {
					let num = m.quoted?.sender || m.mentionedJid?.[0] || text
					if (!num) return m.reply(`Example : ${prefix + command} @tag / 628xxx`)
					num = num.replace(/\D/g, '') + '@s.whatsapp.net'
					if (!(await fuzzy.onWhatsApp(num))[0]?.exists) return m.reply('Nomer tidak terdaftar di WhatsApp!')
					let img = await fuzzy.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
					let bio = await fuzzy.fetchStatus(num).catch(_ => { })
					let name = await fuzzy.getName(num)
					let business = await fuzzy.getBusinessProfile(num)
					let format = PhoneNum(`+${num.split('@')[0]}`)
					let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
					let country = regionNames.of(format.getRegionCode('international'));
					let wea = `WhatsApp Stalk\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Description* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
					img ? await fuzzy.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
				} catch (e) {
					m.reply('Nomer Tidak ditemukan!')
				}
			}
			break
case 'autoupdate': {
    if (!isCreator) return reply(mess.owner)    
      const config = {
        owner: 'xziyyy',
        repo: 'clairity',
        branch: 'master',
        directories: [
            'connect',
            'library',
            'media/plugins'
        ]
    }
    
    m.reply(`🔄 Memulai proses update otomatis dari ${config.owner}/${config.repo}...`)
    
    async function getDirectoryContents(directory) {
        try {
            const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${directory}?ref=${config.branch}`
            const { data } = await axios.get(url)
            return data
        } catch (error) {
            console.error(`Error fetching directory ${directory}:`, error.message)
            return []
        }
    }
    
    async function updateFile(item) {
        try {
            if (item.type !== 'file' || !item.download_url) {
                return { success: false, path: item.path, error: 'Bukan file atau tidak ada download URL' }
            }
            

            const rootDir = path.resolve(__dirname, '..')
            const targetPath = path.join(rootDir, item.path)
            
            fs.mkdirSync(path.dirname(targetPath), { recursive: true })
            
            const { data } = await axios.get(item.download_url)
            fs.writeFileSync(targetPath, data, 'utf-8')
            
            return { success: true, path: item.path }
        } catch (error) {
            console.error(`Error updating ${item.path}:`, error.message)
            return { success: false, path: item.path, error: error.message }
        }
    }
    
    async function processUpdate() {
        let totalFiles = 0
        let updatedFiles = 0
        let failedFiles = 0
        let needsRestart = false
        const results = []
        
        try {
            for (const directory of config.directories) {
                const contents = await getDirectoryContents(directory)

                for (const item of contents) {
                    totalFiles++
                    
                    if (item.type === 'dir') {
                        continue
                    }
                    
                    // Update file
                    const result = await updateFile(item)
                    results.push(result)
                    
                    if (result.success) {
                        updatedFiles++
                        // cek kebutuhan restart
                        if (item.path.startsWith('library/') || item.path.startsWith('media/plugins/')) {
                            needsRestart = true
                        }
                    } else {
                        failedFiles++
                    }
                }
            }
            
            let report = `✅ *Update Selesai*\n\n`
            report += `📊 *Statistik*:\n`
            report += `- Total file: ${totalFiles}\n`
            report += `- Berhasil diupdate: ${updatedFiles}\n`
            report += `- Gagal diupdate: ${failedFiles}\n\n`
            
            if (updatedFiles > 0) {
                report += `📄 *Files Updated*:\n`
                let fileList = results
                    .filter(r => r.success)
                    .map(r => `- ${r.path}`)
                    .join('\n')
                
                if (fileList.length > 1000) {
                    const files = fileList.split('\n').slice(0, 15)
                    fileList = files.join('\n') + '\n- ... dan file lainnya'
                }
                
                report += fileList + '\n\n'
            }
            
            if (failedFiles > 0) {
                report += `❌ *Files Failed*:\n`
                const failedList = results
                    .filter(r => !r.success)
                    .map(r => `- ${r.path}: ${r.error}`)
                    .join('\n')
                report += failedList + '\n\n'
            }
            
            if (needsRestart) {
                report += `⚠️ *PENTING*: File di direktori library atau plugins telah diupdate. Silakan restart bot untuk menerapkan perubahan.`
            } else {
                report += `ℹ️ Tidak ada file yang memerlukan restart, perubahan sudah aktif.`
            }
            
            return report
            
        } catch (error) {
            console.error('Error in processUpdate:', error)
            return `❌ Terjadi kesalahan saat update: ${error.message}`
        }
    }
    
    processUpdate()
        .then(report => {
            m.reply(report)
        })
        .catch(error => {
            m.reply(`❌ Terjadi kesalahan: ${error.message}`)
        })
}
break
/*
case 'autoupdate': {
    if (!isCreator) return reply(mess.owner)
    
    const axios = require('axios')
    const fs = require('fs')
    const path = require('path')
    
    // Configurasi repository
    const config = {
        owner: 'xziyyy',
        repo: 'clairity',
        branch: 'master',
        directories: [
            'connect',
            'library',
            'media/plugins'
        ]
    }
    
    m.reply(`🔄 Memulai proses update otomatis dari ${config.owner}/${config.repo}...`)
    
    async function getDirectoryContents(directory) {
        try {
            const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${directory}?ref=${config.branch}`
            const { data } = await axios.get(url)
            return data
        } catch (error) {
            console.error(`Error fetching directory ${directory}:`, error.message)
            return []
        }
    }
    
    async function updateFile(item) {
        try {
            if (item.type !== 'file' || !item.download_url) {
                return { success: false, path: item.path, error: 'Bukan file atau tidak ada download URL' }
            }
            
            const rootDir = path.resolve(__dirname, '..')
            const targetPath = path.join(rootDir, item.path)
            
            fs.mkdirSync(path.dirname(targetPath), { recursive: true })
            
            const { data } = await axios.get(item.download_url)
            fs.writeFileSync(targetPath, data, 'utf-8')
            
            return { success: true, path: item.path }
        } catch (error) {
            console.error(`Error updating ${item.path}:`, error.message)
            return { success: false, path: item.path, error: error.message }
        }
    }
    
    async function processUpdate() {
        let totalFiles = 0
        let updatedFiles = 0
        let failedFiles = 0
        let needsRestart = false
        const results = []
        
        try {
            for (const directory of config.directories) {
                const contents = await getDirectoryContents(directory)
                
                for (const item of contents) {
                    totalFiles++
                    
                    if (item.type === 'dir') {
                        continue
                    }
                    const result = await updateFile(item)
                    results.push(result)
                    
                    if (result.success) {
                        updatedFiles++
                       if (item.path.endsWith('xZiyy.js')) {
                            needsRestart = true
                        }
                    } else {
                        failedFiles++
                    }
                }
            }
            

            let report = `✅ *Update Selesai*\n\n`
            report += `📊 *Statistik*:\n`
            report += `- Total file: ${totalFiles}\n`
            report += `- Berhasil diupdate: ${updatedFiles}\n`
            report += `- Gagal diupdate: ${failedFiles}\n\n`
            
            if (updatedFiles > 0) {
                report += `📄 *Files Updated*:\n`
                let fileList = results
                    .filter(r => r.success)
                    .map(r => `- ${r.path}`)
                    .join('\n')
                
                if (fileList.length > 1000) {
                    const files = fileList.split('\n').slice(0, 15)
                    fileList = files.join('\n') + '\n- ... dan file lainnya'
                }
                
                report += fileList + '\n\n'
            }
            
            if (failedFiles > 0) {
                report += `❌ *Files Failed*:\n`
                const failedList = results
                    .filter(r => !r.success)
                    .map(r => `- ${r.path}: ${r.error}`)
                    .join('\n')
                report += failedList + '\n\n'
            }
            
            if (needsRestart) {
                report += `⚠️ *PENTING*: File utama (xZiyy.js) telah diupdate. Silakan restart bot untuk menerapkan perubahan.`
            } else {
                report += `ℹ️ Tidak ada file utama yang diupdate, perubahan sudah aktif.`
            }
            
            return report
            
        } catch (error) {
            console.error('Error in processUpdate:', error)
            return `❌ Terjadi kesalahan saat update: ${error.message}`
        }
    }

    processUpdate()
        .then(report => {
            m.reply(report)
        })
        .catch(error => {
            m.reply(`❌ Terjadi kesalahan: ${error.message}`)
        })
}
break
*/
case 'update': {
    if (!isCreator) return reply(mess.owner)
	if (!text) return m.reply('Masukkan URL raw GitHub yang ingin diupdate!')

	const axios = require('axios')
	const fs = require('fs')
	const path = require('path')

	try {
		const url = text.trim()
		if (!url.startsWith('https://raw.githubusercontent.com')) {
			return m.reply('Gunakan URL dari raw.githubusercontent.com')
		}

		const relativePath = url.split('/master/')[1]
		if (!relativePath) return m.reply('URL tidak valid.')

		const rootDir = path.resolve(__dirname, '..')
		const targetPath = path.join(rootDir, relativePath)

		fs.mkdirSync(path.dirname(targetPath), { recursive: true })

		const { data } = await axios.get(url)
		fs.writeFileSync(targetPath, data, 'utf-8')

		m.reply(`✅ Berhasil update *${relativePath}*\nLokasi: ${targetPath}\n\n${relativePath.endsWith('xZiyy.js') ? 'Silakan restart bot untuk menerapkan update ini.' : 'Perubahan langsung aktif (jika require baru dipanggil).'} `)
	} catch (e) {
		console.error(e)
		m.reply('❌ Gagal update. Cek URL atau struktur folder.')
	}
}
break
case 'tesupdate':{
reply('Already Up To date: 5, Mei, 2025')
}
break

case 'rumaysho': {
  if (!text) return reply(`Gunakan dengan cara ${command} *topik*\n\n_Contoh_\n\n${command} Jum'at`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "⏱️",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API Rumaysho
    let {
      data
    } = await axios.get(`${apiUrlw}/api/rumaysho?query=${encodeURIComponent(text)}`);

    // Cek apakah data yang diterima bukan array kosong
    if (!data || data.length === 0) {
      reply("Maaf, artikel tidak ditemukan untuk pencarian ini.");
      return;
    }

    // Membuat teks hasil pencarian artikel
    let hasil = '*Hasil Pencarian Artikel*:\n\n';
    data.forEach((item, index) => {
      hasil += `*${index + 1}. ${item.title}*\n`;
      hasil += `🔗 ${item.link}\n\n`;
    });

    reply(hasil);
  } catch (error) {
    console.error("Error fetching articles:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.");
  }
}
break;
case 'kajian': {
  if (!text) return reply(`Gunakan dengan cara ${command} *topik*\n\n_Contoh_\n\n${command} Kajian Rutin Kamis Sore`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "⏱️",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API YPIA
    let {
      data
    } = await axios.get(`${apiUrlw}/api/ypia?query=${encodeURIComponent(text)}`);

    // Cek apakah data yang diterima bukan array kosong
    if (!data || data.length === 0) {
      reply("Maaf, tidak ditemukan kajian untuk topik yang dicari.");
      return;
    }

    // Membuat teks hasil pencarian kajian
    let hasil = '*Hasil Pencarian Kajian*:\n\n';
    data.forEach((item, index) => {
      hasil += `*${index + 1}. ${item.title}*\n`;
      hasil += `🔗 ${item.link}\n\n`;
    });

    reply(hasil);
  } catch (error) {
    console.error("Error fetching kajian:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.");
  }
}
break;
case 'soundc':
case 'soundcloud': {
  // Mengecek apakah pengguna memberikan query pencarian
  if (!text) return reply(`Gunakan dengan format ${command} *judul lagu*\n\nContoh:\n\n${command} helena`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "🔍",
      key: m.key
    }
  });

  try {
    // Mengirim request ke API dengan query
    let response = await axios.get(`${apiUrlw}/api/soundcloud?query=${encodeURIComponent(text)}`);

    // Mengambil data dari hasil API
    let results = response.data;

    // Mengecek apakah ada hasil
    if (results.length > 0) {
      let message = `Hasil pencarian SoundCloud untuk *"${text}"*:\n\n`;

      // Looping hasil dan format menjadi string
      results.forEach((item, index) => {
        message += `${index + 1}. *${item.title}*\n`;
        if (item.creator) message += `   🎙️ Creator: ${item.creator}\n`;
        if (item.views) message += `   👀 Views: ${item.views}\n`;
        if (item.duration) message += `   ⏱️ Duration: ${item.duration}\n`;
        if (item.uploadDate) message += `   📅 Uploaded: ${item.uploadDate}\n`;
        message += `   🔗 [Link](${item.url})\n\n`;
      });

      reply(message);
    } else {
      reply("Maaf, tidak ada hasil yang ditemukan untuk pencarian tersebut.");
    }
  } catch (error) {
    console.error("Error fetching SoundCloud results:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data dari SoundCloud.");
  }
}
break;

case 'gamedva': {
  try {
    if (!text) return reply("Masukkan query untuk pencarian.");

    const apiUrl = `${apiUrlw}/api/gamedva?query=${encodeURIComponent(text)}&url=&type=searchApp`;

    const response = await axios.get(apiUrl);
    res = response.data

    if (res.length === 0) {
      return reply("Tidak ditemukan hasil pencarian.");
    }

    const message = res.map(res => {
      const {
        title,
        developer,
        link,
        image,
        version
      } = res
      return `🎮 **${title}**\n🔗 link: ${link}\nimage: ${image}\nversion: ${version}`;
    }).join("\n");

    reply(message);
  } catch (error) {
    console.error("Error fetching GameDVA data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data.");
  }
}
break;
//======[ BERITA ]======\\
case 'gempa': {
  try {
    const apiUrl = `${apiUrlw}/api/gempa`;

    const response = await axios.get(apiUrl);
    const {
      status,
      data
    } = response.data;

    if (status !== "success") {
      return reply("Gagal mendapatkan data gempa.");
    }

    const {
      gempa
    } = data.Infogempa;
    const {
      Tanggal,
      Jam,
      Coordinates,
      Lintang,
      Bujur,
      Magnitude,
      Kedalaman,
      Wilayah,
      Potensi,
      Dirasakan,
      Shakemap
    } = gempa;

    // Menyusun pesan detail gempa
    const message = `
      🌀 **Info Gempa** 🌀
      📅 Tanggal: ${Tanggal}
      🕒 Jam: ${Jam}
      📍 Koordinat: ${Coordinates} (${Lintang}, ${Bujur})
      🌍 Wilayah: ${Wilayah}
      ⚖️ Magnitude: ${Magnitude}
      🌊 Kedalaman: ${Kedalaman}
      💨 Potensi: ${Potensi}
      🌍 Dirasakan: ${Dirasakan}
    `;

    reply(message);
  } catch (error) {
    console.error("Error fetching Gempa data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data gempa.");
  }
}
break;
case 'liputan6': {
  reply('Tunggu sebentar, sedang mengambil data...');

  // Fungsi untuk mengambil data dari API
  async function fetchNews() {
    const res = await axios.get(`${apiUrlw}/api/liputan6`);
    return res.data.data;
  }

  try {
    const newsData = await fetchNews();

    if (!newsData || newsData.length === 0) {
      return m.reply('Tidak ada berita ditemukan.');
    }

    // Gabungkan semua berita ke dalam satu pesan
    let allNews = `*Berita Terbaru dari Liputan6*\n\n`;

    newsData.forEach((item, index) => {
      const {
        title,
        link,
        tag,
        image,
        source
      } = item;

      allNews += `*Berita ${index + 1}*\n` +
        `▢ *Judul* : ${title}\n` +
        `▢ *Tag* : ${tag || 'Tidak ada tag'}\n` +
        `▢ *Sumber* : ${source}\n` +
        `▢ *Link* : [Baca Selengkapnya](${link})\n\n`;
    });

    // Kirim semua berita dalam satu pesan
    m.reply(allNews);
  } catch (error) {
    console.error('Error fetching news:', error);
    m.reply('Maaf, terjadi kesalahan saat mengambil berita.');
  }
}
break;
//======[ QUOTES ]======\\
      case 'quotes-en': {
        async function quotePopular() {
          try {
            // Mengambil halaman Goodreads
            const response = await axios.get('https://www.goodreads.com/quotes');
            const $ = cheerio.load(response.data);
            const quotes = [];

            // Scraping data quotes
            $('.quote').each((i, element) => {
              const quoteText = $(element).find('.quoteText').text().trim();
              const author = $(element).find('.authorOrTitle').text().trim();

              quotes.push({
                quote: quoteText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim(),
                author: author || "Unknown"
              });
            });

            // Kembalikan hasil berupa array
            return quotes;
          }
          catch (error) {
            // Tangani error jika ada
            throw error;
          }
        }

        // Memanggil fungsi dan menangani hasil
        quotePopular().then(hasil => {
          if (hasil.length === 0) {
            m.reply('Tidak ada hasil yang ditemukan.');
            return;
          }

          // Pilih salah satu secara acak
          const randomResult = hasil[Math.floor(Math.random() * hasil.length)];
          const replyText = `_${randomResult.quote}_\n\n` +
            `~${randomResult.author}`;

          // Kirim balasan
          m.reply(replyText);
        }).catch(error => {
          // Tangani error
          m.reply('Terjadi kesalahan saat mengambil Quote Popular.');
          m.reply(error.message);
        });
      }
      break;
      case 'quotes': {
        //wm senn
        async function quotes(input) {
          return new Promise((resolve, reject) => {
            fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
              .then(res => res.text())
              .then(res => {
                const $ = cheerio.load(res)
                data = []
                $('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
                  x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
                  y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
                  z = $(element).find('q[class="fbquote"]').text().trim()
                  //wm senn
                  data.push({
                    author: x,
                    bio: y,
                    quote: z
                  })
                })
                data.splice(2, 1)
                //wm senn
                if (data.length == 0) return resolve({
                  creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb',
                  status: false
                })
                resolve({
                  creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb',
                  status: true,
                  data
                })
              }).catch(reject)
          })
        }
        //wm senn
        if (!text) return m.reply("Masukan Tipe Quotes\n\nContoh: .quotes senja")
        //wm senn
        let ayam = await quotes(text)
        //wm senn
        let jawir = ayam.data
        let ngawi = pickRandom(jawir)
        //wm senn
        let cap = `  
_${ngawi.quote}_

~ ${ngawi.author}
`.trim()
        //wm senn
        reply(cap)
      }
      break
      case 'quotesanime': {
        async function quotesAnime() {
          try {
            const page = Math.floor(Math.random() * 184);
            const {
              data
            } = await axios.get('https://otakotaku.com/quote/feed/' + page);
            const $ = cheerio.load(data);
            const hasil = [];
            $('div.kotodama-list').each((l, h) => {
              hasil.push({
                link: $(h).find('a').attr('href'),
                gambar: $(h).find('img').attr('data-src'),
                karakter: $(h).find('div.char-name').text().trim(),
                anime: $(h).find('div.anime-title').text().trim(),
                episode: $(h).find('div.meta').text(),
                up_at: $(h).find('small.meta').text(),
                quotes: $(h).find('div.quote').text().trim()
              });
            });
            return hasil;
          }
          catch (error) {
            throw error;
          }
        }

        quotesAnime().then(hasil => {
          if (hasil.length === 0) {
            m.reply('Tidak ada hasil yang ditemukan.');
            return;
          }

          // Ambil 1 data saja
          const randomResult = hasil[Math.floor(Math.random() * hasil.length)];
          const replyTextt = `[ *QUOTESANIME* ]\n\nQuotes: ${randomResult.quotes}\nAnime: ${randomResult.anime}\nEpisode: ${randomResult.episode}\nUp: ${randomResult.up_at}\nKarakter: ${randomResult.karakter}\nLink: ${randomResult.link}`;

          reply(replyTextt);
        }).catch(error => {
          m.reply('Terjadi kesalahan saat merandom di QuotesAnime.');
          m.reply(error.message);
        });
      }
      break;
case 'jodohku': {
	if (!m.isGroup) return m.reply(mess.group)
	const metadata = await fuzzy.groupMetadata(m.chat)
	const member = metadata.participants.map(a => a.id).filter(id => id !== m.sender)
	if (member.length < 1) return m.reply('Tidak cukup member untuk mencari jodoh.')
	const jodoh = pickRandom(member)
	await fuzzy.sendMessage(m.chat, {
		text: `👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`,
		mentions: [m.sender, jodoh]
	}, { quoted: m })
}
break

case 'jadian': {
	if (!m.isGroup) return m.reply(mess.group)
	const metadata = await fuzzy.groupMetadata(m.chat)
	const member = metadata.participants.map(a => a.id)
	if (member.length < 2) return m.reply('Tidak cukup member untuk dijodohkan.')
	let j1, j2
	do {
		j1 = pickRandom(member)
		j2 = pickRandom(member)
	} while (j1 === j2)
	await fuzzy.sendMessage(m.chat, {
		text: `Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${j1.split('@')[0]} ❤ @${j2.split('@')[0]}`,
		mentions: [j1, j2]
	}, { quoted: m })
}
break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				fuzzy.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
      case 'cekkodam': {
        if (!text) return m.reply("ketik nama mu")

        const khodam = pickRandom([
          "Kaleng Cat Avian",
          "Pipa Rucika",
          "King Hitam",
          "Lemari dua Pintu",
          "Kacang Hijau",
          "Kulkas mini",
          "Burung beo",
          "Air",
          "Api",
          "Batu",
          "Magnet",
          "Sempak",
          "Botol Tupperware",
          "Badut Mixue",
          "Sabun GIV",
          "Sandal Swallow",
          "Jarjit",
          "Ijat",
          "Fizi",
          "Mail",
          "Ehsan",
          "Upin",
          "Ipin",
          "sungut lele",
          "Tok Dalang",
          "Opah",
          "Opet",
          "Alul",
          "Pak Vinsen",
          "Maman Resing",
          "Pak RT",
          "Admin ETI",
          "Bung Towel",
          "Lumpia Basah",
          "Bjorka",
          "Hacker",
          "Martabak Manis",
          "Baso Tahu",
          "Tahu Gejrot",
          "Dimsum",
          "Seblak",
          "Aromanis",
          "Gelembung sabun",
          "Kuda",
          "Seblak Ceker",
          "Telor Gulung",
          "Tahu Aci",
          "Tempe Mendoan",
          "Nasi Kucing",
          "Kue Cubit",
          "Tahu Sumedang",
          "Nasi Uduk",
          "Wedang Ronde",
          "Kerupuk Udang",
          "Cilok",
          "Cilung",
          "Kue Sus",
          "Jasuke",
          "Seblak Makaroni",
          "Sate Padang",
          "Sayur Asem",
          "Kromboloni",
          "Marmut Pink",
          "Belalang Mullet",
          "Kucing Oren",
          "Lintah Terbang",
          "Singa Paddle Pop",
          "Macan Cisewu",
          "Vario Mber",
          "Beat Mber",
          "Supra Geter",
          "Oli Samping",
          "Knalpot Racing",
          "Jus Stroberi",
          "Jus Alpukat",
          "Alpukat Kocok",
          "Es Kopyor",
          "Cappucino Cincau",
          "Jasjus Melon",
          "Teajus Apel",
          "Pop ice Mangga",
          "Teajus Gulabatu",
          "Air Selokan",
          "Air Kobokan",
          "TV Tabung",
          "Keran Air",
          "Tutup Panci",
          "Kotak Amal",
          "Tutup Termos",
          "Tutup Botol",
          "Kresek Item",
          "Kepala Casan",
          "Ban Serep",
          "Kursi Lipat",
          "Kursi Goyang",
          "Kulit Pisang",
          "Warung Madura",
          "Gorong-gorong",
        ])

        const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", {
          text: `${text}, khodamnya: ${khodam}. jangan lupa di tap tap`,
          voice: "id_001"
        }, {
          headers: {
            Referer: "https://gesserit.co/tiktok",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
            responseType: "arraybuffer"
          }
        })).data
        const b = Buffer.from(a.audioUrl)
        fuzzy.sendMessage(from, {
          audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
          mimetype: 'audio/mpeg', // pastikan MIME type sesuai dengan format audio
          ptt: true // Ini adalah parameter untuk mengirimkan sebagai voice note (Push To Talk)
        });
      }
      break
//======[ TOOLS ]======\\
case 'ssweb': {
  if (!text) return reply(`Gunakan dengan cara ${command} *link*\n\n_Contoh_\n\n${command} https://xZiyy.com`);

  if (!text.startsWith('https://')) {
    return reply('Link harus menggunakan https://');
  }

  let ss = await (await fetch(`https://image.thum.io/get/fullpage/${text}`)).buffer();
  fuzzy.sendFile(m?.chat, ss, "", "Done", m);
}
break;
			case 'tourlv2': {
				try {
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UploadFileUgu(media)
						m.reply('Url : ' + anu.url)
					} else m.reply('Send Media yg ingin di Upload!')
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
			break
    case 'tourl': {
        if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
        try {
          let media = await fuzzy.downloadAndSaveMediaMessage(quoted, makeid(5))
          let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
            console.log(stdout)
            return reply(stdout)
          })
        }
        catch (error) {
          console.log(error)
          return reply("Error...")
        }
      }
      break
case 'translate': {

  async function fetchTranslation(text, target) {
    const res = await axios.get(`${apiUrlw}/api/translate?text=${encodeURIComponent(text)}&target=${target}`);
    return res.data;
  }

  const swn = args.join(" ")
  const text = swn.split(",")[0];
  const target = swn.split(",")[1];

  if (!text) {
    return m.reply('Masukkan teks yang ingin diterjemahkan.\ncontoh:\n!translate hello world, en\n!translate hello world, id\n\nketik !languages untuk melihat bahasa');
  }

  if (!target) {
    return m.reply('Masukkan teks yang ingin diterjemahkan.\ncontoh:\n!translate hello world, en\n!translate hello world, id\n\nketik !languages untuk melihat bahasa');
  }

  try {
    const result = await fetchTranslation(text, target);

    if (!result.success) {
      return m.reply('Gagal menerjemahkan teks.');
    }

    const {
      translatedText
    } = result;
    m.reply(`Hasil terjemahan:\n\n${translatedText}`);
  } catch (error) {
    console.error('Error fetching translation:', error);
    m.reply('Maaf, terjadi kesalahan saat menerjemahkan teks.');
  }
}
break;
case 'languages': {
  reply('Tunggu sebentar, sedang mengambil daftar bahasa...');

  async function fetchLanguages() {
    const res = await axios.get(`${apiUrlw}/api/languages`);
    return res.data;
  }

  try {
    const result = await fetchLanguages();

    if (!result.success) {
      return m.reply('Gagal mengambil daftar bahasa.');
    }

    const {
      languages
    } = result;
    let languageList = '*Daftar Bahasa yang Tersedia*\n\n';

    for (const [code, name] of Object.entries(languages)) {
      languageList += `▢ ${name} (${code})\n`;
    }

    m.reply(languageList);
  } catch (error) {
    console.error('Error fetching languages:', error);
    m.reply('Maaf, terjadi kesalahan saat mengambil daftar bahasa.');
  }

}
break;
//======[ OWNER ]======\\
      case 'delsesi':
      case 'clear':
      case 'ds':
      case 'clearsession': {
        if (!isCreator) return reply(mess.owner)
        fs.readdir("./media/database/session", async function (err, files) {
          if (err) {
            console.log('Unable to scan directory: ' + err);
            return reply('Unable to scan directory: ' + err);
          }
          let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
          )
          console.log(filteredArray.length);
          /*let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return reply(teks)
          filteredArray.map(function(e, i) {
          teks += (i + 1) + `. ${e}\n`
          })
          reply(teks)
          await sleep(2000)*/
          reply("Menghapus file sampah...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./media/database/session/${file}`)
          });
          await sleep(2000)
          reply("Berhasil menghapus semua sampah di folder session")
        });
      }
      break
      case 'delsampah': {
        if (!isCreator) return reply(mess.owner)
        let directoryPath = path.join('./media/tmp') //&& './media') //path.join();
        fs.readdir(directoryPath, async function (err, files) {
          if (err) {
            return reply('Tidak dapat memindai direktori: ' + err);
          }
          let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm") || item.endsWith("bin"))
          var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return reply(teks)
          filteredArray.map(function (e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          reply(teks)
          await sleep(2000)
          m.reply("Menghapus file sampah...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./media/tmp/${file}`) //&& `./media/${file}`) 
          });
          await sleep(2000)
          reply("Berhasil menghapus semua sampah")
        });
      }
      break
      case 'backup': {
        if (!isCreator) return reply(mess.owner)
        await reply('akan dikirim me nomor owner..');
        const {
          execSync
        } = require("child_process");
        const ls = (await execSync("ls"))
          .toString()
          .split("\n")
          .filter(
            (pe) =>
            pe != "node_modules" &&
            pe != "package-lock.json" &&
            pe != "yarn.lock" &&
            pe != ""
          );
        const dyn = moment.tz('Asia/Jakarta').format('dddd-DD-MMMM-YYYY')
        const exec = await execSync(`zip -r clairity-${dyn}.zip ${ls.join(" ")}`);
        await fuzzy.sendMessage(`${global.owner}@s.whatsapp.net`, {
          document: await fs.readFileSync(`./clairity-${dyn}.zip`),
          mimetype: "application/zip",
          fileName: `clairity-${dyn}.zip`,
        }, {
          quoted: m
        });
        await execSync(`rm -rf clairity-${dyn}.zip`);
      }
      break

case 'setwelcome':{
   if (!isAdmins && !isCreator) return reply('only admin & creator')
   if (!m.isGroup) return reply('only gc')
   if (!text) return reply('Masukkan teks welcome-nya!\nContoh: .setwelcome Selamat datang @user di grup @group\n\n\n@user // untuk menyebut user yg masuk\n@group untuk menyebut nama group\n@desc untuk menampilkan deskripsi group');
   global.db.data.chats[m.chat].welcomeText = text; // Simpan teks welcome per grup
   reply('Teks welcome berhasil disimpan!');
}
break
case 'setleave':{
   if (!isAdmins && !isCreator) return reply('only admin & creator')
   if (!m.isGroup) return reply('only gc')
   if (!text) return reply('Masukkan teks leave-nya!\nContoh: .setleave Selamat tinggal @user di grup @group\n\n\n@user // untuk menyebut user yg masuk\n@group untuk menyebut nama group\n@desc untuk menampilkan deskripsi group');
   global.db.data.chats[m.chat].leaveText = text; // Simpan teks welcome per grup
   reply('Teks welcome berhasil disimpan!');
}
break
case 'creator':
case 'owner': {
  const Kontol = await m.reply("ini dia ownerku yang baik hati dan tidak sombong, jangan di spam yaa kalo gak di bales!!")
  const options = {
    contextInfo: {
      forwardingScore: 10,
      isForwarded: true
    }
  }; // Opsional
  fuzzy.sendContact(from, global.owner, Kontol, options)
}
break
case 'setimgmenu': {
	if (!isCreator) return reply(mess.owner)
	if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
	try {
        let media = await fuzzy.downloadAndSaveMediaMessage(quoted, makeid(5))
     	let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
        global.menuimgUrl = stdout
		reply(`Success: Image menu berhasil disimpan!\n\n${stdout}`)
     })
	} catch (error) {
		console.log(error)
		return reply("Gagal upload ke server!")
	}
}
break

case 'setimgreply': {
	if (!isCreator) return reply(mess.owner)
	if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
	try {
	
	    let media = await fuzzy.downloadAndSaveMediaMessage(quoted, makeid(5))
        let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
		global.imgUrl = stdout
		reply('Success: Image reply berhasil disimpan!')
    })
	} catch (error) {
		console.log(error)
		return reply("Gagal upload ke server!")
	}
}
break
case 'setbotname': {
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.botname = text
}
break
case 'setownername': {
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.ownername = text
}
break
case 'setownernumber': {
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.owner = text
}
break
case 'tes': {
  reply('aktif kak')
}
break
case 'onlygroup':
case 'onlygc':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
  db.data.settings[botNumber].onlygrub = true
  db.data.settings[botNumber].onlypc = true
  reply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
  db.data.settings[botNumber].onlygrub = false
  db.data.settings[botNumber].onlypc = false
  reply(`Successfully Changed Onlygroup To ${q}`)
}
break
case 'banchat': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "on") {
    db.data.chats[m?.chat].isBannedChat = true
    reply("berhasil banchat")
  } else if (args[0] == "off") {
    db.data.chats[m?.chat].isBannedChat = false
    reply("berhasil unbanchat")
  } else {
    reply('contoh:\n!banchat on')
  }
}
break

case 'onlyadmin': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "off") {
    if (db.data.settings[botNumber].public == true) return reply("Sudah off")
    db.data.settings[botNumber].public = true
    reply("Mode admin Telah pff")
  } else if (args[0] == "on") {
    if (db.data.settings[botNumber].public == false) return reply("Sudah on")
    db.data.settings[botNumber].public = false
    reply("Mode admin Telah Active")
  }
}
break
case 'mode': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "public") {
    if (db.data.settings[botNumber].public == true) return reply("Sudah Active")
    db.data.settings[botNumber].public = true
    reply("Mode Public Telah Active")
  } else if (args[0] == "self") {
    if (db.data.settings[botNumber].public == false) return reply("Sudah on")
    db.data.settings[botNumber].public = false
    reply("Mode Self Telah Active")
  }
}
break

case 'ai': {
  if (!args[0]) {
    return m.reply("Gunakan perintah:\n- .ai on (untuk mengaktifkan AI)\n- .ai off (untuk menonaktifkan AI)");
  }

  if (args[0].toLowerCase() === "on") {
    if (!global.db.data.chats[m?.chat]) global.db.data.chats[m?.chat] = {};
    global.db.data.chats[m?.chat].autoai = true;
    return m.reply("Fitur AI telah diaktifkan untuk chat ini.");
  } else if (args[0].toLowerCase() === "off") {
    if (!global.db.data.chats[m?.chat]) global.db.data.chats[m?.chat] = {};
    global.db.data.chats[m?.chat].autoai = false;
    return m.reply("Fitur AI telah dinonaktifkan untuk chat ini.");
  } else {
    return m.reply("Pilihan tidak valid! Gunakan:\n- .ai on (untuk mengaktifkan AI)\n- .ai off (untuk menonaktifkan AI)");
  }
}
break




case 'cekcuaca': case 'cuaca': {
 if (!q) return reply('Masukkan nama lokasi!\nContoh: cekcuaca Jakarta');
 let lokasi = encodeURIComponent(q);
 let url = `https://fastrestapis.fasturl.cloud/search/bmkgweather?location=${lokasi}`;

 try {
 let res = await fetch(url);
 let json = await res.json();
 if (json.status !== 200 || json.content !== 'Success') {
 return m.reply('Gagal mengambil data cuaca!');
 }
 let cuaca = json.result.presentWeather.data.cuaca;
 let lokasiInfo = json.result.presentWeather.data.lokasi;
 let hasil = `*Cuaca Saat Ini - ${lokasiInfo.kotkab}, ${lokasiInfo.provinsi}*\n\n` +
 `• Lokasi: ${lokasiInfo.desa}, ${lokasiInfo.kecamatan}\n` +
 `• Cuaca: ${cuaca.weather_desc}\n` +
 `• Suhu: ${cuaca.t}°C\n` +
 `• Kelembapan: ${cuaca.hu}%\n` +
 `• Arah Angin: ${cuaca.wd} → ${cuaca.wd_to} (${cuaca.ws} km/jam)\n` +
 `• Jarak Pandang: ${cuaca.vs_text}\n` +
 `• Terakhir diperbarui: ${cuaca.local_datetime}\n`;

 await fuzzy.sendMessage(m.chat, {
 image: { url: cuaca.image },
 caption: hasil
 }, { quoted: m });
 } catch (e) {
 console.log(e);
 reply('Terjadi kesalahan saat mengambil data cuaca.');
 }
 }
 break



//++++++++[ STICKER ]++++++++++
      case 'bratvidio': 
      case 'bratvideo': {
        const ongoingCommands = new Set(); // Set untuk melacak proses berjalan

        // Cek apakah pengguna sudah menjalankan perintah
        if (ongoingCommands.has(m.sender)) {
          return m.reply('Maaf, masih ada perintah yang sedang berjalan. Tunggu sampai selesai.');
        }

        // Tandai pengguna sebagai sedang menjalankan perintah
        ongoingCommands.add(m.sender);

        try {
          if (!text) return reply(`Contoh: ${prefix + command} hai`);
          if (text.length > 250) return reply(`Karakter terbatas, max 250!`);

          const {
            execSync
          } = require('child_process');
          const words = text.split(" ");
          const tempDir = path.resolve('./media/tmp');
          if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
          const framePaths = [];

          for (let i = 0; i < words.length; i++) {
            const currentText = words.slice(0, i + 1).join(" ");

            const res = await axios.get(
              `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`, {
                responseType: "arraybuffer"
              }
            ).catch((e) => e.response);

            const framePath = path.join(tempDir, `frame${i}.mp4`);
            fs.writeFileSync(framePath, res.data);
            framePaths.push(framePath);
          }

          const fileListPath = path.join(tempDir, "filelist.txt");
          let fileListContent = "";

          for (let i = 0; i < framePaths.length; i++) {
            fileListContent += `file '${framePaths[i]}'\n`;
            fileListContent += `duration 0.7\n`;
          }

          fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
          fileListContent += `duration 2\n`;

          fs.writeFileSync(fileListPath, fileListContent);
          const outputVideoPath = path.join(tempDir, "output.mp4");
          execSync(
            `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
          );

          await fuzzy.sendImageAsSticker(m.chat, outputVideoPath, m, {
            packname: `${m.pushName}\n\n\n\n\n\n\n\n${global.packname}`,
            author: global.author,
          });
 
          framePaths.forEach((frame) => {
            if (fs.existsSync(frame)) fs.unlinkSync(frame);
          });
          if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
          if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
        }
        catch (e) {
          console.error(e);
          reply('Terjadi kesalahan');
        }
        finally {
          ongoingCommands.delete(m.sender); // Hapus pengguna dari daftar proses berjalan
        }
        break;
      }
case 'igstalk': {
/*
Jangan Hapus Wm Bang 

*Instagram Stalker  Case*

Stalking Account Instagram Via Username 

*[Sumber]*
https://whatsapp.com/channel/0029Vb3u2awADTOCXVsvia28

*[Sumber Scrape]*

Jazxcode 
*/

  if (!args[0]) return m.reply('Masukkan Username Yamg Ingin Di Stalk\n\n*Example : .igstalk jokowi*');
  
  try {
    const query = args[0];
    const endpoint = 'https://privatephotoviewer.com/wp-json/instagram-viewer/v1/fetch-profile';
    const payload = { find: query };
    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
      'Referer': 'https://privatephotoviewer.com/'
    };

    const { data } = await axios.post(endpoint, payload, { headers });
    const html = data.html;
    const $ = cheerio.load(html);
    let profilePic = $('#profile-insta').find('.col-md-4 img').attr('src');
    if (profilePic && profilePic.startsWith('//')) {
      profilePic = 'https:' + profilePic;
    }
    const name = $('#profile-insta').find('.col-md-8 h4.text-muted').text().trim();
    const username = $('#profile-insta').find('.col-md-8 h5.text-muted').text().trim();
    const stats = {};
    $('#profile-insta')
      .find('.col-md-8 .d-flex.justify-content-between.my-3 > div')
      .each((i, el) => {
        const statValue = $(el).find('strong').text().trim();
        const statLabel = $(el).find('span.text-muted').text().trim().toLowerCase();
        if (statLabel.includes('posts')) {
          stats.posts = statValue;
        } else if (statLabel.includes('followers')) {
          stats.followers = statValue;
        } else if (statLabel.includes('following')) {
          stats.following = statValue;
        }
      });
    const bio = $('#profile-insta').find('.col-md-8 p').text().trim();

    let caption = `- *Name :* ${name}\n`
    caption += `- *Username :* ${username}\n`
    caption += `- *Posts :* ${stats.posts}\n`
    caption += `- *Followers :* ${stats.followers}\n`
    caption += `- *Following :* ${stats.following}\n`
    caption += `- *Bio :* ${bio}`;
    
    if (profilePic) {
      await fuzzy.sendMessage(m.chat, { 
        image: { url: profilePic },
        caption: caption
      }, { quoted: m });
    } else {
      await m.reply(caption);
    }
  } catch (error) {
    m.reply('Tidak Ada Akun Tersebut Atau Error');
  }
}
break;
    case 'tiktokstalk':
  case 'tikstalk': {
        if (!text) return m.reply('Masukkan username TikTok');

        try {
          // Validasi input username
          if (!text.trim()) return m.reply('Username tidak boleh kosong');

          // Ambil data dari API
          const response = await axios.get(`https://api.siputzx.my.id/api/stalk/tiktok?username=${text}`);
          const userData = response.data.data;

          // Susun pesan dengan SELURUH informasi yang didapatkan
          let pesan = `*📋 INFORMASI AKUN TIKTOK LENGKAP* 

👤 *PROFIL DASAR*
• Nama Panggilan: ${userData.user.nickname}
• ID Pengguna: ${userData.user.id}
• ID Unik: ${userData.user.uniqueId}
• Short ID: ${userData.user.shortId || 'Tidak tersedia'}
• Sec UID: ${userData.user.secUid}
• Bio: ${userData.user.signature}
• Wilayah: ${userData.user.region}
• Bahasa: ${userData.user.language}

🔍 *STATUS AKUN*
• Terverifikasi: ${userData.user.verified ? 'Ya' : 'Tidak'}
• Akun Pribadi: ${userData.user.privateAccount ? 'Ya' : 'Tidak'}
• Akun Rahasia: ${userData.user.secret ? 'Ya' : 'Tidak'}
• Organisasi: ${userData.user.isOrganization ? 'Ya' : 'Tidak'}

📊 *STATISTIK*
• Pengikut: ${userData.stats.followerCount.toLocaleString()}
• Mengikuti: ${userData.stats.followingCount.toLocaleString()}
• Total Like: ${userData.stats.heartCount.toLocaleString()}
• Jumlah Video: ${userData.stats.videoCount.toLocaleString()}
• Jumlah Disukai: ${userData.stats.diggCount.toLocaleString()}
• Jumlah Teman: ${userData.stats.friendCount.toLocaleString()}

🖼️ *AVATAR*
• Avatar Besar: ${userData.user.avatarLarger}
• Avatar Sedang: ${userData.user.avatarMedium}
• Avatar Kecil: ${userData.user.avatarThumb}

⚙️ *PENGATURAN*
• Pengaturan Komentar: ${userData.user.commentSetting}
• Pengaturan Duet: ${userData.user.duetSetting}
• Pengaturan Stitch: ${userData.user.stitchSetting}
• Pengaturan Download: ${userData.user.downloadSetting}

🌐 *TAUTAN & KONEKSI*
• Tautan Bio: ${userData.user.bioLink?.link || 'Tidak tersedia'}
• Risiko Tautan: ${userData.user.bioLink?.risk || 'Tidak diketahui'}

📅 *INFORMASI WAKTU*
• Waktu Pembuatan Akun: ${new Date(userData.user.createTime * 1000).toLocaleString()}
• Waktu Modifikasi Nama: ${new Date(userData.user.nickNameModifyTime * 1000).toLocaleString()}

🎵 *TAB PROFIL*
• Tab Musik: ${userData.user.profileTab.showMusicTab ? 'Aktif' : 'Tidak Aktif'}
• Tab Pertanyaan: ${userData.user.profileTab.showQuestionTab ? 'Aktif' : 'Tidak Aktif'}
• Tab Playlist: ${userData.user.profileTab.showPlayListTab ? 'Aktif' : 'Tidak Aktif'}

🏷️ *INFORMASI TAMBAHAN*
• Pengguna Komersial: ${userData.user.commerceUserInfo?.commerceUser ? 'Ya' : 'Tidak'}
• Jual di TikTok: ${userData.user.ttSeller ? 'Ya' : 'Tidak'}
• Visibilitas Mengikuti: ${userData.user.followingVisibility}
• Room ID: ${userData.user.roomId || 'Tidak tersedia'}`;

          // Kirim pesan
          m.reply(pesan);

        }
        catch (error) {
          console.error('Error:', error);

          // Tangani berbagai jenis kesalahan
          if (error.response) {
            // Kesalahan respons dari server
            if (error.response.status === 404) {
              m.reply('Username TikTok tidak ditemukan');
            }
            else {
              m.reply(`Gagal mengambil data. Status: ${error.response.status}`);
            }
          }
          else if (error.request) {
            // Permintaan terkirim tapi tidak ada respons
            m.reply('Tidak ada respons dari server');
          }
          else {
            // Kesalahan lainnya
            m.reply('Terjadi kesalahan saat mengambil data');
          }
        }
      }
      break;
      case 'githubstalk': {
        if (!text) return m.reply('Masukkan username GitHub');

        try {
          // Validasi input username
          if (!text.trim()) return m.reply('Username tidak boleh kosong');

          // Ambil data dari API
          const response = await axios.get(`https://api.siputzx.my.id/api/stalk/github?user=${text}`);
          const userData = response.data.data;

          // Konversi tanggal
          const createdAt = new Date(userData.created_at).toLocaleString('id-ID', {
            dateStyle: 'full',
            timeStyle: 'long'
          });
          const updatedAt = new Date(userData.updated_at).toLocaleString('id-ID', {
            dateStyle: 'full',
            timeStyle: 'long'
          });

          // Susun pesan dengan informasi yang didapatkan
          let pesan = `*📋 INFORMASI PROFIL GITHUB* 

👤 *IDENTITAS*
• Username: ${userData.username}
• Nama Lengkap: ${userData.nickname}
• ID Pengguna: ${userData.id}
• Node ID: ${userData.nodeId}
• Tipe Akun: ${userData.type}

📝 *INFORMASI PROFIL*
• Bio: ${userData.bio || 'Tidak ada bio'}
• Perusahaan: ${userData.company || 'Tidak disebutkan'}
• Blog/Website: ${userData.blog || 'Tidak ada'}
• Lokasi: ${userData.location || 'Tidak disebutkan'}
• Email: ${userData.email || 'Tidak publik'}

🔢 *STATISTIK*
• Repository Publik: ${userData.public_repo}
• Gist Publik: ${userData.public_gists}
• Pengikut: ${userData.followers}
• Mengikuti: ${userData.following}

🖼️ *AVATAR*
• Foto Profil: ${userData.profile_pic}

🔗 *TAUTAN*
• Profil GitHub: ${userData.url}

📅 *INFORMASI WAKTU*
• Akun Dibuat: ${createdAt}
• Terakhir Diperbarui: ${updatedAt}

⚙️ *STATUS TAMBAHAN*
• Admin: ${userData.admin ? 'Ya' : 'Tidak'}`;

          // Kirim pesan
          m.reply(pesan);

        }
        catch (error) {
          console.error('Error:', error);

          // Tangani berbagai jenis kesalahan
          if (error.response) {
            // Kesalahan respons dari server
            if (error.response.status === 404) {
              m.reply('Username GitHub tidak ditemukan');
            }
            else {
              m.reply(`Gagal mengambil data. Status: ${error.response.status}`);
            }
          }
          else if (error.request) {
            // Permintaan terkirim tapi tidak ada respons
            m.reply('Tidak ada respons dari server');
          }
          else {
            // Kesalahan lainnya
            m.reply('Terjadi kesalahan saat mengambil data');
          }
        }
      }
      break;
      case 'bisakah': {
        if (!m.isGroup) return reply(mess.group)
        const bisakah = body.slice(0)
        const bisa = ['BISA', 'Tidak Bisa', 'Oh tentu saja bisa dong', 'Udah dari lahir dia bisa kaya gitu kak 😂˜„', 'Oh tentu saja tidak bisa', 'Wuih bisa bisa', 'Ga mao jawab ah lu wibu', 'Tentu saja bisa eh tapi boong awokawok ', 'Engga engga dia ga bisa', 'Enggaklah', 'Aku ga mao jawbab 😆™‚', 'Rahasia dong', 'Ulangi Tod gua ga paham', 'Mana gua tau anjir']
        const keh = bisa[Math.floor(Math.random() * bisa.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + bisakah + '*\n\n*Jawaban :* ' + keh
        }, {
          quoted: m
        })
      }
      break
case "listgc": {
  try {
    let groupResult = await fuzzy.groupFetchAllParticipating();
    let gcall = Object.values(groupResult || {});
    
    let listgc = '\n';
    gcall.forEach((u, i) => {
      listgc += `${i+1}. ${u.subject}\nID: ${u.id}\n\n`;
    });
    
    await fuzzy.sendMessage(m.chat, { text: listgc }, { quoted: m });
    
  } catch (error) {
    console.error("Error:", error);
    await fuzzy.sendMessage(m.chat, { text: `Error: ${error.message}` }, { quoted: m });
  }
}
break
case 'leave':
case "leavegc": {
  try {
    const groupId = args[0];
    
    if (!groupId) {
      return fuzzy.sendMessage(m.chat, {
        text: "Silahkan masukkan ID grup yang ingin ditinggalkan.\n\nContoh: .leavegc 1203634192724892480@g.us"
      }, { quoted: m });
    }
      if (!groupId.endsWith("@g.us")) {
      return fuzzy.sendMessage(m.chat, {
        text: "Format ID grup tidak valid. ID grup harus diakhiri dengan @g.us"
      }, { quoted: m });
    }
    console.log(`Mencoba keluar dari grup dengan ID: ${groupId}`);
    await fuzzy.groupLeave(groupId);
    
    fuzzy.sendMessage(m.chat, {
      text: `✅ Berhasil keluar dari grup dengan ID: ${groupId}`
    }, { quoted: m });
    
  } catch (error) {
    console.error("Error dalam leavegc:", error);
    fuzzy.sendMessage(m.chat, {
      text: `❌ Gagal keluar dari grup: ${error.message}`
    }, { quoted: m });
  }
}
break
case "listpc": {
  try {
    const chats = Object.values(fuzzy.chatCache || {});
    
    if (chats.length === 0) {
      return fuzzy.sendMessage(m.chat, {
        text: "Tidak ada chat pribadi yang tersimpan dalam cache."
      }, { quoted: m });
    }
    
    let listpc = '📋 *DAFTAR CHAT PRIBADI*\n\n';
    chats.forEach((chat, i) => {
      listpc += `*${i+1}.* ${chat.name}\n`;
      listpc += `• *ID :* ${chat.id}\n`;
      listpc += `• *Last Seen :* ${new Date(chat.timestamp).toLocaleString()}\n\n`;
    });
    
    fuzzy.sendMessage(m.chat, {
      text: listpc
    }, { quoted: m });
    
  } catch (error) {
    fuzzy.sendMessage(m.chat, {
      text: `❌ Error: ${error.message}`
    }, { quoted: m });
  }
}
break
case 'spam-ngl':
case 'nglspam': {
if (!isCreator) return reply(mess.owner)
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam username|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return reply("Fitur error, coba lagi nanti.");
    }
}
break
      case 'apakah': {
        if (!m.isGroup) return m.reply('Kusus group')
        const apakah = body.slice(0)
        const apa = ['iya dong jelas itu', 'Tidak lah', 'Oh tentu saja tidak', 'Yo ndak tau kok tanya saya', 'Rahasia dong', 'Au ah mending mandi', 'Bentar aku lagi berak', 'Haha mna mungkin 👻']
        const kah = apa[Math.floor(Math.random() * apa.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `wa.me/6281316643491`,
            }
          },
          text: '*Pertanyaan : ' + apakah + '*\n\n*Jawaban :* ' + kah
        }, {
          quoted: m
        })
      }
      break
      case 'kapankah': {
        if (!m.isGroup) return m.reply('Kusus group')
        const kapankah = body.slice(0)
        const kapan = ['Besok', 'Lusa', '1 Hari Lagi', '2 Hari Lagi', '3 Hari Lagi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '7 Bulan Lagi', '8 Bulan Lagi', '9 Bulan Lagi', '10 Bulan Lagi', '11 Bulan Lagi', '1 Tahun lagi', '2 Tahun lagi', '3 Tahun lag0i', '4 Tahun lagi', '5 Tahun lagi', '6 Tahun lagi', '7 Tahun lagi', '8 Tahun lagi', '9 Tahun lagi', '10 Tahun lagi']
        const koh = kapan[Math.floor(Math.random() * kapan.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + kapankah + '*\n\n*Jawaban :* ' + koh
        }, {
          quoted: m
        })
      }
      break
      case 'watakcek':
        const watak = body.slice(0)
        const wa = ['Penyayang', 'Pemurah', 'Pemarah', 'Pemaaf', 'Penurut', 'Baik', 'Baperan', 'Baik Hati', 'penyabar', 'UwU', 'top deh, pokoknya', 'Suka Membantu']
        const tak = wa[Math.floor(Math.random() * wa.length)]
        fuzzy.sendMessage(from, {
          text: 'Pertanyaan : *' + watak + '*\n\nJawaban : ' + tak
        }, {
          quoted: m
        })
        break
      case 'hobycek':
        const hobby = body.slice(0)
        const hob = ['Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
        const by = hob[Math.floor(Math.random() * hob.length)]
        fuzzy.sendMessage(from, {
          text: 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by
        }, {
          quoted: m
        })
        break
      case 'cebelapaimutci': {
        if (!m.isGroup) return m.reply('Kusus group')
        const edgar = body.slice(0)
        const nanya = ['*79%*\n\nImut Banget Loh Kawai><', '*15%*\n\nKamu imut kata mamakmu:v🗿', '*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿', '*28%*\n\nIya deh Cipaling Imut;)', '*100%*\n\nPap imutnya dulu dong:v😘']
        const pret = nanya[Math.floor(Math.random() * nanya.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + edgar + '*\n\n*Jawaban :* ' + pret
        }, {
          quoted: m
        })
      }
      break
case 'ttc':
case 'ttt':
case 'tictactoe': {
    if (!m.isGroup) return reply('Perintah hanya untuk grup');

    let TicTacToe = require("../library/tictactoe");
    this.game = this.game || {}; // Inisialisasi game global
    this.game[m.chat] = this.game[m.chat] || {}; // Inisialisasi game untuk grup ini

    // Cek jika sudah ada sesi permainan di grup ini
    if (Object.values(this.game[m.chat]).some(room => room.id.startsWith('tictactoe') && room.state === 'PLAYING')) {
        return reply('Saat ini sudah ada sesi permainan yang berlangsung di grup ini. Tunggu sampai sesi selesai.');
    }

    // Cek apakah pemain sudah terdaftar dalam sesi di grup ini
    if (Object.values(this.game[m.chat]).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(sender))) {
        return reply('Masih ada sesi permainan yang sedang berlangsung di grup ini.');
    }

    let room = Object.values(this.game[m.chat]).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
    if (room) {
        m.reply('Partner ditemukan!');
        room.o = from;
        room.game.playerO = m.sender;
        room.state = 'PLAYING';
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v];
        });
        let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
        if (room.x !== room.o) await fuzzy.sendText(room.x, str, m, { mentions: parseMention(str) });
        await fuzzy.sendText(room.o, str, m, { mentions: parseMention(str) });
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: from,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING',
        };
        if (text) room.name = text;
        m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''));
        this.game[m.chat][room.id] = room; // Simpan room di grup ini
    }
}
break;

case 'delsesittc': {
    if (!this.game[m.chat]) return reply('Tidak ada sesi permainan yang sedang berlangsung di grup ini.');

    let sessionToDelete = Object.values(this.game[m.chat]).find(room => room.id.startsWith('tictactoe'));
    if (sessionToDelete) {
        delete this.game[m.chat][sessionToDelete.id];
        return reply('Sesi permainan berhasil dihapus.');
    } else {
        return reply('Tidak ada sesi permainan yang sedang berlangsung di grup ini.');
    }
}
break;
      case 'tebak': {
        if (!m.isGroup) return reply('cmd only group')

        function isGameActive() {
          return tebakgambar[from] || tebakkata[from] || tebakkalimat[from] || tebaklirik[from] ||
            tebaktebakan[from] || tebakbendera[from] || tebakbendera2[from] || tebakkabupaten[from] ||
            tebakkimia[from] || tebakasahotak[from] || tebaksiapakahaku[from] || tebaksusunkata[from] ||
            tebaktekateki[from] || tebakjkt48[from] || tebakff[from] || tebakml[from];
        }
        if (isGameActive()) {
          return reply("Masih Ada Sesi Permainan Yang Belum Diselesaikan!");
        }

        if (args[0] === 'gambar') {

          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakgambar[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakgambar.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[from]}`, m)
            delete tebakgambar[from]
          }
        }
        else if (args[0] === 'kata') {

          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkata[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakkata.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[from]}`, m)
            delete tebakkata[from]
          }
        }
        else if (args[0] === 'kalimat') {
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkalimat[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakkalimat.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[from]}`, m)
            delete tebakkalimat[from]
          }
        }
        else if (args[0] === 'lirik') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaklirik[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaklirik.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[from]}`, m)
            delete tebaklirik[from]
          }
        }
        else if (args[0] === 'tebakan') {
         let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaktebakan[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaktebakan.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[from]}`, m)
            delete tebaktebakan[from]
          }
        }
        else if (args[0] === 'bendera') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.name)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakbendera[from] = result.name.toLowerCase()
          })
          await sleep(60000)
          if (tebakbendera.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[from]}`, m)
            delete tebakbendera[from]
          }
        }
        else if (args[0] === 'bendera2') {
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.name)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakbendera2[from] = result.name.toLowerCase()
          })
          await sleep(60000)
          if (tebakbendera2.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[from]}`, m)
            delete tebakbendera2[from]
          }
        }
        else if (args[0] === 'kabupaten') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.title)
          fuzzy.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkabupaten[from] = result.title.toLowerCase()
          })
          await sleep(60000)
          if (tebakkabupaten.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[from]}`, m)
            delete tebakkabupaten[from]
          }
        }
        else if (args[0] === 'kimia') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.lambang)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkimia[from] = result.lambang.toLowerCase()
          })
          await sleep(60000)
          if (tebakkimia.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[from]}`, m)
            delete tebakkimia[from]
          }
        }
        else if (args[0] === 'asahotak') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakasahotak[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakasahotak.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[from]}`, m)
            delete tebakasahotak[from]
          }
        }
        else if (args[0] === 'siapakahaku') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaksiapakahaku[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaksiapakahaku.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[from]}`, m)
            delete tebaksiapakahaku[from]
          }
        }
        else if (args[0] === 'susunkata') {

          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaksusunkata[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaksusunkata.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[from]}`, m)
            delete tebaksusunkata[from]
          }
        }
        else if (args[0] === 'tekateki') {
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaktekateki[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaktekateki.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[from]}`, m)
            delete tebaktekateki[from]
          }
        }
        else if (args[0] === 'jkt48') {
          
          let response = await fetchJson('https://api.siputzx.my.id/api/games/tebakjkt');
          if (response.status) {
            let result = response.data;
            console.log("Jawaban: " + result.jawaban);

            fuzzy.sendImage(from, result.gambar, `siapakah ini? sebutkan beserta nama panjang dia\nWaktu : 70s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
              tebakjkt48[from] = result.jawaban.toLowerCase();
            });

            await sleep(70000); // 70 detik
            if (tebakjkt48.hasOwnProperty(from)) {
              fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${result.jawaban}`, m);
              delete tebakjkt48[from];
            }
          }
          else {
            reply("Gagal mengambil data dari API.");
          }
        } else if (args[0] === 'ff') {
          
          let response = await fetchJson('https://api.siputzx.my.id/api/games/karakter-freefire');
          if (response.status) {
            let result = response.data;
            console.log("Jawaban: " + result.name);

            fuzzy.sendImage(from, result.gambar, `siapakah ini?\nWaktu : 70s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
              tebakff[from] = result.name.toLowerCase();
            });

            await sleep(70000); // 70 detik
            if (tebakff.hasOwnProperty(from)) {
              fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${result.name}`, m);
              delete tebakff[from];
            }
          }
          } else if (args[0] === 'ml') {


  try {
    let response = await fetchJson('https://api.siputzx.my.id/api/games/tebakheroml');
    if (response.status) {
      let result = response.data;
      console.log("Jawaban: " + result.name);

const res = await fetch(result.audio);
const buffer = await res.buffer();

// Konversi buffer ke WhatsApp-compatible PTT (Opus)
const pttAudio = await toPTT(buffer, 'ogg');

// Kirim ke WhatsApp
fuzzy.sendMessage(from, {
  audio: pttAudio,
  mimetype: 'audio/ogg; codecs=opus',
  ptt: true
}, { quoted: m }).then(() => {
  // Lakukan aksi setelah audio berhasil terkirim
  console.log('Audio berhasil dikirim');
  tebakml[from] = result.name.toLowerCase();
});

      await sleep(70000);
      if (tebakml.hasOwnProperty(from)) {
        fuzzy.sendText(m.chat, `Waktu habis!\nJawaban yang benar: *${result.name}*`, m);
        delete tebakml[from];
      }
    }
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
} else reply(`- GAME TEBAK -\n\n.tebak kata\n.tebak tebakan\n.tebak bendera\n.tebak kalimat\n.tebak lirik\n.tebak tekateki\n.tebak siapakahaku\n.tebak asahotak\n.tebak susunkata\n.tebak kimia\n.tebak gambar\n.tebak bendera2\n.tebak jkt48\n.tebak ff\n.tebak ml`)
      }
      
      break
case 'savekontak': case 'svkontak':{
if (!isCreator) return reply(`Khusus Owner Ajah`)
if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
let cmiggc = await fuzzy.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
fuzzy.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
}
break
case 'pushkontak': {
    if (!isCreator && !isAdmin) return reply("owner dan admin bot doang")
    if (!m.isGroup) return reply(`The feature works only in grup`)
    if (!text) return reply(`text?`)

    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    reply(`Success in pushing the message to contacts`)

    for (let pler of mem) {
        await sleep(60000) // Delay 1 menit
        await fuzzy.sendMessage(pler, { text: text })
    }

    reply(`sukses pushkontak delay 1 menit`)
}
break

default:
  function resetSession(user) {
    if (global.db.data.users[user]?.aiSession) {
      delete global.db.data.users[user].aiSession;
      return true;
    }
    return false;
  }

if (body.startsWith(prefix + "resetsesi")) {
  const success = resetSession(m.sender);
  if (success) {
    return m.reply("Sesi AI berhasil direset!");
  } else {
    return m.reply("Tidak ada sesi AI yang ditemukan.");
  }
}

if (!m.isBaileys && !isBot && !isCmd && body != "") {

  const chatData = global.db.data.chats[m?.chat];
  if (!chatData || !chatData.autoai) return; // AI hanya aktif jika autoai = true

  const isMentioned = m.isGroup ? body.includes(`@${pureNumber}`) : true;
  const isRepliedToBot = m.isGroup ? m.quoted && m.quoted.sender === `${pureNumber}@s.whatsapp.net` : false;
  if (m.isGroup && !isMentioned && !isRepliedToBot) return; // Untuk grup, hanya merespon mention/reply

  function readSession(user) {
    try {
      return global.db.data.users[user]?.aiSession || "";
    } catch (error) {
      return "";
    }
  }

  function writeSession(user, session) {
    if (!global.db.data.users[user]) global.db.data.users[user] = {};
    global.db.data.users[user].aiSession = session;
  }
  
  
  if (body.startsWith(prefix)) return;

  let userSession = readSession(m.chat);

  try {
    const prompt = `
${global.prompt}

## anggap kamu sedang di sesi percakapan dan kamu memiliki sesi percakapan
## Berikut adalah sesi percakapan sebelumnya (jika ada):
${userSession || "(Tidak ada sesi sebelumnya)"}

`;

    // Gunakan axios.get dengan query langsung di URL
    let { data } = await axios.get(
    `https://api.siputzx.my.id/api/ai/deepseek-r1?content=${body}`
    );

    if (data.status) {
      // Update session
      writeSession(m.chat, `${userSession}\nUser: ${body}\nAI: ${data.data}`);
      return m.reply(data.data);
    } else {
      return m.reply("Gagal mendapatkan respons dari API.");
    }
  } catch (e) {
    console.log(e);
    return m.reply("Sesi sudah mencapai batas!\nketik .resetsesi dan coba lagi.");
  }
}



if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}


if ((m?.mtype === 'groupInviteMessage' || text.startsWith('Undangan untuk bergabung') || text.startsWith('Invitation to join') || text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
await fuzzy.sendMessage(m.chat, {react: {text: `❌`,key: m.key,}})
let teks = 'acces denied harus minta izin dulu ke owner'
m.reply(teks)
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
