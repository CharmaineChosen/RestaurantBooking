import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  owners: any;

  constructor() { }

  ngOnInit() {
    
    let user = firebase.auth().currentUser.uid

    firebase.firestore().collection('owners').doc(user).get().then((res) => {
      this.owners = res.data();
      console.log('OWNERS: ', this.owners)
    })

  }

}
