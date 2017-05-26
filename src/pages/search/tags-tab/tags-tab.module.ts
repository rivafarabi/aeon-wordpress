import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagsTabPage } from './tags-tab';

@NgModule({
   declarations: [TagsTabPage],
   imports: [IonicPageModule.forChild(TagsTabPage)]
})
export class TagsTabPageModule { }