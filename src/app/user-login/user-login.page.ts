import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  userloginForm: FormGroup;


  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController,private fb: FormBuilder) { }


  ngOnInit() {
    this.userloginForm=this.fb.group({
      email:  ['',Validators.required],
      password: ['',Validators.required]
      })
  }

  async btnClicked():Promise<void>{
    this.authService.loginUser(this.userloginForm.value.email, this.userloginForm.value.password).
    then(
      ()=>{
        this.router.navigateByUrl('dinehome');
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

}
