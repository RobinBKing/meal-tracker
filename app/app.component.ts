import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
    <h1>My Meal Tracker</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal(0, "Eggs and Toast", "A healthy breakfast.", 280, new Date('2016-3-25T07:00:00')),
      new Meal(1, "Apple and cheese", "Morning snack.", 90, new Date('2016-3-25T10:03:00')),
      new Meal(2, "Pasta Prevavera", "Not enough sauce.", 300, new Date('2016-3-25T12:30:00')),
      new Meal(3, "Filet Minion", "Best steak ever!", 480, new Date('2016-3-25T16:00:00'))
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
   }
}
