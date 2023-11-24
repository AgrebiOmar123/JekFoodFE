import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {}
  get(){
    return this.http.get<Restaurant[]>('http://localhost:8080/restaurant');
  }
  create(payload: Restaurant) {
    return this.http.post<Restaurant>('http://localhost:8080/restaurant', payload);
  }
  getById(id: number) {
    return this.http.get<Restaurant>(`http://localhost:8080/restaurant/${id}`);
   }
    
   update(payload:Restaurant){
    return this.http.put(`http://localhost:8080/restaurant/`,payload);
   }
   delete(id:number){
    return this.http.delete<Restaurant>(`http://localhost:8080/restaurant/${id}`);
 }
}
