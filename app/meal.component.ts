import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="mealInfo">
    <label>{{ meal.food }}</label>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
  toggleLimit(setState: boolean) {
    this.meal.limit = setState;
  }
}
