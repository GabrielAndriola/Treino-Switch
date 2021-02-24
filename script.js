function getNome(){
    var nome = document.querySelector("input#nome")
    nome = nome.value.toUpperCase()
    console.log(nome)

    switch(nome){
        case "GREMIO":{
            document.getElementById("simbolo").innerHTML = `<img src="./assets/gremio.png">`
        } break
        case "GRÊMIO":{
            document.getElementById("simbolo").innerHTML = `<img src="./assets/gremio.png">`
        }break
        case 'FLAMENGO':{
            document.getElementById("simbolo").innerHTML = `<img src="./assets/flamengo.png">`
        } break
        case 'INTERNACIONAL':{
            document.getElementById("simbolo").innerHTML = `<img src="./assets/internacional.png">`
        } break
    }
}