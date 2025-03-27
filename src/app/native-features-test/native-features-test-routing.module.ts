import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NativeFeaturesTestPage } from './native-features-test.page';

const routes: Routes = [
  {
    path: '',
    component: NativeFeaturesTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NativeFeaturesTestPageRoutingModule {}
