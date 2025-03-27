import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flight-list',
    pathMatch: 'full',
  },
  {
    path: 'flight-list',
    loadChildren: () =>
      import('./flight-list/flight-list.module').then(
        (m) => m.FlightListPageModule
      ),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./flight/flight.module').then((m) => m.FlightPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightAppRoutingModule {}
