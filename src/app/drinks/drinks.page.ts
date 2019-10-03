import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from '../cocktails.service';
import {Cocktails, Drink} from '../Cocktails';
import { Category } from '../DrinkCategories';
import {FavoriteDrinksService} from '../favorite-drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  drinksByCategory: Cocktails;
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailsService,
    private favoriteDrinksService: FavoriteDrinksService
  ) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks(): void {
    const category = this.route.snapshot.paramMap.get('category');

    switch (category) {
      case 'Ordinary_Drink' :
        this.category = {name: 'Ordinary Drink\'s', value: category};
        break;
      case 'Cocktail' :
        this.category = {name: 'Cocktail\'s', value: category};
        break;
      case 'Milk_Float_Shake' :
        this.category = {name: 'Milk / Float\'s / Shakes', value: 'Milk / Float / Shake'};
        break;
      case 'Other_Unknown':
        this.category = { name: 'Other / Unknown', value: 'Other/Unknown'};
        break;
      case 'Cocoa' :
        this.category = { name: 'Cocoa Drink\'s', value: category};
        break;
      case 'Shot' :
        this.category = { name: 'Shot\'s', value: category};
        break;
      case 'Coffee_Tea':
        this.category = { name: 'Coffee / Tea\'s', value: 'Coffee / Tea'};
        break;
      case 'Homemade_Liqueur':
        this.category = { name: 'Homemade Liqueur\'s', value: 'Homemade Liqueur'};
        break;
      case 'Punch_Party_Drink':
        this.category = { name: 'Punch / Party Drink\'s', value: 'Punch / Party Drink'};
        break;
      case 'Beer':
        this.category = { name: 'Beer\'s', value: 'Beer'};
        break;
      case 'Soft_Drink_Soda':
        this.category = {name: 'Soft Drink\'s / Soda\'s', value: 'Soft DRink / Soda'};
    }

    this.cocktailService.getCocktailsByCategory(this.category.value)
        .subscribe((cocktails: Cocktails) => this.drinksByCategory = cocktails);
  }

  isFavoriteDrink(drink: Drink): boolean {
    return this.favoriteDrinksService.isFavoriteDrink(drink.idDrink);
  }

  toggleFavoriteDrink(drink: Drink) {
    // set drink to favorite if it's never been favorite before
    if (drink.isFavorite === undefined) {
      drink.isFavorite = true;
      this.favoriteDrinksService.addFavoriteDrink(drink);

      // remove drink from favorites and set to false
    } else if (drink.isFavorite) {
      drink.isFavorite = false;
      this.favoriteDrinksService.removeFavoriteDrink(drink.idDrink);

      // set drink back to favorite (drink was fav then unfav before)
    } else if (!drink.isFavorite) {
      drink.isFavorite = true;
      this.favoriteDrinksService.addFavoriteDrink(drink);
    }

  }
}
