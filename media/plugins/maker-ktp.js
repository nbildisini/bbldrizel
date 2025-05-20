require('../../media/settings/config');
const axios = require('axios');
const fs = require('fs');

module.exports = {
    command: ['ktpmaker'],
    exec: async (m, from, { fuzzy, q, args, command, prefix, reply }) => { // START
if (!q || q.split('|').length < 18) {
    return reply(`Masukan semua data yang diperlukan.\n\nContoh:\n${prefix + command} JAWA BARAT|BANDUNG|3275024509970001|BUDI SANTOSO|BANDUNG, 25-09-1997|LAKI-LAKI|A|JL. SUDIRMAN NO. 123|05/08|RAWA BOBO|PASAR MINGGU|ISLAM|BELUM MENIKAH|PEGAWAI SWASTA|WNI|SEUMUR HIDUP|25-09-2023|https://example.com/photo.jpg`);
}

        const [
            provinsi, kota, nik, nama, ttl, jenisKelamin, golonganDarah, alamat,
            rtRw, kelDesa, kecamatan, agama, status, pekerjaan, kewarganegaraan, masaBerlaku, tanggalTerbit, pasPhoto
        ] = q.split('|').map(v => v.trim());

       const url = `https://fastrestapis.fasturl.cloud/maker/ktp?provinsi=${encodeURIComponent(provinsi)}&kota=${encodeURIComponent(kota)}&nik=${encodeURIComponent(nik)}&nama=${encodeURIComponent(nama)}&ttl=${encodeURIComponent(ttl)}&jenisKelamin=${encodeURIComponent(jenisKelamin)}&golonganDarah=${encodeURIComponent(golonganDarah)}&alamat=${encodeURIComponent(alamat)}&rtRw=${encodeURIComponent(rtRw)}&kelDesa=${encodeURIComponent(kelDesa)}&kecamatan=${encodeURIComponent(kecamatan)}&agama=${encodeURIComponent(agama)}&status=${encodeURIComponent(status)}&pekerjaan=${encodeURIComponent(pekerjaan)}&kewarganegaraan=${encodeURIComponent(kewarganegaraan)}&masaBerlaku=${encodeURIComponent(masaBerlaku)}&terbuat=${tanggalTerbit}&pasPhoto=${encodeURIComponent(pasPhoto)}`;

        reply('_Tunggu sebentar, sedang membuat KTP..._');

        try {
            const response = await axios.get(url, { responseType: 'arraybuffer' });
await fuzzy.sendMessage(m.chat, {
    image: response.data,
    caption: `Berikut KTP atas nama ${nama}`
}, { quoted: m });  
     } catch (error) {
            console.error('API error:', error.message);
            reply('Gagal membuat KTP, coba lagi nanti.');
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