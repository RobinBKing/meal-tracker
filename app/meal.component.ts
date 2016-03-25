import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <label>{{ meal.food }}</label>
  </div>
  `
    // <input *ngIf="meal.limit" type="checkbox" checked (click)="toggleLimit(false)"/>
    // <input *ngIf="!meal.limit" type="checkbox" (click)="toggleLimit(true)"/>
})
export class MealComponent {
  public meal: Meal;
  toggleLimit(setState: boolean) {
    this.meal.limit = setState;
  }
}
