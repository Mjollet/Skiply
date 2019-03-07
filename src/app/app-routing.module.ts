import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'campaign', loadChildren: './views/campaign/campaign.module#CampaignModule' },
  { path: 'home', loadChildren: './views/home/home.module#HomeModule' },
  { path: 'result', loadChildren: './views/result/result.module#ResultModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
