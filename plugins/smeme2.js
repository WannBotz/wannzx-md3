const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, usedPrefix }) => {
 try {
  let [teks] = text.split(' ')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://api.memegen.link/images/custom/${teks}/${teks2}.png?background=${url}`
//  let wasted = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${teks}&bottom=${teks2}&img=${url}`
  let stiker = await sticker(null, wasted, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
 } catch (e) {
   m.reply(`Masukan format!!\nReply image dengan caption ${usedPrefix}smeme *teks*\n*Jangan reply sticker*`)
  }
}
handler.help = ['smeme2']
handler.tags = ['sticker', 'limitmenu']
handler.command = /^smeme2$/i

handler.limit = true

handler.fail = null

export default handler
