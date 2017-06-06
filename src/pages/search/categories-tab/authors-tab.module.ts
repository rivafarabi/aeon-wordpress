import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorsTabPage } from './authors-tab';

@NgModule({
   declarations: [AuthorsTabPage],
   imports: [IonicPageModule.forChild(AuthorsTabPage)]
})
export class AuthorsTabPageModule { }