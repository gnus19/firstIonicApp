import { Component } from '@angular/core';

import { MemoryDBService } from '../memory-db.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	text = "Defualt Text";
	newExpense;
	expenses = [
		{reason: "Alguno", amount: 100},
		{reason: "no se", amount: 200},
		{reason: "Vaina", amount: 300},
		{reason: "Locas", amount: 400}
	];

	constructor(public alertController: AlertController) {}
	
	ngOnInit() {
		this.newExpense = {
			reason: "",
			amount: 0,
		}
	}

  changeText(){
  	this.text = "You changed the text!"
  }

  onSubmit() {
		this.expenses.push(this.newExpense);
		console.log("It work!");
		
	}

	async presentAlertConfirm() {
		const alert = await this.alertController.create({
		  header: 'Confirmar datos',
		  message: '¿Estas seguro?',
		  buttons: [
			{
			  text: 'Cancel',
			  role: 'cancel',
			  cssClass: 'secondary',
			  handler: (blah) => {
				console.log('Confirm Cancel: blah');
			  }
			}, {
			  text: 'Okay',
			  handler: () => {
				this.expenses.push(this.newExpense);
				console.log("It work!");
			  }
			}
		  ]
		});
	
		await alert.present();
	  }

}
