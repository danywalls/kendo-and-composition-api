import {Directive, Input} from '@angular/core';
import {CalendarComponent} from '@progress/kendo-angular-dateinputs';
import {Day} from '@progress/kendo-date-math';

@Directive({
  standalone: true,
  selector: '[companyDaysOff]'
})
export class CompanyDaysOffDirective {
  @Input() name = "hola"
  blockedDays: Day[] = [Day.Friday, Day.Saturday, Day.Sunday];

  constructor(private calendar: CalendarComponent) {
    this.calendar.disabledDates = this.blockedDays;
  }

}
