import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-list-item',
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.scss']
})
export class HomeListItemComponent implements OnInit {

  @Input() itemSelecion : string;

  constructor() { }

  ngOnInit() {
  }

}
