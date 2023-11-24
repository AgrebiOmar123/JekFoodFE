import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  foods : Food[] =[]

  constructor(private foodService: FoodService,private route: ActivatedRoute,
    private router:Router) { }
  
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.foodService.getFoodByRestaurant(id).subscribe((data) => {
        this.foods = data;
      });
    });
  }

}
