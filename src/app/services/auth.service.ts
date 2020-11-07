import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
//require('firebase/auth');


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }


  signUpUser(
    email: string,
    password: string
  ): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

    

  // Add restaurant
  registerRestaurant() {
        return firebase.firestore().collection('restaurants');
      }

    addMenu(){
      return firebase.firestore().collection('menu');
    }
    

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }


  logOutUser(): Promise<void> {
    return firebase.auth().signOut();
  }
}


