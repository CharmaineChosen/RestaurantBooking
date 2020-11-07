import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dinehome',
  templateUrl: './dinehome.page.html',
  styleUrls: ['./dinehome.page.scss'],
})
export class DinehomePage implements OnInit {

  constructor(private menu: MenuController ,private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }

    openCustom(){
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }

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
