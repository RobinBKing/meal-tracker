import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h3>Edit Meal Entry: </h3>
    <input [(ngModel)]="meal.food" class="col-sm-4 input-lg meal-form"/>
    <input [(ngModel)]="meal.details" class="col-sm-4 input-lg meal-form"/>
    <input [(ngModel)]="meal.calories" class="col-sm-2 input-lg meal-form"/>
    <input [(ngModel)]="meal.dateTimeStamp" type="date" class="col-sm-2 input-lg meal-form"/>
  </div>
`
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
