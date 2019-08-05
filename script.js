let botao1 = document.querySelector("#botao1")
let botao2 = document.querySelector("#botao2")
let caixaDeTexto = document.querySelector("#texto")
let image = document.querySelector("img")
let nome = document.querySelector("h3")
let contador = document.querySelector("#contador")
let cont = 0;

pesquisarPersonagem = () =>{
    let random = Math.ceil(Math.random () *493)
    fetch(`https://rickandmortyapi.com/api/character/${random}`)
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        image.src = data.image;
        console.log(data.name);

        let personagem = data.name.toUpperCase().toString();
        console.log(personagem)
        
        botao1.onclick = () =>{
            let input = caixaDeTexto.value.toUpperCase().toString();
            if(input == personagem){
                acertou();
            } else{
                errou();
            }
        }
    })
}


acertou = () => {
    cont++;
    contador.innerHTML = cont;
    setTimeout(pesquisarPersonagem, 1000);
    
}

errou = () => {
    cont--;
    contador.innerHTML = cont;
    setTimeout(pesquisarPersonagem, 1000);
}


botao2.onclick = pesquisarPersonagem

