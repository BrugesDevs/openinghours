import {Component} from '@angular/core';
import {OpeningHoursManagementPage} from "../opening-hours-management/opening-hours-management";
import {OpeningHoursPage} from "../opening-hours/opening-hours";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OpeningHoursManagementPage;
  tab2Root = OpeningHoursPage;

  constructor() {

  }
}
