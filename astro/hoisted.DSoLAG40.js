import"./hoisted.CvoThDxY.js";document.addEventListener("DOMContentLoaded",()=>{const c=document.getElementById("all"),l=function(t,o){document.querySelectorAll(".category-filter").forEach(e=>{e.classList.remove("w3-green")}),o.classList.add("w3-green"),t==="All"?(c?.classList.remove("w3-hide"),document.querySelectorAll(".categories").forEach(e=>{e.classList.add("w3-hide")})):(c?.classList.add("w3-hide"),document.querySelectorAll(".categories").forEach(e=>{e.classList.add("w3-hide")}),document.querySelectorAll(`.category-${t}`).forEach(e=>{e.classList.remove("w3-hide")}))};document.querySelectorAll(".category-filter").forEach(t=>{t.addEventListener("click",()=>l(t.dataset.category||"",t))})});
