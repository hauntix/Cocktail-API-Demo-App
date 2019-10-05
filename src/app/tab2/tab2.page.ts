import { Component } from '@angular/core';
import { DRINK_CATEGORIES} from '../DrinkCategories';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  drinkCategories = DRINK_CATEGORIES;

  constructor( ) {  }

}
