const timeout = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

timeout(3000)
  .then(function() { // executa o bloco após 3 segundos
    console.log('passou 3 segundos')
  })