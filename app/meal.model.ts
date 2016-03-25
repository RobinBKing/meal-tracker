export class Meal {
  public limit: boolean = false;
  constructor(public id: number, public food: string, public details: string, public calories: number, public dateTimeStamp: Date)  {
  }
}