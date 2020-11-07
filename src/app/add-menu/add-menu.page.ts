import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {

  menuForm: FormGroup;

  ownerId: any;

  selectedFile: File = null;
  upload: any;


  constructor(private fb: FormBuilder,private authService: AuthService,private router: Router
  ) { }

  ngOnInit() {
    this.addMenu();
  }

  addMenu(){
    this.menuForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      img: ['', Validators.required],
     

    })
  }

  onselected(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = (p) => {
      console.log(p);
    };
    reader.onloadend = (e) => {
      console.log(e.target);
      this.upload = reader.result;
      this.menuForm.get('img').setValue(this.upload);
    };
  }

  btnClicked(){
    var user = firebase.auth().currentUser;

    this.ownerId = user.uid;

    // adding menus to firebase dataabse
    firebase.firestore().collection('restaurants').doc(this.ownerId).collection('menu').add({
      ownerId: this.ownerId,
      name: this.menuForm.value.name,
      price: this.menuForm.value.price,
      img: this.menuForm.value.img
    }).then(function(docRef){
      console.log("Document menu Data: ", docRef)
    }).catch(function(error){
      console.log(error)
    });
    this.router.navigateByUrl('daily-dishes')
    this.menuForm.reset();
   
  }

}
