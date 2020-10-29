import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage implements OnInit {

 
  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  btnClicked(){
    this.nav.navigateRoot('/register')
  }

}
