import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'temperature-converter';
  cel!:number |undefined;
  fah!:number |undefined;
  kel!:number |undefined;
  constructor(){}
  ngOnInit():void{}
  celsiusConverter(){
    //formula of celsius (°C) * 9/5) + 32.
    if(this.cel !=null){
      this.fah = ((this.cel*9)/5)+32;
      this.fah = Math.round(this.fah*100)/100;
      this.kel=Math.round((273.15+this.cel)*100)/100;
    }else{
      this.fah= undefined;
      this.kel = undefined;
    }
  }
  fahrenheitConverter(){
    if(this.fah !=null){
      this.cel = ((this.fah-32)*5)/9;
      this.cel = Math.round(this.cel*100)/100;
      this.kel=Math.round((273.15+this.cel)*100)/100;
    }else{
      this.cel= undefined;
      this.kel = undefined;
    }
  }
  kelvinConverter(){
    if(this.kel!=null){
     this.cel =(this.kel-273.15);
     this.cel =Math.round(this.cel*100)/100;
     this.fah =((this.cel*9)/5)+32;
     this.fah =Math.round(this.fah*100)/100;
    }else{
      this.cel= undefined;
      this.fah= undefined;                                                          
    }
  }
}
