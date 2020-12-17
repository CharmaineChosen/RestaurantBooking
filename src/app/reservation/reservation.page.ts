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

  // uid = this.activatedActivated.snapshot.params.id;
  reservationForm: FormGroup;
  userId: any;
  id: any;
  ownerId: any;
  restId: any;
  restaurants: Array<any> = [];


  constructor(
    private fb: FormBuilder,
    public nav: NavController, private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private activatedActivated: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedActivated.snapshot.paramMap.get('id')
    console.log('iddd: ', this.id)

    // fetching all the restaurants to get the unique id
    // firebase.firestore().collection('owners').onSnapshot(res => {
    //   res.forEach(doc => {
    //     this.restaurants.push(Object.assign(doc.data(), {uid:doc.id}))
    //     this.ownerId = {uid:doc.id}.uid
    //     console.log('OWNERS IDD: ', this.ownerId)
    //   })
    // })

    this.reservationForm = this.fb.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guestnumber: ['', Validators.required],
      reservationtype: ['', Validators.required]
    })
  }

  submit() {
    let user = firebase.auth().currentUser;
    this.userId = user.uid;
    console.log('userId: ', this.userId)
    // this.ownerId = this.uid
    // console.log('owner-id: ', this.ownerId)

    this.ownerId = this.ownerId
    console.log('IDDDD: ', this.ownerId)

    firebase.firestore().collection('restaurants').doc(this.id).collection('booking-details').add({
      userId: this.userId,
      // ownerId: this.ownerId,
      restId: this.id,
      date: this.reservationForm.value.date,
      time: this.reservationForm.value.time,
      guestnumber: this.reservationForm.value.guestnumber,
      reservationtype: this.reservationForm.value.reservationtype,
      firstname: this.reservationForm.value.firstname,
      lastname: this.reservationForm.value.lastname,
      phone: this.reservationForm.value.phone,
      email: this.reservationForm.value.email,
      status: 'Pending'
    }).then((doc) => {
      doc.set({ bookingId: doc.id }, { merge: true }).then(() => {
        console.log('Booking added successfully')
      })
      this.router.navigateByUrl('/booking-details')
      this.reservationForm.reset();
    }).catch(function (error) {
      console.log(error);
    });
  }

  disableData() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("CheckIndate")[0].setAttribute('min', today);
    // console.log(today);
  }
  //   public errorMessages = {
  //   email: [
  //     {type: 'required', message:'Email is required'},
  //     {type: 'pattern', message:'Please enter a valid email address'}
  //   ],

  //   phone: [
  //     {type: 'required', message:'Phone number is required'},
  //     {type: 'pattern', message:'Please enter a valid phone number'}
  //   ]
  // };

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
