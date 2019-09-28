import { Injectable } from '@angular/core';
import { Cocktails } from './Cocktails';

@Injectable({
  providedIn: 'root'
})
export class FavoriteDrinksService {
  private favoriteDrinks: Cocktails;

  constructor() { }

  storeFavoriteDrinks() {
    window.localStorage['favorite-drinks'] = JSON.stringify(this.favoriteDrinks);
  }

  retrieveFavoriteDrinks() {
    this.favoriteDrinks = JSON.parse(window.localStorage['favorite-drinks']);
  }

  getFavoriteDrinks(): Cocktails {
    this.retrieveFavoriteDrinks();
    return this.favoriteDrinks;
  }

  isFavoriteDrink(drinkID: string): boolean {
    if (this.favoriteDrinks !== undefined) {
      for (const drink of this.favoriteDrinks.drinks) {
        if (drink.idDrink === drinkID) {
          return true;
        }
      }
    }

    return false;
  }

  addFavoriteDrink(cocktail: Cocktails) {
    if (this.favoriteDrinks === undefined || this.favoriteDrinks.drinks === undefined) {
      this.favoriteDrinks = cocktail;
    } else {
      this.favoriteDrinks.drinks.push(cocktail.drinks[0]);
    }
    this.storeFavoriteDrinks();
  }

  removeFavoriteDrink(drinkID: string) {
    for (let i = 0; i < this.favoriteDrinks.drinks.length; i++) {
      if (this.favoriteDrinks.drinks[i].idDrink === drinkID) {
        this.favoriteDrinks.drinks.splice(i, 1);
      }
    }
    // update drinks in local storage
    this.storeFavoriteDrinks();
  }

}
