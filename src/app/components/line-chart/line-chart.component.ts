import {Component, Input, OnInit} from '@angular/core';
import {Coordinates} from "../../models/coordinates";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input()
  coordinates: Coordinates[] = [new Coordinates(0,0), new Coordinates(150, 50), new Coordinates(50, 25)]

  constructor() { }

  ngOnInit(): void {
    let sortedX = this.coordinates.sort((i, j) => i.x - j.x)
    let sortedY = this.coordinates.sort((i, j) => i.y - j.y)
    const minY = sortedY[0].y
    const maxY = sortedY.reverse()[0].y
    const minX = sortedX[0].x
    const maxX = sortedX.reverse()[0].x
    console.log(this.coordinates)
    this.coordinates = this.coordinates.map(i => new Coordinates(300 - this.scale(i.x, minX, maxX, 0, 300), 100 - this.scale(i.y, minY, maxY, 0, 100)))
    console.log(this.coordinates)
  }

  getCoordinatesString() {
    return this.coordinates.map(i => i.x+","+i.y).join(" ")
  }

  scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

}
