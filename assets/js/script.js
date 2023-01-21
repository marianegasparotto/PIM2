const cod = document.getElementById ('cod')
const decod = document.getElementById ('decod')
const base = document.getElementById ('b64')
const cifra = document.getElementById('cdc')
const codec = document.getElementById('codec')
const msgUsuario = document.getElementById('text1')
const respUsuario = document.getElementById('text2')
const inputinc = document.getElementById ('inputinc')
const inc = document.getElementsByClassName('inc')
const tipo = document.getElementById('tipo')
const resultado = ''
// ====================Botão radio Cod/Descod 

cod.addEventListener("click", function () {
    alert('codificar')
    codec.innerText = 'Codificar mensagem'              
    // btns2 = $('#codec').detach()
                      
  });

  

decod.addEventListener("click", function () {
    alert('decodificar')
    codec.innerText = 'Decodificar mensagem'              
  });


// Precisa atrelar as funções! 


// ================ Botão de incremento 

tipo.addEventListener ('change', function(){

    if(tipo.value === "base64"){
    $(inc).css({
        'display':'none'
    })
}
    else{
            $(inc).css({
                'display':'block'
            })
        }
    })


// =============================== informativo 

function inserirImagem(){  
    let img = document.createElement('img')
    img.src = './assets/img/img4.png'
    document.body.appendChild(img);
    img.setAttribute('id','info')
    }

    // const body = document.getElementsByTagName('body')
    // body.setAttribute('id','body')
    // $(html).css{
    //     'display'= 'none'
    // }


// ---------------Codifica em Base64 =========================


// function base64(){
//     let mensagem = msgUsuario.value
//     if(cod.checked){
//         let resultCod = msgUsuario.value = BtoA(msgUsuario)
//         return resultCod 
//     }
//     else(decod.checked)
//     {
//         let resultDecod = msgUsuario.value = AtoB(msgUsuario)
//         return resultDecod 
//     }
//     respUsuario.innerHTML = resultado
// }

//     console.log(base64());
  


// =============Decodifica em Base64
// var encodedStringAtoB = 'SGVsbG8gV29ybGQh';
// var decodedStringAtoB = atob(encodedStringAtoB);

// console.log(decodedStringAtoB);






// ======================= Form 


    // function codifica(){
    //     respUsuario.value = msgUsuario
    // }
    
    // codec.addEventListener('click',codifica)
    // $('msgUsuario').on('click', codifica)
    
    
   
    
    // codec.addEventListener('click', (e) => {
    //     var seleciona = e.target.value
    //     if(seleciona === 'base64'){
    //         codec.setAttribute('onclick','button64()')
    //     }
    //     else{
    //         // codec.setAttribute('onclick','buttoncifra()')
    //     }
    // })


//==Cifra de Cesar====================================================
// const decodeCC = (phrase, key) => {
// 	let decodedPhrase = '';
// 	for (let i = 0; i < phrase.length; i++) {
// 		let charAscii = phrase.charCodeAt(i);

// 		// Se for letra minúscula (Character 97-122)
// 		if (charAscii >= 65 && charAscii <= 90) {
// 			// Aplica a cifra de cesar
// 			charAscii -= key;
// 			if (charAscii < 65) {
// 				charAscii = 91 - (65 - charAscii);
// 			}
// 		}

// 		// Se for letra minúscula (Character 97-122)
// 		if (charAscii >= 97 && charAscii <= 122) {
// 			// Aplica a cifra de cesar
// 			charAscii -= key;
// 			if (charAscii < 97) {
// 				charAscii = 123 - (97 - charAscii);
// 			}
// 		}
// 		// Adiciona a letra decifrada à frase
// 		decodedPhrase += String.fromCharCode(charAscii);
// 	}
// 	return decodedPhrase;
// };


// =============================Cifra de Cesar 
// "A" .charCodeAt(0)

// (codigoDaLetra + desloc) % tamDoAlfabeto + 65
//                      65                       26             65
// ((códigoDaLetra - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra

// A - Z = 65 á 90
// a - z = 97 á 122
// function cdcesar(){

// }

// ==================================================================

// var input = msgUsuario.value
// formEntrada.addEventListener('submit', codeco(),{
// msgUsuario : window.btoa(entrada.value)


// })

// console.log(msgUsuario);


// var decodedStringBtoA = 'Hello World!'
// var encodedStringBtoA = btoa(decodedStringBtoA);




