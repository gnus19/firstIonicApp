import { Component, OnInit } from '@angular/core';
import { MemoryDBService } from '../../memory-db.service';
import { Expense } from '../../expense';

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.component.html',
  styleUrls: ['./view-expenses.component.scss'],
  providers: [MemoryDBService,]
})  
export class ViewExpensesComponent implements OnInit {

  private expenses: Expense[];

  constructor(private dbArray: MemoryDBService) { }

  ngOnInit() {
    this.expenses = this.dbArray.getData()
  }

}
