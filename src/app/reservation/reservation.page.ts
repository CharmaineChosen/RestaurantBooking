import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  reservationForm: FormGroup;

  constructor(public nav: NavController,private authService:AuthService,private router:Router,
    private alertCtrl:AlertController,private fb: FormBuilder) { }

  ngOnInit() {
    this.reservationForm=this.fb.group({
      email:  ['',Validators.required],
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      phone: ['',Validators.required],
      guests: ['',Validators.required],
      })
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

  btnClicked(){
    this.nav.navigateRoot('/booking-details')
  }
}
