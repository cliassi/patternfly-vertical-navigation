import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastNotificationModule, ApplicationLauncherModule, VerticalNavigationModule } from "patternfly-ng";

import { BsDropdownConfig, BsDropdownModule } from "ngx-bootstrap/dropdown";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastNotificationModule,
    ApplicationLauncherModule,
    VerticalNavigationModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    ToastNotificationModule,
    ApplicationLauncherModule,
    VerticalNavigationModule
  ]
})
export class PatternflyModule {}
