import { Component } from '@angular/core';

import { MemoryDBService } from '../memory-db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	text = "Defualt Text";
	expenses = [
		{reason: "Alguno", amount: 100},
		{reason: "no se", amount: 200},
		{reason: "Vaina", amount: 300},
		{reason: "Locas", amount: 400}
	];

  constructor() {}

  changeText(){
  	this.text = "You changed the text!"
  }

  

}
