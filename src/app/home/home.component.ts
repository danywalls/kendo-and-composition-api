import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import { CompanyDaysOffDirective } from '../directives/company-days-off.directive';
import { ActiveDayDirective } from '../directives/active-day.directive';
import { NoNavigationDirective } from '../directives/no-navigation.directive';
import { CompanyDefaultDirective } from '../directives/company-default.directive';
import { NbaCalendarComponent } from '../components/nba-calendar/nba-calendar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NbaCalendarComponent,
    DateInputsModule,
    CompanyDaysOffDirective,
    ActiveDayDirective,
    NoNavigationDirective,
    CompanyDefaultDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
