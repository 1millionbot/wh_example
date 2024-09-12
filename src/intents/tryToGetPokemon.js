"use strict";

const pokeApi = require("../services/pokeApi");

const capitalizarPrimeraLetra = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = async (webhookAdapter) => {
  console.info("Intent: Try To Get Pokemon");
  try {
    const { parameters } = webhookAdapter;

    const { number, name } = parameters || {};

    if (number) {
      const pokemon = await pokeApi.get(`pokemon/${number}`);

      const pokemonName = capitalizarPrimeraLetra(pokemon.name);

      webhookAdapter.addMessage([
        {
          type: "Text",
          message: `El Pokémon numero ${number} es... ${pokemonName} !`,
        },
      ]);
    }

    if (name) {
      const pokemonName = name.toLowerCase();

      const pokemon = await pokeApi.get(`pokemon/${pokemonName}`);

      const pokemonNumber = pokemon.id;

      webhookAdapter.addMessage([
        {
          type: "Text",
          message: `El Pokémon numero de ${name} es... ${pokemonNumber} !`,
        },
      ]);
    }
  } catch (error) {
    console.error({ error });

    webhookAdapter.addMessage([
      {
        type: "Text",
        message: "❗ Pokémon no identificado",
      },
    ]);
  }
};
