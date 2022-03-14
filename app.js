let buttons = document.querySelectorAll('button')

let modal = document.querySelector('#modalForm')

buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        modal.classList.add('active')
    })
})


window.addEventListener('keydown', ()=>{
    if(event.key === "Escape"){
        modal.classList.remove('active')
    }
})