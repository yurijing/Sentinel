import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'flow/:app/:service/:service_id', loadChildren: () => import('./pages/flow/flow.module').then(m => m.FlowModule) },
  { path: 'identity/:app/:service/:service_id', loadChildren: () => import('./pages/identity/identity.module').then(m => m.IdentityModule) },
  { path: 'metric/:app/:service/:service_id', loadChildren: () => import('./pages/metric/metric.module').then(m => m.MetricModule) },
  { path: 'degrade/:app/:service/:service_id', loadChildren: () => import('./pages/degrade/degrade.module').then(m => m.DegradeModule) },
  { path: 'system/:app/:service/:service_id', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
