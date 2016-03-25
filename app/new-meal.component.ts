import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Meal" class="col-sm-4 input-lg" #newFood>
    <input placeholder="Details" class="col-sm-4 input-lg" #newDetails>
    <input placeholder="Calories" class="col-sm-2 input-lg" #newCalories>
    <input placeholder="Date" class="col-sm-2 input-lg" #newDateTimeStamp>
    <button (click)="addMeal(newDescription)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userDescription: HTMLInputElement){
    this.onSubmitNewMeal.emit(userDescription.value);
    userDescription.value = "";
  }
}
