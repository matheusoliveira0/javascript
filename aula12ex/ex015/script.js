function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value ==0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente.')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade <=5) {
            //bebe
            img.setAttribute('src','hb.png')
        } else if (idade <10) {
            //criança
            img.setAttribute('src', 'hc.png')
        } else if (idade <21) {
             //jovem
             img.setAttribute('src','h20.png')
        } else if (idade <50) {
            //adulto
            img.setAttribute('src','h40.png')
        } else {
            //idoso
            img.setAttribute('src','h60.png')
        }
           
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <=5) {
            //bebe
            img.setAttribute('src','mb.png')
        } else if (idade <10) {
            //criança
            img.setAttribute('src', 'mc.png')
        } else if (idade <21) {
             //jovem
             img.setAttribute('src','m20.png')
        } else if (idade <50) {
            //adulto
            img.setAttribute('src','m40.png')
        } else {
            //idoso
            img.setAttribute('src','m60.png')
        }
    }    
    



    res.innerHTML = `Detectamos ${genero} com idade calculada: ${idade}`
    res.appendChild(img)
}
}