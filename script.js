const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-links"),theme=document.querySelector(".theme-toggle");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
theme?.addEventListener("click",()=>{document.body.classList.toggle("light");theme.textContent=document.body.classList.contains("light")?"☾":"☼"});
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const toast=document.getElementById("toast");
document.querySelectorAll("[data-toast]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();toast.textContent=el.dataset.toast;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2400)}));
