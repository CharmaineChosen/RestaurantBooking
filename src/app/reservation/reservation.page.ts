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
      // email: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      // phone: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      // guestnumber: ['', Validators.required],
      guestnumber: ['', [Validators.required, Validators.maxLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]+$')]],
      reservationtype: ['', Validators.required]
    })
  }

  isValidInput(fieldName): boolean {
    return this.reservationForm.controls[fieldName].invalid &&
      (this.reservationForm.controls[fieldName].dirty || this.reservationForm.controls[fieldName].touched);
  }

  get phone() {
    return this.reservationForm.get("phone");
  }

  get guestnumber() {
    return this.reservationForm.get("guestnumer");
  }

  get firstname() {
    return this.reservationForm.get("firstname");
  }

  get lastname() {
    return this.reservationForm.get("lastname");
  }

  get email() {
    return this.reservationForm.get("email");
  }

  get date() {
    return this.reservationForm.get("date");
  }

  
  get time() {
    return this.reservationForm.get("time");
  }


  get reservationtype() {
    return this.reservationForm.get("reservationtype");
  }



  public errorMessages = {
    phone: [
      { type: 'required', message: 'phone is required' }
    ],


    guestnumber: [
      { type: 'required', message: 'guests number is required' }
    ],

    firstname:[
      { type: 'required', message: 'firstname is required' }
    ],

    lastname:[
      { type: 'required', message: 'lastname is required' }
    ],

    email:[
      { type: 'required', message: 'email is required' }
    ],

    reservationtype:[
      { type: 'required', message: 'reservation type is required' }
    ]
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

  tableBooking(){
    
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
