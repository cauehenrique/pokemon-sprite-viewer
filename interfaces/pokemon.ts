// Generated by https://quicktype.io

export interface Pokemon {
  id: number;
  name: string;
  species: Species;
  sprites: Sprites;
  types: Type[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  animated?: Sprites;
}

export interface Type {
  slot: number;
  type: Species;
}
