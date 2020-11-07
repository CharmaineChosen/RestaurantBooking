import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ownerId: any;
  restaurant: any;

  constructor(private router: Router) { }

  ngOnInit() {
    var user = firebase.auth().currentUser;

    this.ownerId = user.uid;

    firebase.firestore().collection('restaurants').doc(this.ownerId).get().then(snapshot => {
      this.restaurant = snapshot.data();
    })
  }

  registerRes(){
    this.router.navigateByUrl('add-restaurants');

  }

}



