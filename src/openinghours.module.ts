import {ModuleWithProviders, NgModule} from '@angular/core';
import {OpeningHoursManagementPage} from "./pages/opening-hours-management/opening-hours-management";
import {OpeningHoursFacade} from "./pages/facade/opening-hours.facade";
import {OpeningHoursPage} from "./pages/opening-hours/opening-hours";

@NgModule({
  imports: [
  ],
  declarations: [
    // declare all components that your module uses
    OpeningHoursPage,
    OpeningHoursManagementPage
  ],
  exports: [
    // export the component(s) that you want others to be able to use
    OpeningHoursPage,
    OpeningHoursManagementPage
  ]
})
export class OpeninghoursModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OpeninghoursModule,
      providers: [OpeningHoursFacade]
    };
  }
}
