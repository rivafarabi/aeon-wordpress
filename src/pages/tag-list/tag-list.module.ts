import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagListPage } from './tag-list';

@NgModule({
   declarations: [TagListPage],
   imports: [IonicPageModule.forChild(TagListPage)]
})
export class TagListPageModule { }