import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

export interface ApiRootResp {
  count: number;
  next: string;
  previous: any;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private api: ApiService) {}

  get(url: string = '') {
    const endpoint = url ? url : 'https://pokeapi.co/api/v2/pokemon/';

    return this.api.get(endpoint);
  }
}
