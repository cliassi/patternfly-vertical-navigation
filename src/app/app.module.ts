import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatternflyModule } from './shared/patternfly.module';
import { LauncherTestComponent } from './temp/launcher-test/launcher-test.component';
import { BsDropdownConfig, BsDropdownModule, TabsModule } from "ngx-bootstrap";
import { VerticalNavTestComponent } from './temp/vertical-nav-test/vertical-nav-test.component';

@NgModule({
  declarations: [AppComponent, LauncherTestComponent, VerticalNavTestComponent],
  imports: [BrowserModule, FormsModule, PatternflyModule,BsDropdownModule.forRoot(), TabsModule.forRoot(),AppRoutingModule],
  providers: [BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule {}
