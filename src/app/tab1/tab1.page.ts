import {Component, OnInit} from '@angular/core';
import {Cocktails} from '../Cocktails';
import {CocktailsService} from '../cocktails.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  randomCocktail: Cocktails;

  constructor(private cocktailService: CocktailsService) {

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


}
