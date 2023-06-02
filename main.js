const text = document.querySelector(".second-txt");
 

const textLoad = () =>{
    setTimeout (() =>{
       text.textContent="Computer Science Student";
    },0);
    setTimeout (() =>{
        text.textContent="Software Engineer";
     },4000);
     setTimeout (() =>{
        text.textContent="Full-Stack Developer Intern";
     },8000);
     
}
textLoad();
setInterval(textLoad, 12000);
