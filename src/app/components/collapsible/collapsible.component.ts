import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {

  @Input()
  buttonText: string = ''

  show: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show
  }

}
