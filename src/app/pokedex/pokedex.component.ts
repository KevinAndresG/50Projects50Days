import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemonsAmount = 150;
  goUp = false;
  index = -1;
  color = 'turquoise';
  primaryColors = {
    grass: 'rgb(152, 215, 165)',
    fire: 'rgb(253, 223, 223)',
    water: 'rgb(176, 229, 253)',
    bug: 'rgb(248, 213, 163)',
    poison: 'rgb(185, 152, 215)',
    flying: 'rgb(222, 243, 253)',
    normal: 'rgb(245, 245, 245)',
    electric: 'rgb(252, 247, 222)',
    ground: 'rgb(244, 231, 218)',
    fairy: 'rgb(252, 234, 255)',
    rock: 'rgb(213, 213, 212)',
    dragon: 'rgb(151, 179, 230)',
    psychic: 'rgb(234, 237, 161)',
    fighting: 'rgb(230, 224, 212)',
    ghost: 'rgb(226, 221, 193)',
    ice: 'rgb(85, 207, 245)',
  };
  ids: string[] = [];
  names: string[] = [];
  pokemons: {
    id: string;
    name: string;
    sprite: string;
    anim: string;
    type: string;
    primaryColor: string;
    secondaryColor: string;
  }[] = [];
  constructor(private pokedexService: PokedexService) {}
  ngOnInit(): void {
    this.getPokemons();
  }
  async getPokemons() {
    for (let i = 1; i <= this.pokemonsAmount; i++) {
      let pokemon = {
        id: '',
        name: '',
        sprite: '',
        anim: '',
        type: '',
        primaryColor: '',
        secondaryColor: '',
      };
      await this.pokedexService.getPokemons(i).then((res) => {
        if (res.id < 10) {
          pokemon.id = '#00' + res.id;
        } else if (res.id < 100) {
          pokemon.id = '#0' + res.id;
        } else {
          pokemon.id = '#' + res.id;
        }
        pokemon.name = res.name;
        pokemon.sprite = res.sprites.front_default;
        pokemon.anim =
          res.sprites.versions['generation-v'][
            'black-white'
          ].animated.front_default;
        pokemon.type = res.types[0].type.name;

        switch (res.types[0].type.name) {
          case 'grass':
            pokemon.primaryColor = this.primaryColors.grass;
            break;
          case 'fire':
            pokemon.primaryColor = this.primaryColors.fire;
            break;
          case 'water':
            pokemon.primaryColor = this.primaryColors.water;
            break;
          case 'bug':
            pokemon.primaryColor = this.primaryColors.bug;
            break;
          case 'poison':
            pokemon.primaryColor = this.primaryColors.poison;
            break;
          case 'flying':
            pokemon.primaryColor = this.primaryColors.flying;
            break;
          case 'normal':
            pokemon.primaryColor = this.primaryColors.normal;
            break;
          case 'electric':
            pokemon.primaryColor = this.primaryColors.electric;
            break;
          case 'ground':
            pokemon.primaryColor = this.primaryColors.ground;
            break;
          case 'fairy':
            pokemon.primaryColor = this.primaryColors.fairy;
            break;
          case 'rock':
            pokemon.primaryColor = this.primaryColors.rock;
            break;
          case 'dragon':
            pokemon.primaryColor = this.primaryColors.dragon;
            break;
          case 'psychic':
            pokemon.primaryColor = this.primaryColors.psychic;
            break;
          case 'fighting':
            pokemon.primaryColor = this.primaryColors.fighting;
            break;
          case 'ghost':
            pokemon.primaryColor = this.primaryColors.ghost;
            break;
          case 'ice':
            pokemon.primaryColor = this.primaryColors.ice;
            break;
          default:
            break;
        }
        this.pokemons.push(pokemon);
      });
    }
  }
  pokeEnter(i: number) {
    this.index = i;
    this.goUp = true;
  }
  pokeLeave() {
    this.index = -1;
    this.goUp = false;
  }
}
