import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { NbaCalendarComponent } from './components/nba-calendar/nba-calendar.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    HomeComponent,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
