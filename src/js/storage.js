// PULSSO Storage v2.3 - Nube simulada + Firebase listo
export const storage = {
  getContactos(){ return JSON.parse(localStorage.getItem('pulsso_contactos')||'[]') },
  saveContactos(c){ localStorage.setItem('pulsso_contactos', JSON.stringify(c)); /* TODO Firebase: db.collection('contactos').doc(uid).set({c}) */ },
  getPref(){ return { tono: localStorage.getItem('pulsso_tono')||'suave', voz: (localStorage.getItem('pulsso_voz')||'1')==='1' } },
  savePref(t, v){ localStorage.setItem('pulsso_tono', t); localStorage.setItem('pulsso_voz', v?'1':'0') }
};