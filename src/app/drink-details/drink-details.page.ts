import { Component, OnInit } from '@angular/core';
import {Cocktails, Drink} from '../Cocktails';
import {CocktailsService} from '../cocktails.service';
import {ActivatedRoute} from '@angular/router';
import {FavoriteDrinksService} from '../favorite-drinks.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.page.html',
  styleUrls: ['./drink-details.page.scss'],
})
export class DrinkDetailsPage implements OnInit {
  drink: Drink;

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
        .subscribe((cocktails: Cocktails) => {
          this.drink = cocktails.drinks[0];
          this.drink.isFavorite = this.isFavorite();
        });
  }

  toggleFavoriteDrink() {

    // set drink to favorite if it's never been favorite before
    if (this.drink.isFavorite === undefined) {
      this.drink.isFavorite = true;
      this.favoriteDrinksService.addFavoriteDrink(this.drink);

      // remove drink from favorites and set to false
    } else if (this.drink.isFavorite) {
      this.drink.isFavorite = false;
      this.favoriteDrinksService.removeFavoriteDrink(this.drink.idDrink);

      // set drink back to favorite (drink was fav then unfav before)
    } else if (!this.drink.isFavorite) {
      this.drink.isFavorite = true;
      this.favoriteDrinksService.addFavoriteDrink(this.drink);
    }

  }

  isFavorite(): boolean {
    return this.favoriteDrinksService.isFavoriteDrink(this.drink.idDrink);
  }
}
