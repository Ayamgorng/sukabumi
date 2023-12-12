// Buat Lu Yang Jual Sc Ini Gw Tonjok 



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6285280331008?text=bang+aku+mau+donasi+i+love+yuuu'
global.ig = 'https://instagram/@joshuaaam12' // ubah aja
global.ofc = 'https://chat.whatsapp.com/LPw4dbaARqqD7ap4u4g534'
global.okta = '-'
global.gh = 'https://github.com/Joshua-str'
global.saluran = 'https://chat.whatsapp.com/LPw4dbaARqqD7ap4u4g534'
global.email = 'joshuadtr007@gmail.com' //serah
global.region = 'indonesia' // serah
global.dana = '085280331008'
global.gopay = '085280331008'
global.pulsa = '085280331008'
global.domain = 'https://valzhost.jaspanelku.xyz' // Isi Domain Lu
global.apikey = 'ptla_1bbrbtFk9B0XeRtsDmiLMHvkJhxwcabcS0zd6W2U8R8' // Isi Apikey Plta Lu
global.capikey = 'ptlc_ZQ46v3soPDsYt80BVQbufVygjTuHakOVXsgBUGOyzf7' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ᴊᴏsʜᴜᴀ⌫' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6285280331008'] // ubah aja pake nomor lu
global.premium = ['6285280331008']
//==========================BY Hw Mods=======================//
global.lolkey = 'a8e86232771f9bc1826742c1'
global.zenz = 'zenzkey_41b4fe7a5d' // https://api.zahwazein.xyz
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'ʀᴇᴢᴏʀ-x' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'ʀᴇᴢᴏʀ' // ubah aja ini nama sticker
global.ta = '•' //cuma simbol
global.author = 'ɴᴏᴛʜɪɴɢ ᴀʙᴏᴜᴛ ᴍᴇシ︎' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'oka' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//


//imgnya disini
global.thum = fs.readFileSync("./baseoka/image/thum.jpeg") 
global.good = fs.readFileSync("./baseoka/image/good.jpeg") 
global.vidmenu = fs.readFileSync("./baseoka/video/mainmenu.mp4")

global.mess = {
    done: 'Done Kak 😁',
    admin: 'Fitur ini buat _*Admin Group*_ loo',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Fitur ini buat _*owner*_ loo',
    group: 'Fitur ini buat _*Group Chat*_ loo',
    private: 'Fitur ini buat _*Admin Group*_ loo',
    wait: 'Lu olang tunggu bentar loo',
    endLimit: 'Lu olang punya limit sudah abis, tunggu jam 12 malam untuk reset',
    error: '*Fitur Error!!!*',
    prem : 'Fitur ini buat _*Member Premium*_ loo'
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})