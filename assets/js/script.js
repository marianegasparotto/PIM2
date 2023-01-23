const cod = document.getElementById ('cod')
const decod = document.getElementById ('decod')
const codec = document.getElementById('codec')
const msgUsuario = document.getElementById('caixamsg')
const respUsuario = document.getElementById('caixaresposta')
const inputinc = document.getElementById ('inputinc')
const inc = document.getElementsByClassName('inc')
const tipo = document.querySelector('#tipo')

// ====================Botão radio Cod/Descod 

cod.addEventListener("click", function () {
    codec.innerText = 'Codificar mensagem'                                     
  });

decod.addEventListener("click", function () {
    codec.innerText = 'Decodificar mensagem'
  });

// ============================= Botao codec 

codec.addEventListener('click', function(){
    let op = $('#tipo option:selected').val()
    if(cod.checked){
    if(op === 'cifra'){
        respUsuario.innerText = coCifraDeCesar();
    }
    else if(op === 'base64'){
        respUsuario.innerText = base64()
    }
}
else{
    if(op === 'cifra'){
        respUsuario.innerText = deCifraDeCesar();
    }
    else if(op === 'base64'){
        respUsuario.innerText = base64()
    }
}
})

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

// ================Codificar/Decodificar em Base64 =========================

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
//  ----------------------- Codificar -------------------------- 
function coCifraDeCesar (frase,key){
    frase = msgUsuario.value
    key = inputinc.value
    let cotextCDC = ''

    if(cod.checked){
    for(let i = 0; i < frase.length; i++){
    let letra = frase.charCodeAt(i)
    
    if (letra >= 65 && letra <= 90)
        {      
            cotextCDC += String.fromCharCode(((letra - 65 - (-key)) + 26) % 26 + 65)
        }
    else if(letra >= 97 && letra <= 122)
        {
            cotextCDC += String.fromCharCode(((letra - 97 - (-key)) + 26) % 26 + 97)
        }
    else{
            cotextCDC += String.fromCharCode(letra)
        }
    }
    return cotextCDC 
    }
}
//  ----------------------- Decodificar -------------------------- 
function deCifraDeCesar (frase,key){
    frase = msgUsuario.value 
    key = inputinc.value
    let detextCDC = ''
    
    if(decod.checked){
    for(let i = 0; i < frase.length; i++){
    let letra = frase.charCodeAt(i)
        

    if (letra >= 65 && letra <= 90)
        { 
            detextCDC += String.fromCharCode((letra - 65 - key + 26) % 26 + 65) 
        }
    else if(letra >= 97 && letra <= 122)
        {
            detextCDC += String.fromCharCode((letra - 97 - key + 26) % 26 + 97) 
        }
        else{
            detextCDC += String.fromCharCode(letra)
        }
    }
    return detextCDC 
    }    
}

