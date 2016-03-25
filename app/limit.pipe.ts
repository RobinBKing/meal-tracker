import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "limit",
  pure: false
})
export class LimitPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredLimitState = args[0];
    if(desiredLimitState === "over") {
      return input.filter(function(meal) {
        return meal.calories > 300;
        // return meal.limit;
      });
    } else if (desiredLimitState === "under") {
      return input.filter(function(meal) {
        return meal.calories <= 300;

        // return !meal.limit;
      });
    } else {
      return input;
    }
  }
}
