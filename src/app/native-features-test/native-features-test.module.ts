import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativeFeaturesTestPageRoutingModule } from './native-features-test-routing.module';

import { NativeFeaturesTestPage } from './native-features-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NativeFeaturesTestPageRoutingModule
  ],
  declarations: [NativeFeaturesTestPage]
})
export class NativeFeaturesTestPageModule {}
