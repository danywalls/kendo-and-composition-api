import { Component } from '@angular/core';
import { CalendarCommonModule, CalendarComponent, DateInputsModule } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-nba-calendar',
  templateUrl: './nba-calendar.component.html',
  styleUrls: ['./nba-calendar.component.css'],
  imports: [DateInputsModule],
  standalone: true
})
export class NbaCalendarComponent {

}
