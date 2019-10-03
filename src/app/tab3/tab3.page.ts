import {Component} from '@angular/core';
import {CocktailsService} from '../cocktails.service';
import {Cocktails, Drink} from '../Cocktails';
import * as $ from 'jquery';
import {FavoriteDrinksService} from '../favorite-drinks.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  searchResults: Cocktails;
  drinkDetails: Drink;

  constructor(
    private cocktailService: CocktailsService,
    private favoriteDrinksService: FavoriteDrinksService
  ) {
  }

  getSearchResults() {
    const searchDiv = $('#searchContainer');
    const noResultTag = $('#searchResult');
    const searchTerm = $('#search').val() as string;

    if (searchTerm.length !== 0) {
      this.cocktailService.getCocktailsByName(searchTerm)
        .subscribe((result: Cocktails) => {
          this.searchResults = result;
          searchDiv.show();

          if (this.searchResults.drinks === null) {
            noResultTag.show();
          } else {

            if (this.searchResults.drinks.length > 0) {
              noResultTag.hide();
            }
          }
        });
    } else if (searchTerm.length === 0) {
      searchDiv.hide();
    } else {
      this.searchResults = undefined;
      noResultTag.show();
    }
  }


  isFavorite(drink: Drink): boolean {
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
