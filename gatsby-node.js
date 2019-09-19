exports.createPages = ({ actions }) => {
  const { createPage } = actions
  // pull in or use whatever data
  const dogData = [
    {
      name: "Fido",
      breed: "Sheltie",
    },
    {
      name: "Sparky",
      breed: "Corgi",
    },
  ]

  dogData.forEach(dog => {
    createPage({
      path: `/${dog.name}`,
      component: require.resolve(`./src/components/dog.js`),
      context: { dog },
    })
  })
}

// const axios = require("axios")
// const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
// const getPokemonData = names =>
//   Promise.all(
//     names.map(async name => {
//       const { data: pokemon } = await get(`/pokemon/${name}`)
//       return { ...pokemon }
//     })
//   )
// exports.createPages = async ({ actions: { createPage } }) => {
//   const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])
//   // Create a page that lists Pokémon.
//   createPage({
//     path: `/$`,
//     component: require.resolve("./src/templates/all-pokemon.js"),
//     context: { allPokemon },
//   })
// }
