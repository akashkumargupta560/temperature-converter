import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'temperature-converter';
  cel!:number;
  fah!:number
  constructor(){}
  ngOnInit():void{}
  celsiusConverter(_event:any){
    const celNum = ((Number(this.fah) -32) * (5 / 9));
    this.cel = celNum;
    console.log("hello"+celNum)
  }
  fahrenheitConverter(_event:any){
    const fahNum = ((Number(this.cel) * (5 /9) + 32 ));
    this.fah = fahNum;
    console.log("hello"+fahNum)
  }
}
