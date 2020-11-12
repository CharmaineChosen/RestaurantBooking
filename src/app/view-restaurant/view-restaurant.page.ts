import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.page.html',
  styleUrls: ['./view-restaurant.page.scss'],
})
export class ViewRestaurantPage implements OnInit {

  id: any;

  restaurants: any = [];

  constructor(private activatedActivated: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.activatedActivated.snapshot.paramMap.get('id')

    firebase.firestore().collection('restaurants').doc(this.id).get().then(snapshot => {
      this.restaurants = snapshot.data();
      console.log('new data: ', this.restaurants)
    }); 

  } 
  
  book_table(){
   // this.router.navigate(["'/reservation/'", this.id])
  }

}
