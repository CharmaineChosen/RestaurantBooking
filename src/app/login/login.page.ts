import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController,private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
    email:  ['',Validators.required],
    password: ['',Validators.required]
    })
    
  }

  async btnClicked():Promise<void>{
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).
    then(
      ()=>{
        this.router.navigateByUrl('dashboard');
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

  goToReset(){
    this.router.navigateByUrl('password-reset');
  }

  goToRegister(){
    this.router.navigateByUrl('register');
  }

}
