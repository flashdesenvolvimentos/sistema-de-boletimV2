import enviar from "./codigo.js"


let materia = document.getElementById("materia").value
let datalist_materia = document.getElementById("materia-escolher")

enviar.addEventListener("click", ()=>{
    if(materia in datalist_materia.children.innerHTML){
        alert("Não precisa ser adicionado na base de dados")
    }else{
        datalist_materia.innerHTML = `
        <option value="${materia}">${materia}</option>
        `
    }
})