import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ComicsService } from './services/comics.service';


@NgModule({
  providers: [
    ComicsService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}