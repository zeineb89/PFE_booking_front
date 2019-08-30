import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private brandsList : Array<Brand>

  constructor(private http: HttpClient) { }


  getBrands(){
    return this.http.get(`${environment.urlAddress}/brands`)
    .pipe(map(brands =>{
      console.log(brands)
      this.brandsList = brands as [Brand]
      return this.brandsList
    }))
  }
}
