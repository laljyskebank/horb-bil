import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tilfoej-bil',
  templateUrl: './tilfoej-bil.component.html',
  styleUrls: ['./tilfoej-bil.component.scss']
})
export class TilfoejBilComponent implements OnInit {

  @Output()
  onClick: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
