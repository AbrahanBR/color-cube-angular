import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: '<div>app-dialog Mock</div>'
})
export class DialogTesingComponent {
  @Input() show: boolean;
}
