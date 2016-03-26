import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {LimitPipe} from './limit.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [LimitPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <div class="selectLimit">
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="over">Over Limit</option>
      <option value="under">Under Limit</option>
    </select>
  </div>
  <meal-display *ngFor="#currentMeal of mealList | limit:filterLimit"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterLimit: string = "";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(this.mealList.length, newMeal.food, newMeal.details, newMeal.calories, newMeal.dateTimeStamp)
    );
  }
  onChange(filterOption) {
    this.filterLimit = filterOption;
  };
}
