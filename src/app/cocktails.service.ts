import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  private cocktailApiUrl = 'https://the-cocktail-db.p.rapidapi.com';
  private headers = new HttpHeaders()
      .set('x-rapidapi-host', 'the-cocktail-db.p.rapidapi.com')
      .set('x-rapidapi-key', '2808db3ccfmsh7e0a035fe090517p12348bjsnb8e974b82c50');



  constructor( private http: HttpClient ) { }

  getRandomCocktail() {
    return this.http.get(
        this.cocktailApiUrl + '/random.php',
        { headers: this.headers });
  }

  getCocktailsByName(searchTerm: string) {
    return this.http.get(
        this.cocktailApiUrl + '/search.php?s=' + searchTerm,
        { headers: this.headers });
  }

  getCocktailsByCategory(category: string) {
    return this.http.get(
        this.cocktailApiUrl + '/filter.php?c=' + category,
        { headers: this.headers });
  }

  getCocktailsByIngredient(searchTerm: string) {
    return this.http.get(
        this.cocktailApiUrl + '/filter.php?i=' + searchTerm,
        { headers: this.headers });
  }

  getCocktailByID(id: number) {
    return this.http.get(
        this.cocktailApiUrl + '/lookup.php?i=' + id,
        { headers: this.headers});
  }
}
