import { Component, OnInit } from '@angular/core';
import {Cocktails} from '../Cocktails';
import {CocktailsService} from '../cocktails.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.page.html',
  styleUrls: ['./drink-details.page.scss'],
})
export class DrinkDetailsPage implements OnInit {
  drink: Cocktails;

  constructor(
      private cocktailService: CocktailsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDrink();
  }

  getDrink() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.cocktailService.getCocktailByID(id)
        .subscribe((cocktails: Cocktails) => this.drink = cocktails);
  }

}
