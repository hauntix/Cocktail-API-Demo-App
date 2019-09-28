import { Component, OnInit } from '@angular/core';
import { Cocktails } from '../Cocktails';
import { CocktailsService } from '../cocktails.service';
import { FavoriteDrinksService } from '../favorite-drinks.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  randomCocktail: Cocktails;
  // cocktail: Cocktails;

  constructor(private cocktailService: CocktailsService, private favoriteDrinksService: FavoriteDrinksService) {

  }

  ngOnInit(): void {
    this.getRandomCocktail();
  }

  private getRandomCocktail() {
    this.cocktailService.getRandomCocktail()
        .subscribe((result: Cocktails) => {
          this.randomCocktail = result;
        });
  }

  favoriteDrink(drink: Cocktails) {

    // set drink to favorite if it's never been favorite before
    if (drink.drinks[0].isFavorite === undefined) {
      drink.drinks[0].isFavorite = true;
      this.favoriteDrinksService.addFavoriteDrink(drink);

      // remove drink from favorites and set to false
    } else if (drink.drinks[0].isFavorite) {
      this.randomCocktail.drinks[0].isFavorite = false;
      this.favoriteDrinksService.removeFavoriteDrink(drink.drinks[0].idDrink);

      // set drink back to favorite (drink was fav then unfav before)
    } else if (!drink.drinks[0].isFavorite) {
      this.randomCocktail.drinks[0].isFavorite = true;
      this.favoriteDrinksService.addFavoriteDrink(drink);
    }
  }

  isFavoriteDrink(): boolean {
    const id = this.randomCocktail.drinks[0].idDrink;
    return this.favoriteDrinksService.isFavoriteDrink(id);
  }
}
