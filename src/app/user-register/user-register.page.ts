import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {

  userForm: FormGroup;


  constructor(private authService: AuthService, private router: Router,
    private alertCtrl: AlertController, private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  async btnClicked(){
    this.authService.signUpUser(this.userForm.value.email, this.userForm.value.password).then((res) => {
      return firebase.firestore().collection('users').doc(res.user.uid).set({
        firstname: this.userForm.value.firstname,
        lastname: this.userForm.value.lastname,
        // email: this.userForm.value.email
      }).then(() => {
        console.log(res.user);
        this.router.navigateByUrl('/user-login');
      }).catch(function(error){
        console.log(error);
      })
    })
  }

  // async btnClicked(): Promise<void> {
  //   this.authService.signUp(this.userForm.value.email, this.userForm.value.password).
  //     then(
  //       (snap) => {
  //         return firebase.firestore().collection('users').doc(snap.user.uid).set({
  //           firstname: this.userForm.value.firstname,
  //           lastname: this.userForm.value.lastname,
  //           email: this.userForm.value.email,
  //         }).then(() => {
  //           console.log(snap.user);
  //           this.router.navigateByUrl('/userlogin');
  //         })


  //       },

  //       async error => {
  //         const alert = await this.alertCtrl.create({
  //           message: error.message,
  //           buttons: [{ text: 'ok', role: 'cancel' }],
  //         });
  //         await alert.present();
  //       }
  //     );

  // }
}
