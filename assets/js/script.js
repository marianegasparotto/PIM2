const cod = document.getElementById ('cod')
const decod = document.getElementById ('decod')
const base = document.getElementById ('b64')
const cifra = document.getElementById('cdc')
const codec = document.getElementById('codec')
const msgUsuario = document.getElementById('caixamsg')
const respUsuario = document.getElementById('caixaresposta')
const inputinc = document.getElementById ('inputinc')
const inc = document.getElementsByClassName('inc')
const tipo = document.getElementById('tipo')
const usuario = ''
// ====================Botão radio Cod/Descod 

cod.addEventListener("click", function () {
    alert('codificar')
    codec.innerText = 'Codificar mensagem'                                    
  });


decod.addEventListener("click", function () {
    alert('decodificar')
    codec.innerText = 'Decodificar mensagem'              
  });


// =============================== Executa as funções 
// codec.addEventListener('click', function(){
//     if(tipo.value === 'Cifra de César'){
//         resultado.innerText = cifraDeCesar();
//     }
// })


// ================ Botão de incremento 

tipo.addEventListener ('change', function(){

    if(tipo.value === "base64"){
    $(inc).css({
        'display':'none'
    })
    // codec.setAttribute('click',base64)
}
    else{
            $(inc).css({
                'display':'block'
            })
            // codec.setAttribute('click',coCifraDeCesar)

        }
    })
// ============================= Botao codec 
codec.addEventListener("click", function(e){
    e.preventDefault()
    if(inputinc.value === 'Cifra de César' && cod)
    {
        respUsuario.innerText = coCifraDeCesar()
    }
})

// =============================== informativo 
// ------- Abrir imagem ---------
function inserirImagem(){ 
    $('.container').css ({
        'display':'none'    
    })
    $('#close').css ({
        'visibility' : 'visible' 
    })
    let img = document.createElement('img')
    img.src = './assets/img/img4.png'
    document.body.appendChild(img);
    img.setAttribute('id','info')

    }
// ----------------- Fechar imagem -------------- 
function fecharImagem(){
        $('.container').css ({
            'display':'flex'
        })
        $('#close').css ({
            'visibility' : 'hidden',
            'display':'block'
        })
        $('#info').remove()
    }

// ---------------Codifica em Base64 =========================


function base64(){
    let mensagem = msgUsuario.value
    if(cod.checked){
        let resultCod = btoa(mensagem)
        return resultCod
    }
    else(decod.checked)
    {
        let resultDecod =  atob(mensagem)
        return resultDecod 
    }
    
}



//==Cifra de Cesar====================================================

function coCifraDeCesar (usuario,key){
    const frase = msgUsuario.value 
    const coCifraDeCesar = (usuario,key)
    
    if(cod.checked){
    for(var i = 0; i < usuario.length; i++){
    const letra = usuario.charCodeAt(i)
    
    if(frase == ' '){
        resultado = resultado + ' '
       
    }
    if (letra >= 65 && letra <= 90)
        {
            letra = 65 + (letra - 65 + key) % 26
        }
    else if(letra >= 97 && letra <= 122)
        {
            letra = 97 + (letra - 97 + key) % 26

        }
        coCifraDeCesar += String.fromCharCode(letra)
    }
    return coCifraDeCesar 
    }
}

function deCifraDeCesar (usuario,key){
    const frase = msgUsuario.value 
    const deCifraDeCesar = (usuario,key)
    
    if(cod.checked){
    for(var i = 0; i < usuario.length; i++){
    const letra = usuario.charCodeAt(i)
        
    if(frase == ' '){
        resultado = resultado + ' '
       
    }
    if (letra >= 65 && letra <= 90)
        {
            letra = 65 + (letra - 65 - key + 26) % 26
        }
    else if(letra >= 97 && letra <= 122)
        {
            letra = 97 + (letra - 97 - key + 26) % 26
    
        }
        deCifraDeCesar += String.fromCharCode(letra)
    }
    return deCifraDeCesar 
    }    
}
































// function cifraDeCesar (usuario,key){
// const usuario = ''
// const frase = msgUsuario.value 
// const valorinc = inputinc.value

// if(cod.checked){
// for(var i = 0; i < usuario.length; i++){
// const letra = usuario.charCodeAt(i)

// if(frase == ' '){
//     resultado = resultado + ' '
   
// }
// if (letra >= 65 && letra <= 90)
//     {
//         letra -= key
//         resultado += String.fromCharCode((letra.charCodeAt(i) + valorinc - 97)% 26 + 65)
//     }
// else if(letra >=97 && letra <= 122)
//     {
//         letra -= key
//         resultado += String.fromCharCode((letra.charCodeAt(i) + valorinc - 97 )% 26 + 97)
//     }
//     resultado += String.fromCharCode(frase)

// }

// }
// return resultado
// // respUsuario.innerHTML = resultado

// =============================Cifra de Cesar 





// $('#codec').on('click',codifica);

// // resultado.val(mensagem)
// // console.log(mensagem)

// function codifica (){
//     // var mensagem = document.querySelector("#caixamsg").value
//     // var resultado = document.querySelector("#caixaresposta")
//     $('#caixamsg').val(
//     $('#caixaresposta')

// )
//     resultado.value = mensagem
// }

// document.getElementById('codec').addEventListener('click',codifica)


// codec.addEventListener("click", function(){
//     msgUsuario.value = respUsuario.value
//     msgUsuario.value = ""
// })




// "A" .charCodeAt(0)

// (codigoDaLetra + desloc) % tamDoAlfabeto + 65
//                      65                       26             65
// ((códigoDaLetra - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra


// }

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


// ==================================================================

// var input = msgUsuario.value
// formEntrada.addEventListener('submit', codeco(),{
// msgUsuario : window.btoa(entrada.value)


// })

// console.log(msgUsuario);


// var decodedStringBtoA = 'Hello World!'
// var encodedStringBtoA = btoa(decodedStringBtoA);