import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgs',
  templateUrl: './imgs.component.html',
  styleUrls: ['./imgs.component.scss']
})
export class ImgsComponent implements OnInit {
public images:  string[];
public index: number;
public urlImage:string;

constructor() {
this.index = 0;
this.images = [
 " assets/1.jpg",
 " assets/2.jpg",
 " assets/3.jpg",
 " assets/4.jpg",
 " assets/5.jpg",
 " assets/6.jpg",
 " assets/7.jpg",
 " assets/8.jpg",
];
this.urlImage=this.image;
setInterval(() => {
  this.urlImage=this.image;
},10000)

  }
public get image():string{
  this.index++;
  this.index %= this.images.length;
  return this.images[this.index];
}
   

  ngOnInit() {
  }

}
