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
  cocktail: Cocktails;

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
    console.log('try to store ' + drink.drinks[0]);
    drink.drinks[0].isFavorite = true;
    this.favoriteDrinksService.addFavoriteDrink(drink);
  }
}
