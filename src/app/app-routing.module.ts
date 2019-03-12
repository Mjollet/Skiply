import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './views/home/home.module#HomeModule' },

  { path: 'home', loadChildren: './views/home/home.module#HomeModule' },

  { path: 'campaign', loadChildren: './views/campaign/campaign.module#CampaignModule' },

  { path: 'result', loadChildren: './views/result/result.module#ResultModule' },

  { path: 'battery', loadChildren: './views/battery/battery.module#BatteryModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
