import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookings: Array<any> = [];
  restaurants: Array<any> = [];
  ownerId: any
  restId: any
  bookId: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let user = firebase.auth().currentUser.uid;
    // this.ownerId = user

    // fetching all the restaurants to get the unique id
    firebase.firestore().collection('restaurants').onSnapshot(res => {
      res.forEach(doc => {
        this.restaurants.push(Object.assign(doc.data(), { uid: doc.id }))
        this.restId = { uid: doc.id }.uid
        console.log('THIS IDD:', this.restId)

        //fetching all the bookings from firebase
        firebase.firestore().collection('restaurants').doc(this.restId).collection('booking-details').where('restId', '==', this.restId).onSnapshot(res => {
          res.forEach(element => {
            this.bookings.push(Object.assign(element.data(), { uid: element.id }));
            this.bookId = { uid: element.id }.uid
            console.log('BOOKINGS:', this.bookings)
            console.log('BOOK ID:: ' + this.bookId)
            console.log('u: ' + element.id)
            console.log('Bookings: ', this.bookings)
            // console.log(this.bookings);

            // firebase.firestore().collection('restaurants').doc(this.restId).collection('booking-details').doc(this.bookId).set({
            //   status: ''
            // }, { merge: true }
            // ).then(a => {
            //   console.log('Changed')
            // })

          });
        });

      })
    })

    // //fetching all the bookings from firebase
    // firebase.firestore().collection('restaurants').doc(user).collection('booking-details').where('ownerId', '==', user).onSnapshot(res => {
    //   res.forEach(element => {
    //     this.bookings.push(Object.assign(element.data(), { uid: element.id }));
    //     console.log('uuu: ' + { uid: element.id })
    //     console.log('u: ' + element.id)
    //     console.log('Bookings: ', this.bookings)
    //     // console.log(this.bookings);

    //   });
    // });

  }
  status(restId, userId, status) {
    this.authService.bookingStatus(restId, userId, status);
    console.log('service', this.authService.bookingStatus(restId, userId, status))
  }

  // status(){
  //   firebase.firestore().collection('restaurants').doc(this.restId).collection('booking-details').doc(userId).set({
  //     status: ''
  //   }, { merge: true }
  //   ).then(a => {
  //     console.log('Changed')
  //   })
  // }

}
