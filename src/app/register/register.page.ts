import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  // btnClicked(){
  //   alert('you have successfully registered!')
  // }

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.fb.group({
      name: ['', Validators.required],
     // regnumber: ['',Validators.required],
      email:  ['',Validators.required],
     // address: ['',Validators.required],
      telephone: ['',Validators.required],
      password: ['',Validators.required]

    })
  }



 
  async btnClicked():Promise<void>{
    this.authService.signUpUser(this.registerForm.value.email, this.registerForm.value.password).
    then(
      (res)=>{
        return firebase.firestore().collection('owners').doc(res.user.uid).set({
          name: this.registerForm.value.name,
          telephone: this.registerForm.value.telephone
        }).then(()=> {
          console.log(res.user);
          this.router.navigateByUrl('login'); 
        })

        
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role:'cancel'}],
        });
        await alert.present();
      }
    );
  }

  test(){

  }
}
