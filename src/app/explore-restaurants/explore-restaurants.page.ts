import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-explore-restaurants',
  templateUrl: './explore-restaurants.page.html',
  styleUrls: ['./explore-restaurants.page.scss'],
})
export class ExploreRestaurantsPage implements OnInit {
  jsonData: any = [];

  listing: Array<any> = [];

  constructor() {
    this.initializaJSONData();
  }

  FilterJSONData(ev: any) {
    this.initializaJSONData();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.jsonData = this.jsonData.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

  selectVal(val) {
    alert("you have selected = " + val);
  }


  ngOnInit() {

    firebase.firestore().collection('restaurants').onSnapshot(snap => {
      snap.forEach(doc => {
        this.listing.push(doc.data());
        console.log(doc.data());
        console.log(doc.id);
      });
    })

  }



  initializaJSONData() {}
  

}
