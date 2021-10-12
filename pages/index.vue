<template>
  <div class="min-h-screen flex items-center justify-center flex-col space-y-14">
    <Head>
      <Title>Pokémon Sprite Viewer</Title>
      <Meta name="description" content="A simple Pokémon sprite viewer powered by PokéAPI" />
    </Head>

    <div class="text-center">
      <h1 class="text-3xl font-bold">Pokémon Sprite Viewer</h1>
      <h2 class="text-2xl text-gray-400 mt-1">
        Powered by
        <a
          href="https://pokeapi.co/"
          target="_blank"
          class="text-blue-400 underline"
        >PokéAPI</a>
      </h2>
    </div>
    <div class="text-xl text-center">
      <span>Type a Pokémon name into the URL to get started!</span>
      <NuxtLink to="/pikachu" class="text-blue-500 underline block">/pikachu</NuxtLink>
    </div>
  </div>
</template>
