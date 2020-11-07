import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


@Component({
  selector: 'app-daily-dishes',
  templateUrl: './daily-dishes.page.html',
  styleUrls: ['./daily-dishes.page.scss'],
})
export class DailyDishesPage implements OnInit {

  
  ownerId: any;
  menu: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit() {
    var user = firebase.auth().currentUser.uid;

    // fecthing menus from firebase database
    firebase.firestore().collection('restaurants').doc(user).collection('menu').where('ownerId', '==' , user).onSnapshot(res => {
      res.forEach(element => {
        this.menu.push(element.data());
      });
    });
  }

  addMenus(){
    this.router.navigate(['/add-menu'])
  }
}
