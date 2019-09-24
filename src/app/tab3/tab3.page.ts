import {Component} from '@angular/core';
import {CocktailsService} from '../cocktails.service';
import {Cocktails, Drink} from '../Cocktails';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  searchResults: Cocktails;
  drinkDetails: Drink;

  constructor(private cocktailService: CocktailsService) {
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
}
