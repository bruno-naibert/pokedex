import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonDetail } from '../../models/pokemon.detail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDetail;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.pokemon = data.pokemon;
  }

  ngOnInit(): void {}

  getAbilities(): string {
    return this.pokemon.abilities.map((x) => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter((x) => x.slot === 1)[0]?.type.name;
  }
}
