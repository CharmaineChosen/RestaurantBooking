import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.page.html',
  styleUrls: ['./add-restaurants.page.scss'],
})
export class AddRestaurantsPage implements OnInit {

  restaurantForm: FormGroup;

  ownerId: any;

  selectedFile: File = null;
  upload: any;



  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerRestaurant();
  }

  registerRestaurant() {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      regnumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
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
      this.restaurantForm.get('img').setValue(this.upload);
    };
  }

  btnClicked() {
    var user = firebase.auth().currentUser;

    this.ownerId = user.uid;

    // adding new restaurants and set to their unique id
    firebase.firestore().collection('restaurants').add({
      ownerId: this.ownerId,
      name: this.restaurantForm.value.name,
      regnumber: this.restaurantForm.value.regnumber,
      email: this.restaurantForm.value.email,
      address: this.restaurantForm.value.address,
      telephone: this.restaurantForm.value.telephone,
      img: this.restaurantForm.value.img
    }).then((doc) => {
      doc.set({ restId: doc.id }, { merge: true }).then(() => {
        console.log('Restaurant added successfully')
      })
      this.router.navigateByUrl('/profile')
      this.restaurantForm.reset();
    }).catch(function (error) {
      console.log(error);
    });

  }
}
