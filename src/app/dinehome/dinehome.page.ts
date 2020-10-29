import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dinehome',
  templateUrl: './dinehome.page.html',
  styleUrls: ['./dinehome.page.scss'],
})
export class DinehomePage implements OnInit {

  constructor(private menu: MenuController) { }

  

    openCustom(){
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }

  ngOnInit() {
  }

}
