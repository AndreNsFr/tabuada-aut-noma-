
document.getElementById("verificar").addEventListener("click" , calcular)





function calcular(){
    let numero = document.getElementById("numero").value

    if(numero == 0 ){
        alert("por favor, insira um numero")
    }
    
    else{

        
        
        let taboada = document.getElementById("resposta")

        taboada.innerHTML="" // bastava colocar essa linha de codigo para simplismente zerar a taboada de antes

        // com esse innerhtml o valor dentro da div "taboada" é zerado, por consequente, a tabuada de antes some, e a nova é adicionada

        for (let ts = 1; ts <= 10; ts++){

            
            let paragrafo = document.createElement("p")
            taboada.appendChild(paragrafo)
            paragrafo.setAttribute("Name", "respostas")
            paragrafo.setAttribute("class", "respostas")
            

            var resultado = numero * ts
            
            
            paragrafo.innerHTML = `${numero} x ${ts} = ${resultado} <br>`
            
        }
        
        

        
    }

    

}