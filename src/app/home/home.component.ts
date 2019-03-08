import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public menuChange = true;

  listaEjemplos = [{
    menu1: "Interceptors",
    menu2: "NgFor",
    menu3: "--"
  }];

  constructor() { }

  ngOnInit() {
  }

  

}
