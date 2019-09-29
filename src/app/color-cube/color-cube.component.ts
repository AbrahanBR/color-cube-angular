import { Component, OnInit, Input } from '@angular/core';
import { Color } from './color-cube.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-cube',
  templateUrl: './color-cube.component.html',
  styleUrls: ['./color-cube.component.scss']
})
export class ColorCubeComponent implements OnInit {
  @Input() color: Color;

  constructor(private router: Router) {}

  ngOnInit() {}

  editColor(id: number) {
    this.router.navigate(['/colors', id]);
  }
}
