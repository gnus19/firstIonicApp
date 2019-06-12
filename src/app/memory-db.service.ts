import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

let datos = [
  {"reason": "Alguno", "amount": 100},
  {"reason": "no se", "amount": 200},
  {"reason": "Vaina", "amount": 300},
  {"reason": "Locas", "amount": 400}
]

@Injectable({
  providedIn: 'root'
})

export class MemoryDBService {

  baseurl = '/assets/data/data.json';

  constructor(private httpClient: HttpClient) { }

  getData() {
    // return this.httpClient.get<Expense[]>(this.baseurl);
    return datos;
  }

  // getData() {
  //   return new Promise(resolve => resolve(datos));
  // }

  addExpense(newExpense) {
    // return this.httpClient.post(this.baseurl, newExpense);
    return datos.push(newExpense);
  }

  // addExpense(newExpense) {
  //   return new Promise(resolve => {
  //     datos.push(newExpense);
  //     resolve(newExpense);
  //   })
  // }

}