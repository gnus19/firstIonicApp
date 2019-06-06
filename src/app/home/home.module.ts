import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ViewExpensesComponent } from './view-expenses/view-expenses.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'view',
        component: ViewExpensesComponent
      }
    ])
  ],
  declarations: [
    HomePage,
    ViewExpensesComponent
  ]
})
export class HomePageModule {}
