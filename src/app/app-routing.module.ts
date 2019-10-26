import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LauncherTestComponent } from './temp/launcher-test/launcher-test.component';
import { VerticalNavTestComponent } from './temp/vertical-nav-test/vertical-nav-test.component';


const routes: Routes = [
  {
    path: "",
    component: LauncherTestComponent
  },
  {
    path: "nav",
    component: VerticalNavTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
