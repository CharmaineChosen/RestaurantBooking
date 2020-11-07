import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-restaurants',
  templateUrl: './explore-restaurants.page.html',
  styleUrls: ['./explore-restaurants.page.scss'],
})
export class ExploreRestaurantsPage implements OnInit {
  jsonData:any=[];

  constructor()
   { 
    this.initializaJSONData();
   }

   FilterJSONData(ev:any)
   {
    this.initializaJSONData();
    const val = ev.target.value;
    if(val && val.trim() != '')
    {
      this.jsonData = this.jsonData.filter((item)=>{
        return(item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }

   }

   selectVal(val)
   {
     alert("you have selected = "+val);
   }


  ngOnInit() {
  }

  initializaJSONData()
  {
    this.jsonData = [
      {
        "name": "Mcdonalds",
        "code": "MC"
      },

      {
        "name": "Mythos",
        "code": "MT"
      },

      {
        "name": "Galitos",
        "code": "GA"
      },

      {
        "name": "Boston",
        "code": "BO"
      },

      {
        "name": "Billyg",
        "code": "BG"
      },

      {
        "name": "KOI",
        "code": "KO"
      },

      {
        "name": "Rocomamas",
        "code": "RO"
      },

      {
        "name": "Hussar",
        "code": "HU"
      },

      {
        "name": "Thava",
        "code": "TH"
      },

      {
        "name": "Sakhumzi",
        "code": "SA"
      }];
  }

}
