import { Component, OnInit } from '@angular/core';
// import { FormBuilder,FormGroup} from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';



@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {

  // uid = this.activatedActivated.snapshot.params.id;

  // reservationForm: FormGroup;
  userId: any;
  bookings: Array<any> = [];
  // ownerId:any;



  constructor(
    // private fb: FormBuilder,
    // private authService: AuthService,
    // private router: Router,
    // private activatedActivated: ActivatedRoute
) { }

  ngOnInit() {

    let user = firebase.auth().currentUser;
    this.userId = user.uid;
    console.log('user id Booked: ', this.userId)
  

    const userBookings = firebase.firestore().collectionGroup('booking-details').where('userId', '==', this.userId);
    userBookings.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.bookings.push(doc.data())
        console.info('doc-id: ', doc.id, '=>', 'doc-data: ', doc.data());
        console.log('userBookings: ', this.bookings)
      })
    })

    

  //   var user = firebase.auth().currentUser;
  //   this.userId = user.uid;
  //   console.log('userId: ', this.userId)
  //   this.ownerId = this.uid
  //   firebase.firestore().collection('restaurants').doc(this.uid).collection('booking-details').add({
  //     userId: this.userId,
  //     ownerId: this.uid,
  //     date: this.reservationForm.value.date,
  //     time: this.reservationForm.value.time,
  //     guestnumber: this.reservationForm.value.guestnumber,
  //     reservationtype: this.reservationForm.value.reservationtype,
  //     firstName: this.reservationForm.value.firstName,
  //     lastName: this.reservationForm.value.lastName,
  //     phone: this.reservationForm.value.phone,
  //     email: this.reservationForm.value.email
  //   }).then(function(docRef){
  //     console.log("Document booking: ", docRef);
  //   }).catch(function(error){
  //     console.log(error);
  //   });
  //   this.reservationForm.reset();
  }

}
