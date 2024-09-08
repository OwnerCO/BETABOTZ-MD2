global.owner = ['51978194933']  
global.mods = ['51978194933'] 
global.prems = ['51978194933']
global.nameowner = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.numberowner = '51978194933'
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://chat.whatsapp.com/G4f1fTpz9zL4EH3FyIcaPR'
global.instagram = 'https://instagram.com/erlanrahmat_14'
global.wm = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ 🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢*'
global.packname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.author = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = '2xsK3EEi' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'kpfMWLJq'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': '2xsK3EEi', 
  'https://api.botcahx.eu.org': 'kpfMWLJq'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
