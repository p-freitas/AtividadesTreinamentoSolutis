//Exemplo 1
function function_name(val) {
  return val
}

//Exemplo 2
function fun_1(...params) {
  console.log(params.length)
}

//Exemplo 3
var func = function(x,y){ return x*y }

function product() {
  var result
  result = func(10, 20)
  console.log("The product: " + result)
}

//Exemplo 4
function fazRequisicao() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Promise Resolvida")
      }, 5000)
  })
}

//Exemplo 5
function buscarCep(param) {
  let cep
  fetch(`https://viacep.com.br/ws/${param}/json/`)
      .then(response => response.json())
      .then(data => {
          cep = data.cep
          console.log("CEP encontrado: " + cep)
      })
      .catch(console.error)
  return cep
}

//Prática
fetch = require("node-fetch")
let pokemonBuscado
pokemonBuscado = buscarPokemon("pikachu")
console.log("Pokemon encontrado: " + pokemonBuscado)

function buscarPokemon(param) {
  let pokemon
  fetch(`https://pokeapi.co/pokemon/${param}`)
      .then(response => response.json())
      .then(data => {
        pokemon = data.pokemon
          console.log("Pokemon encontrado: " + pokemon)
      })
      .catch(console.error)
  return pokemon
}