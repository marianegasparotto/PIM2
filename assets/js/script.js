var cod = document.getElementById ('cod')
var decod = document.getElementById ('decod')
// var increm = document.getElementById('increm')
var base = document.getElementById ('b64')
var cifra = document.getElementById('cdc')
var codec = document.getElementById('codec')



// ====================Botão radio Cod/Descod 

cod.addEventListener("click", function () {
    alert('codificar')
    // botao.innerText = "Codificar"; 
    codec.innerText = 'Codificar'              
    // btns2 = $('#codec').detach()
                      
  });

  

decod.addEventListener("click", function () {
    alert('decodificar')
    // botao.innerText = "Codificar"; 
    codec.innerText = 'Decodificar'              

    // $('#codec' ,textContent).replaceWith ('<p>Descodificar</p>')
    // show.$('#codec')
  });


// ================ Botão de incremento 
var increm;
    function button64() {
    increm = $('.increm').detach()
    }

    function buttoncifra() {
    $('.btns1').append(increm)
    }

// var buttonFooter;
//     function codeco() {
//     buttonFooter = $('#codec').remove(text)
//     }

    // function buttoncifra() {
    // $('.btns1').append(increm)
    // }





// $('#b64').on ('click', button64)
// $('#cdc').on ('click', buttoncifra)

//   function increm(){
//     if(base64().value == 1){
//         increm = document.querySelector(".increm")
//         increm.style.display = "block"
//     }
//     else{
//         increm = document.querySelector(".increm")
//         increm.style.display = "none"
//     }
//   }


// function radioArea(valor){

//     if(valor === '1'){
//         alert('codificar')
//     }

//     else(valor === '2'){
//         alert('descodificar')
//     }
        
    
// }





9







// const cifra = document.getElementById('cdc')
// const base = document.getElementById('b64')
// const respost = document.getElementById ('text2')

// function base64() {
//     const msg = document.getElementById ('text1')
//     const respost = document.getElementById ('text2')
//     const texto = Text(msg.value)
//     respost.innerHTML='Sua resposta é ${texto}'


// }


// function base64 () {
//     if (true){
//         document.innerHTML = 'Sua resposta'
//     }


    
// }

//     text2.innerHTML = createElement ('p')
//     var mensagem = document.createTextNode('Sua resposta')
//     p.appendChild(mensagem)
// }
// console.log(mensagem);


// base.addEventListener ('click', baseOn)

// function base64 (){
//     document.getElementById('text2').innerHTML = createElemente('p')
//     var mensagem = document.createTextNode('Sua resposta')

//     resposta.appendChild(mensagem)
// }

// var resposta = document.createElement ('p')
//     v



// =========Codifica em Base64 
// var decodedStringBtoA = 'Hello World!'
// var encodedStringBtoA = btoa(decodedStringBtoA);

// console.log(encodedStringBtoA);

// =============Decodifica em Base64
// var encodedStringAtoB = 'SGVsbG8gV29ybGQh';
// var decodedStringAtoB = atob(encodedStringAtoB);

// console.log(decodedStringAtoB);


// =============================Cifra de Cesar 
// "A" .charCodeAt(0)

// (codigoDaLetra + desloc) % tamDoAlfabeto + 65
//                      65                       26             65
// ((códigoDaLetra - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra