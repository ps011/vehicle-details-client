import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VehicleDetailsProvider} from "../../providers/vehicle-details/vehicle-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
first;
second;
details;
name ;
  constructor(public navCtrl: NavController, public vehicleDetails: VehicleDetailsProvider) {

  }

  getDetails() {
    this.vehicleDetails.getDetails(this.first, this.second)
      .subscribe(data => {
        this.details = data;
        this.name = data["Owner Name:"];
        console.log('===========Data=========', data["Owner Name:"]);
      })
  }

}
