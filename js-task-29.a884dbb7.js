let e=0;const t=setInterval(()=>{(e+=1)>5?clearInterval(t):console.log(`${e} second have gone`)},1e3),l=document.querySelector("#box1"),o=document.querySelector("#box2");setInterval(()=>{l.classList.toggle("active"),o.classList.toggle("active")},500);const r=document.querySelector("#board"),c=document.querySelector("#score-output"),s=document.querySelector("#clicks-output"),n=document.querySelector("#target-box");let a=0,i=0;c.textContent=0,s.textContent=i,n.style.left=`${Math.random()*(r.scrollWidth-n.scrollWidth/2-n.scrollWidth/2)+n.scrollWidth/2}px`,n.style.top=`${Math.random()*(r.scrollHeight-n.scrollHeight/2-n.scrollHeight/2)+n.scrollHeight/2}px`,r.addEventListener("click",e=>{s.textContent=i+=1,e.target===n&&(c.textContent=a+=1)}),setInterval(()=>{n.style.left=`${Math.random()*(r.scrollWidth-n.scrollWidth/2-n.scrollWidth/2)+n.scrollWidth/2}px`,n.style.top=`${Math.random()*(r.scrollHeight-n.scrollHeight/2-n.scrollHeight/2)+n.scrollHeight/2}px`},3e3);const u=document.querySelector("#time-input");document.querySelector("#form").addEventListener("submit",e=>{e.preventDefault();let t=1e3*Number.parseInt(u.value);u.value="",setTimeout(()=>{console.log(`It have gone ${t/1e3}s`)},Number.parseInt(t))});
//# sourceMappingURL=js-task-29.a884dbb7.js.map
