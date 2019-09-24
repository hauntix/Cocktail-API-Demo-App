import { Component, OnInit } from '@angular/core';
import {Cocktails} from '../Cocktails';
import { FavoriteDrinksService } from '../favorite-drinks.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  favoriteDrinks: Cocktails;

  constructor(private favoriteDrinksService: FavoriteDrinksService) {
    this.favoriteDrinks = this.favoriteDrinksService.getFavoriteDrinks();
  }

  ngOnInit() {

  }

  removeFavorite(id: string) {
    this.favoriteDrinksService.removeFavoriteDrink(id);
  }

}
