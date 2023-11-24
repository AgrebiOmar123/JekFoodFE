import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoodByRestaurant(id:number){
    return this.http.get<Food[]>(`http://localhost:8080/foodbyrestaurant/${id}`);
 }
  
}
