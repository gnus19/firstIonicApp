import { Injectable } from '@angular/core';
import { Expense } from './home/expense';

@Injectable({
  providedIn: 'root'
})
export class MemoryDBService {

  constructor() { }

  addExpense(expenses: Expense[], nuevo: Expense) {
  	return expenses.push(nuevo);
  }

}
