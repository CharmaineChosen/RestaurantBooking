import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  btnClicked(){
    alert('you have successfully registered!')
  }

  constructor() { }

  ngOnInit() {
  }

}
