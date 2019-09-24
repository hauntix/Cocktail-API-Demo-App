import { Component } from '@angular/core';
import { DRINK_CATEGORIES} from '../DrinkCategories';
import { Cocktails } from '../Cocktails';
import { CocktailsService } from '../cocktails.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  drinkCategories = DRINK_CATEGORIES;
  drinksByCategory: Cocktails;
  drinkDetails: Cocktails;


  constructor( private cocktailService: CocktailsService) {  }

  getDrinksByCategory(category: string) {
    this.cocktailService.getCocktailsByCategory(category)
        .subscribe((result: Cocktails) => {
          this.drinksByCategory = result;
        });
  }

  goToDrinksList() {
  }

  getDrinkDetails(drinkName: string) {
    this.cocktailService.getCocktailsByName(drinkName)
        .subscribe((result: Cocktails) => {
          this.drinkDetails = result;
        });
  }
}
