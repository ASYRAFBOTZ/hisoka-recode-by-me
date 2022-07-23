/**
   * Create By Dika Ardnt.
   * Recode By Asyraf
   * Contact Dika wa.me/6288292024190
   * Contact Asyraf wa.me/6281946945315
   * Subscribe YT : MikAzu 929
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	lolhuman: 'https://lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://lolhuman.xyz': 'Lucky44',
}

// Other
global.owner = ['6281946945315','6281946945315','6281946945315','6281946945315','6281946945315','6281946945315','6281946945315','6281946945315','6281946945315','6281946945315','6281946945315','6281946945315']
global.premium = ['6281946945315']
global.packname = 'Mark Botz'
global.author = 'By Asyraf'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Succes Menghack Kontol Bapak Mu Pakai Terus😊',
    admin: 'Lu Cuman Member Ya Kntl😌',
    botAdmin: 'Bot Bukan Admin Ya Tolol😊',
    owner: '──Akses Ditolak──\n│Fitur Khusus Owner Ayank Asyraf😘',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Khusus Di PC Ya Tolol😊',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Menghack Langit..',
    endLimit: 'Limit Lu Udh Habis Tolol😊, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
