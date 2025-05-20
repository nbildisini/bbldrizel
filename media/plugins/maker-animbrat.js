require('../../media/settings/config');
const axios = require('axios');
const fs = require('fs');

module.exports = {
    command: ['animbrat'],
    exec: async (m, from, { q, fuzzy, args, command, prefix, reply }) => { // START
        if (!q) return reply(`Masukan Teks\n\nContoh: ${prefix + m.command} hallo`);
        const commandText = m?.text?.trim();
        if (commandText.startsWith('. animbrat') || commandText.startsWith('. Animbrat')) {
            return reply('Jangan ada spasi antara titik dan brat!!');
        }

        const fngsi = `https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(q.trim())}&position=center&mode=image`;

       reply('_Tunggu sebentar, sedang memproses..._')
        
        try {
            // Coba akses API Clairity
            const response = await axios.get(fngsi, { responseType: 'arraybuffer' });
            await fuzzy.sendImageAsSticker(m.chat, response.data, m, {
                packname: global.packname,
                author: global.author
            });
        } catch (error) {
            console.error('API error:', error.message);
        reply('yahh coba lagi lain waktu')
        }

    }, // END
};

const file = __filename;
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`[  UPDATE ] ${file}`);
  delete require.cache[require.resolve(file)];
  require(file);
});