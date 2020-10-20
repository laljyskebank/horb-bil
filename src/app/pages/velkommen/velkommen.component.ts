import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-velkommen',
  templateUrl: './velkommen.component.html',
  styleUrls: ['./velkommen.component.scss'],
})
export class VelkommenComponent implements OnInit {

  @Output()
  onClick: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
