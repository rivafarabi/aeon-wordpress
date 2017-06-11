import { Component } from '@angular/core';
import { PostListComponent } from '../post-list.component';

@Component({
   selector: 'random-list',
   templateUrl: 'random-list.html'
})
export class RandomListComponent extends PostListComponent {}