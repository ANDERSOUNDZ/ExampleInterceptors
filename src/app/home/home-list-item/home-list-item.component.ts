import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-list-item',
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.scss']
})
export class HomeListItemComponent implements OnInit {

  @Input() itemSelecion : string;

  @Output() outSelecion = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  outItem(){
    this.outSelecion.emit(this.itemSelecion);
  }

}
