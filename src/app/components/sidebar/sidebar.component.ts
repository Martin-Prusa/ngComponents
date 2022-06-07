import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  stars: number[] = []

  map: Map<number, number> = new Map()

  constructor() { }

  ngOnInit(): void {
    if(this.stars.length === 0) return
    this.stars.forEach(star => {
      if(!this.map.has(star)) this.map.set(star, 0)
      this.map.set(star, this.map.get(star)! + 1)
    })

    const max = [...this.map.values()].sort((i, j) => i -j).reverse()[0]

    this.map.forEach((value, key) => {
      this.map.set(key, value/max * 100)
    })
  }

  getOpposite(num: number) {
    return 100 - num
  }

}
