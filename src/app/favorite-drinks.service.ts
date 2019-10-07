import { Injectable } from '@angular/core';
import {Cocktails, Drink} from './Cocktails';

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
    if (window.localStorage['favorite-drinks'] !== undefined) {
      this.favoriteDrinks = JSON.parse(window.localStorage['favorite-drinks']);
    }
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

  addFavoriteDrink(drink: Drink) {
    if (this.favoriteDrinks === undefined || this.favoriteDrinks.drinks === undefined) {
      const tmp = new Cocktails();
      tmp.addDrink(drink);
      this.favoriteDrinks = tmp;
    } else {
      this.favoriteDrinks.drinks.push(drink);
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
