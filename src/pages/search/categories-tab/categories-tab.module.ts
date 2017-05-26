import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesTabPage } from './categories-tab';

@NgModule({
   declarations: [CategoriesTabPage],
   imports: [IonicPageModule.forChild(CategoriesTabPage)]
})
export class CategoriesTabPageModule { }