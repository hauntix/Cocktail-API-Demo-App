import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from '../cocktails.service';
import { Cocktails } from '../Cocktails';
import { Category } from '../DrinkCategories';

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
    private cocktailService: CocktailsService
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

}
