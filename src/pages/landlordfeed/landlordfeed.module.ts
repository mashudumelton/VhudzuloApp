import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandlordfeedPage } from './landlordfeed';

@NgModule({
  declarations: [
    LandlordfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(LandlordfeedPage),
  ],
})
export class LandlordfeedPageModule {}
