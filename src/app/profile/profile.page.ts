import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ownerId: any;
  restaurants: Array<any> = [];
  restaurant: any;
  restId: any;

  constructor(private router: Router) { }

  ngOnInit() {
    var user = firebase.auth().currentUser;

    this.ownerId = user.uid;
    console.log('uid: ', this.ownerId)

    // fetching all the restaurants to get the unique id
    firebase.firestore().collection('restaurants').where('ownerId', '==', this.ownerId).onSnapshot(res => {
      res.forEach(doc => {
        this.restaurants.push(Object.assign(doc.data(), {uid:doc.id}))
        this.restId = {uid:doc.id}.uid

        // fetching a single restaurants
        firebase.firestore().collection('restaurants').doc(this.restId).get().then(snapshot => {
          this.restaurant = snapshot.data();
        })
      })
    })

  }

  registerRes(){
    this.router.navigateByUrl('add-restaurants');
  }

}



