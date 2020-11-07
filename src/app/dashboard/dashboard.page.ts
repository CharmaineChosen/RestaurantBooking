import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private menu: MenuController ,private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async logOut():Promise<void>{
    this.authService.logOutUser().
    then(
      ()=>{
        this.router.navigateByUrl('home');
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
