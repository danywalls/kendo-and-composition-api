import {Directive} from '@angular/core';
import {CalendarComponent} from '@progress/kendo-angular-dateinputs';

@Directive({
  standalone: true,
  selector: '[noNavigation]'
})
export class NoNavigationDirective {


  constructor(private calendar: CalendarComponent) {
    this.calendar.navigation = false;
  }

}
