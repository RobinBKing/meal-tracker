import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="mealInfo">
    <label>{{ meal.food }}</label>
    <label class="lineInfo"> Details: {{ meal.details }}</label>
    <label class="lineInfo"> Calories: {{ meal.calories }}</label>
    <label class="lineInfo"> Date Entered: {{ meal.dateTimeStamp | date:"MM/dd/yyyy" }}</label>
   </div>
  `
})
export class MealComponent {
  public meal: Meal;
  toggleLimit(setState: boolean) {
    this.meal.limit = setState;
  }
}
