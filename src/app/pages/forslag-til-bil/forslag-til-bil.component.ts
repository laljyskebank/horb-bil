import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forslag-til-bil',
  templateUrl: './forslag-til-bil.component.html',
  styleUrls: ['./forslag-til-bil.component.scss']
})
export class ForslagTilBilComponent implements OnInit {

  @Output()
  onClick: EventEmitter <boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
