import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
public navItems:NavItem[];
  constructor() {
    this.navItems=[
      new NavItem("Home","home"),
      new NavItem("My game","https://github.com/Rut-B/study-materials"),
      new NavItem("Aboout",""),
      //new NavItem("Conca us","image")
    ]
   }

}
export class NavItem{
  
constructor(public text:string, public url: string){
} 
}