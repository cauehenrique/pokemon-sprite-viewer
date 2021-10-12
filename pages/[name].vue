<script setup lang="ts">
import { Pokemon } from "../interfaces/pokemon";

const { name: pokemonName } = useRoute().params;
const { data: pokemon } = await useFetch<string, Pokemon>(
  `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
);
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <Head>
      <Title>You're seeing {{ pokemonName }} sprites - Pokémon Sprite Viewer</Title>
      <Meta
        name="description"
        :content="`I found these sprites of ${pokemonName}, hope you like it!`"
      />
    </Head>

    <div v-if="pokemon" class="flex space-x-2">
      <PokemonImage :src="pokemon.sprites.back_default" :scaleFactor="3" />
      <PokemonImage :src="pokemon.sprites.front_default" :scaleFactor="3" />
      <PokemonImage :src="pokemon.sprites.back_shiny" :scaleFactor="3" />
      <PokemonImage :src="pokemon.sprites.front_shiny" :scaleFactor="3" />
    </div>
    <div v-else class="flex flex-col items-center space-y-10">
      <h1 class="text-3xl font-bold">Couldn't find that Pokémon!</h1>
      <img src="https://c.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif" class="rounded shadow-lg" />
    </div>
  </div>
</template>
