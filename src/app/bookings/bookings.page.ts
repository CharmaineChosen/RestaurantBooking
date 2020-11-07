import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookings: Array<any> = [];

  constructor(private fb: FormBuilder,private authService: AuthService,private router: Router) { }

  ngOnInit() {
    var user = firebase.auth().currentUser.uid;

    //fetching all the bookings from firebase
    firebase.firestore().collection('restaurants').doc(user).collection('bookings').where('ownerId', '==' , user).onSnapshot(res => {
      res.forEach(element => {
        this.bookings.push(element.data());
      });
    });

  }

}
