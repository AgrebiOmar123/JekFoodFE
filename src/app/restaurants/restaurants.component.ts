import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant/restaurant.service';
import { Restaurant } from '../shared/models/Restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  
  restaurants : Restaurant[]=[];
  constructor(private restaurantService:RestaurantService ) { }

  ngOnInit(): void {
    this.restaurantService.get().subscribe((data) => {
      this.restaurants = data;
    console.log(this.restaurants);
  
});

}}
