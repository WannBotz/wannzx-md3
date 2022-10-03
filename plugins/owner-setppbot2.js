case 'setppbot': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var media = await whmods.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await whmods.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await whmods.updateProfilePicture(botNumber, { url: media }) }
anjay(mess.success)
} catch { anjay('Gagal Mengganti Photo Profile') }
}
}
handler.help = ['setppbot2']
handler.tags = ['owner']
handler.command = /^setppbot2$/i
handler.owner = true

export default handler
