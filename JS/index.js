var text1 = document.getElementById('sbr')
var text2 = document.getElementById('cnh')
var text3 = document.getElementById('obj')

function clickNoSobre() {
  console.log('clicou no botão sobre')
  text1.style.display = 'block'
  text2.style.display = 'none'
  text3.style.display = 'none'
}

function clickNoObjetivos() {
  console.log('clicou no botão objetivos')
  text1.style.display = 'none'
  text2.style.display = 'none'
  text3.style.display = 'block'
}

function clickNoConhecimentos() {
  console.log('clicou no botão conhecimentos')
  text1.style.display = 'none'
  text2.style.display = 'block'
  text3.style.display = 'none'
}
