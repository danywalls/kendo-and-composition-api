import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import {CompanyDefaultDirective} from '../directives/company-default.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    DateInputsModule,
    CompanyDefaultDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
