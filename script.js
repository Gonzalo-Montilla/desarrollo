
document.addEventListener("DOMContentLoaded", function (){    
    let nav = document.querySelector("#navegacion")


    // una forma de agregar elementos
    //let link = document.createElement("a") 
    //link.href = "http://google.com"
    //link.innerText = "Google"
    //nav.appendChild(link)
    //link.target = "_blank"
    //console.log(nav)

    nav.innerHTML += <a href= "https://www.google.com"> target"blank"</a>

    let aside = document.querySelector("aside")
    aside.innerHTML += "<button onclick=`alert(\"hola mundo\")`>saludar</button>"



})


function saludar() {
    alert("hola mundo")
}
