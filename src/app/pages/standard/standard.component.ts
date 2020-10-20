import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {

  @Output()
  onClick: EventEmitter <boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
