import {Directive} from '@angular/core';
import {ActiveDayDirective} from './active-day.directive';
import {CompanyDaysOffDirective} from './company-days-off.directive';
import {NoNavigationDirective} from './no-navigation.directive';

@Directive({
  selector: '[companyDefault]',
  standalone: true,
  hostDirectives: [
    NoNavigationDirective,
    CompanyDaysOffDirective,
    {
      directive: ActiveDayDirective,
      inputs: ['day: startDate']
    }
  ]
})
export class CompanyDefaultDirective {


}
