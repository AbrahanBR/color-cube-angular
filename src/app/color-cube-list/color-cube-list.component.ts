import { Component, OnInit } from '@angular/core';
import { ColorCubeService } from '../color-cube/color-cube.service';
import { Color } from '../color-cube/color-cube.interface';

@Component({
  selector: 'app-color-cube-list',
  templateUrl: './color-cube-list.component.html',
  styleUrls: ['./color-cube-list.component.scss']
})
export class ColorCubeListComponent implements OnInit {
  public colors: Color[];
  public filteredColors: Color[];

  constructor(private colorCubeService: ColorCubeService) {}

  ngOnInit() {
    this.colorCubeService.getColors().subscribe(
      colors => {
        this.colors = colors;
      },
      err => {
        this.colors = [];
        console.error(err);
      }
    );
  }

  onFilteredColors(colors: Color[]) {
    this.filteredColors = colors;
  }
}
