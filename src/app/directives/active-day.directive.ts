import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CalendarComponent} from '@progress/kendo-angular-dateinputs';

@Directive({
  standalone: true,
  selector: '[activeDay]'
})
export class ActiveDayDirective implements OnChanges {
  @Input() day = '15/12/2022'

  constructor(private calendar: CalendarComponent) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateDay()
  }

  updateDay() {
    const date = Date.parse(this.day);
    this.calendar.value = new Date(date)
  }
}
