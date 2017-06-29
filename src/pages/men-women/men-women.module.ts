import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenWomenPage } from './men-women';

@NgModule({
  declarations: [
    MenWomenPage,
  ],
  imports: [
    IonicPageModule.forChild(MenWomenPage),
  ],
  exports: [
    MenWomenPage
  ]
})
export class MenWomenPageModule {}
