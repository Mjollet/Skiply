import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatteryComponent } from './battery/battery.component';

const routes: Routes = [
  { path: '', component: BatteryComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatteryRoutingModule { }
