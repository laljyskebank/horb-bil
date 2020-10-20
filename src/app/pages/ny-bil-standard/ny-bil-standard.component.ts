import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ny-bil-standard',
  templateUrl: './ny-bil-standard.component.html',
  styleUrls: ['./ny-bil-standard.component.scss']
})
export class NyBilStandardComponent implements OnInit {

  @Output()
  onClick: EventEmitter <boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
