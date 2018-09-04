import { NgModule, ModuleWithProviders } from '@angular/core';
import {AppModule} from "./app/app.module";

@NgModule({
  imports: [
  ],
  declarations: [
    // declare all components that your module uses
    AppModule
  ],
  exports: [
    // export the component(s) that you want others to be able to use
    AppModule
  ]
})
export class OpeninghoursModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OpeninghoursModule,
      providers: []
    };
  }
}
