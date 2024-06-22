import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent  implements OnInit{

  public country? : Country;
  
  constructor( 
    private activatedRoute : ActivatedRoute,
    private countriesService : CountryService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap((params) => this.countriesService.searchCountryByAlphaCode(params['id']))
    )
    .subscribe(
      country => {
        if(!country){ // si no existe 
          return this.router.navigateByUrl('')
        }

        return this.country = country;

        
      }
    )
  }







}
