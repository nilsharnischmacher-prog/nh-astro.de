
const h=document.querySelector('header.top');const f=()=>h.classList.toggle('solid',scrollY>40||!document.querySelector('.held'));f();addEventListener('scroll',f);
const m=document.querySelector('.menu');if(m)m.onclick=()=>document.querySelector('nav.haupt').classList.toggle('offen');
document.querySelectorAll('[data-gross]').forEach(el=>el.onclick=()=>{const l=document.querySelector('.leuchte');l.querySelector('img').src=el.dataset.gross;l.classList.add('an')});
const l=document.querySelector('.leuchte');if(l)l.onclick=()=>l.classList.remove('an');
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('an'));c.classList.add('an');
 const w=c.dataset.f;document.querySelectorAll('.kachel').forEach(k=>k.style.display=(w==='alle'||k.dataset.f.includes(w))?'':'none')});
