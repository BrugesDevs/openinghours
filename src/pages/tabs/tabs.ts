import {Component} from '@angular/core';
import {HomePage} from "../opening-hour-management/opening-hour-management";
import {OpeningHoursPage} from "../opening-hours/opening-hours";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OpeningHoursPage;

  constructor() {

  }
}
