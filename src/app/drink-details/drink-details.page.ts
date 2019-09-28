import { Component, OnInit } from '@angular/core';
import {Cocktails} from '../Cocktails';
import {CocktailsService} from '../cocktails.service';
import {ActivatedRoute} from '@angular/router';
import {FavoriteDrinksService} from '../favorite-drinks.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.page.html',
  styleUrls: ['./drink-details.page.scss'],
})
export class DrinkDetailsPage implements OnInit {
  drink: Cocktails;

  constructor(
      private cocktailService: CocktailsService,
      private favoriteDrinksService: FavoriteDrinksService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDrink();
  }

  getDrink() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.cocktailService.getCocktailByID(id)
        .subscribe((cocktails: Cocktails) => this.drink = cocktails);
  }

  toggleFavorite(drink: Cocktails) {
    // TODO complete this dumb shit
    drink.drinks[0].isFavorite = !drink.drinks[0].isFavorite;
    if (drink.drinks[0].isFavorite) {
      this.favoriteDrinksService.removeFavoriteDrink(drink.drinks[0].idDrink);
    }
  }

  isFavorite(drink: Cocktails): boolean {
    return this.favoriteDrinksService.isFavoriteDrink(drink.drinks[0].idDrink);
  }
}
