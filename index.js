const itensPerguntasRespostas = document.querySelectorAll ('.itens')

itensPerguntasRespostas.forEach(function(itens) {
    itens.addEventListener('click', function() {

      const estaAtiva = itens.classList.contains('ativos')

        itensPerguntasRespostas.forEach(function(itens) {
          itens.classList.remove('ativos')
        })
        if(!estaAtiva) {

          itens.classList.add('ativos')

        } else {
          itens.classList.remove('ativos')
        }
      })      
})
