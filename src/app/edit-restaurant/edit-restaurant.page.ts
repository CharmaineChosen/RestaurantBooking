import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.page.html',
  styleUrls: ['./edit-restaurant.page.scss'],
})
export class EditRestaurantPage implements OnInit {

  editRestaurantForm: FormGroup;

  id: any;
  ownerId: any;
  restaurants: any;

  selectedFile: File = null;
  upload: any;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('ID: ', this.id)
    // fetching single restaurant by it's id and set the values
    firebase.firestore().collection('restaurants').doc(this.id).get().then(snapshot => {
      this.restaurants = snapshot.data();
      console.log('New Document Data: ', this.restaurants)
      this.editRestaurantForm.controls['name'].setValue(this.restaurants.name),
        this.editRestaurantForm.controls['telephone'].setValue(this.restaurants.telephone),
        this.editRestaurantForm.controls['email'].setValue(this.restaurants.email),
        this.editRestaurantForm.controls['regnumber'].setValue(this.restaurants.regnumber),
        this.editRestaurantForm.controls['img'].setValue(this.restaurants.img),
        this.editRestaurantForm.controls['address'].setValue(this.restaurants.address)
    });
    this.editRestaurant();
  }

  editRestaurant() {
    this.editRestaurantForm = this.fb.group({
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
      this.editRestaurantForm.get('img').setValue(this.upload);
    };
  }

  btnClicked() {
    var user = firebase.auth().currentUser;

    this.ownerId = user.uid;

    // adding new restaurants and set to their unique id
    firebase.firestore().collection('restaurants').doc(this.id).update({
      // ownerId: this.ownerId,
      name: this.editRestaurantForm.value.name,
      regnumber: this.editRestaurantForm.value.regnumber,
      email: this.editRestaurantForm.value.email,
      address: this.editRestaurantForm.value.address,
      telephone: this.editRestaurantForm.value.telephone,
      img: this.editRestaurantForm.value.img
    }).then(() => {
      this.router.navigateByUrl('/profile')
      this.editRestaurantForm.reset();
    }).catch(function (error) {
      console.log(error);
    });

  }

}
