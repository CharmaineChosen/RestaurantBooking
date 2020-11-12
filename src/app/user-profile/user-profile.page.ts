import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  ownerId: any;
  user: any;

  constructor(private router: Router) { }

  ngOnInit() {

    var user = firebase.auth().currentUser;

    this.ownerId = user.uid;

    firebase.firestore().collection('users').doc(this.ownerId).get().then(snapshot => {
      this.user = snapshot.data();
    })

  }

  newUser(){
    this.router.navigateByUrl('add-user');
  }

}
