document.getElementById('convert').addEventListener('submit', function(e){

	e.preventDefault()
	var distance = parseFloat(document.getElementById('distance').value)
	if(distance){
		var kilometers = distance * 1.609344
		var h2 = document.querySelector('h2')
		h2.innerHTML = `${distance} miles equals ${kilometers.toFixed(2)} kilometers`
		h2.className = 'visible'
	} else {
			// Entrada inválida: avisa o usuário e restaura a página ao estado padrão
			alert('Por favor, insira um número válido.')
			var h2 = document.querySelector('h2')
			h2.innerHTML = 'Answer goes here'
			h2.className = 'invisible'
			// limpa o campo de entrada e foca nele (sem pedir input adicional)
			document.getElementById('distance').value = ''
			document.getElementById('distance').focus()
	}			
})
