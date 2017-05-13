import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryListPage } from './category-list';

@NgModule({
   declarations: [CategoryListPage],
   imports: [IonicPageModule.forChild(CategoryListPage)]
})
export class CategoryListPageModule { }