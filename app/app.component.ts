import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container-fluid">
      <div class="hero">
        <div class="hero-inner">
          <div class="hero-copy">
            <h1>Tracking Has Never Been Easier!</h1>
          </div>
        </div>
      </div>

      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
      <div class=footer>
        <img src="./img/foodgroups.png" alt="foodgroups">
      </div>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal(0, "Eggs and Toast", "A healthy breakfast.", 280, new Date("03/25/2016")),
      new Meal(1, "Apple and cheese", "Morning snack.", 90, new Date("03/25/2016")),
      new Meal(2, "Pasta Prevavera", "Not enough sauce.", 300, new Date("03/25/2016")),
      new Meal(3, "Filet Minion", "Best steak ever!", 480, new Date("03/25/2016"))
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
   }
}
