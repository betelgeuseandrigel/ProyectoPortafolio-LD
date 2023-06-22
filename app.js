const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");



function pageTransitions() {
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn"; 
        })
    }

    //Sections active
    allSections.addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btn
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //toggle them
    const btnTexto1 = document.querySelector(".btn-text1");
    const bigText = document.querySelector(".bg-text");
    const bigTextDos = document.querySelector(".textDos")

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
        bigText.remove();
        bigTextDos.remove();
    })
}

pageTransitions();


const fecha = document.querySelector(".fecha");
function tiempoActual() {
    const actual = new Date();
    let actualDia = actual.toLocaleDateString();
    fecha.textContent = actualDia;
};

tiempoActual();

