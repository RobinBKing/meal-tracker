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
    <input type="number" placeholder="Calories" class="col-sm-1 input-lg" #newCalories>
    <input type="date" class="col-sm-2 input-lg" #newDateTime>
    <button (click)="addMeal(newFood, newDetails, newCalories, newDateTime)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  public userDate: Date = new Date();
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userFood: HTMLInputElement,
          userDetails: HTMLInputElement,
          userCalories: HTMLInputElement,
          userDateTime: HTMLInputElement
          ){
    if(userDateTime.value){
        this.userDate = new Date(userDateTime.value);        
    }
    console.log(userDateTime.value);
    this.onSubmitNewMeal.emit(new Meal(0, userFood.value, userDetails.value, parseInt(userCalories.value), this.userDate));
    userFood.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
