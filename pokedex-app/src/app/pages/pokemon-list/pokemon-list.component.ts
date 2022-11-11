import { Component, OnInit } from '@angular/core';
import {
  ApiRootResp,
  PokedexService,
} from 'src/app/services/api/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  constructor(private apiPokedex: PokedexService) {}

  ngOnInit(): void {
    this.getPokemonsList();
  }

  getPokemonsList() {
    this.apiPokedex.get().subscribe((resp: ApiRootResp) => {
      console.log(resp);

      resp?.results?.forEach((pokemon) => {
        this.showPokemon(pokemon?.url);
      });
    });
  }

  showPokemon(url: string) {
    this.apiPokedex.get(url).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
