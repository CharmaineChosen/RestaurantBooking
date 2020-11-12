import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  uid = this.activatedActivated.snapshot.params.id;
  
  reservationForm: FormGroup;
  userId: any;
  ownerId: any;


  constructor(
    private fb: FormBuilder,
    public nav: NavController, private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private activatedActivated: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reservationForm = this.fb.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      guestnumber: ['', Validators.required],
      reservationtype: ['', Validators.required]
    })


   
  }


  submit(){
    var user = firebase.auth().currentUser;
    this.userId = user.uid;
    console.log('userId: ', this.userId)
    this.ownerId = this.uid
    console.log('owner-id: ', this.ownerId)

    firebase.firestore().collection('restaurants').doc(this.ownerId).collection('booking-details').add({
      userId: this.userId,
      ownerId: this.uid,
      date: this.reservationForm.value.date,
      // time: this.reservationForm.value.time,
      guestnumber: this.reservationForm.value.guestnumber,
      reservationtype: this.reservationForm.value.reservationtype,
      firstname: this.reservationForm.value.firstname,
      lastname: this.reservationForm.value.lastname,
      phone: this.reservationForm.value.phone,
      email: this.reservationForm.value.email
    }).then(function (docRef) {
      console.log("Document booking: ", docRef);
    }).catch(function (error) {
      console.log(error);
    });
    this.router.navigateByUrl('/booking-details')
    this.reservationForm.reset();
  }


  // btnClicked(){}

  // async btnClicked():Promise<void>{
  //   this.authService.loginUser(this.reservationForm.value.email, this.reservationForm.value.password).
  //   then(
  //     ()=>{
  //       this.router.navigateByUrl('booking-details');
  //     },
  //     async error => {
  //       const alert = await this.alertCtrl.create({
  //         message:error.message,
  //         buttons:[{text:'ok',role:'cancel'}],
  //       });
  //       await alert.present();
  //     }
  //   );
  // }

  // PassDataToNextPage()
  // {
  //   this.router.navigate(['booking-details'],{queryParams :{id:1,name:"xyz"}});
  // }

  btnClicked() {
    this.router.navigateByUrl('/booking-details')
  }


}
