const humbergerToggle=document.querySelector(".hamburger");

const navToggle=document.querySelector(".navLinks-container");
console.log(humbergerToggle);
console.log(navToggle);


const togglenav=e=>{
    humbergerToggle.classList.toggle("open");
    navToggle.classList.toggle("open");

}
new ResizeObserver(entries=>{
    if(entries[0].contentRect.width<=900){
        navToggle.style.transition='transform 0.3s ease-out';  
    }else{
        navToggle.style.transition='none';  

    }
}).observe(document.body);
humbergerToggle.addEventListener("click",togglenav)

