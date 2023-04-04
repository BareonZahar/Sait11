let chislo = document.getElementById('chislo')
let   farn = document.getElementById('farn')
let   furk = document.getElementById('furk')
let    oke = document.getElementById('oke')


function ret() {
    let min=farn.value
  let max=furk.value
  chislo.innerHTML= Math.floor(Math.random() * (max - min + 1)+ min)
}

oke.onclick=ret
