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
	private newExpense;
	private expenses;

	constructor(public alertController: AlertController, public dbService: MemoryDBService) {}
	
	ngOnInit() {
		this.newExpense = {
			reason: "",
			amount: 0,
		}
	}

  changeText(){
  	this.text = "You changed the text!"
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
					this.dbService.addExpense(this.newExpense)
					// this.dbService.addExpense(this.newExpense).then(() =>
					// 	console.log(this.newExpense)
					// );
					// console.log("It work!");
			  }
			}]
		});
	
		await alert.present();
	  }

}
