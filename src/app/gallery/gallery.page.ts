import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit{

  galleryType = 'pinterest';

  constructor(public navCtrl: NavController) {}
  

  ngOnInit(){

  }

}
