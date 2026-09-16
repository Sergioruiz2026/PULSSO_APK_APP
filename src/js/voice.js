// Voz neutral es-CL 0.88
export function hablar(texto, enabled=true){
  if(!enabled) return;
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(texto);
    u.lang='es-CL'; u.rate=0.88; u.pitch=1;
    const vs=speechSynthesis.getVoices();
    const cl=vs.find(v=>v.lang==='es-CL');
    if(cl) u.voice=cl;
    speechSynthesis.speak(u);
  }catch(e){}
}