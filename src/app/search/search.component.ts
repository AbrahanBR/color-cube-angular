import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '../color-cube/color-cube.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() listColors: Color[];
  @Output() filteredColors: EventEmitter<Color[]> = new EventEmitter<Color[]>();

  public filterColor(listColor: Color[], colorName: string) {
    if (!colorName) {
      this.filteredColors.emit(null);
      return;
    }
    const colors = this.listColors.filter(color => {
      const name = color.name.toLowerCase();
      return name.includes(colorName.toLowerCase());
    });

    this.filteredColors.emit(colors);
  }
}
