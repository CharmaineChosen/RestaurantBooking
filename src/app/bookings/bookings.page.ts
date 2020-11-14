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
  ownerId: any

  constructor(private fb: FormBuilder,private authService: AuthService,private router: Router) { }

  ngOnInit() {
    let user = firebase.auth().currentUser.uid;
    // this.ownerId = user

    //fetching all the bookings from firebase
    firebase.firestore().collection('restaurants').doc(user).collection('booking-details').where('ownerId', '==' , user).onSnapshot(res => {
      res.forEach(element => {
        this.bookings.push(Object.assign( element.data(), {uid:element.id}) );
        console.log('uuu: ' + {uid:element.id})
        console.log('u: ' + element.id)
        console.log('Bookings: ', this.bookings)
        // console.log(this.bookings);
        
      });
    });

  }
  status(ownerId, userId, status){
    this.authService.bookingStatus(ownerId, userId, status);
    console.log('service', this.authService.bookingStatus(ownerId, userId, status))
  }

}
