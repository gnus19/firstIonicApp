import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ViewExpensesComponent } from './view-expenses/view-expenses.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'add',
        component: HomePage
      },
      {
        path: '',
        component: ViewExpensesComponent
      },
      {
        path: 'details',
        component: ExpenseDetailComponent
      }
    ])
  ],
  declarations: [
    HomePage,
    ViewExpensesComponent,
    ExpenseDetailComponent
  ]
})
export class HomePageModule {}
