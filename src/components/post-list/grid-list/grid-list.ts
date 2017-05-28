import { Component } from '@angular/core';
import { SquareDirective } from '../directive/square.directive';
import { PostListComponent } from '../post-list.component';

@Component({
   selector: 'grid-list',
   templateUrl: 'grid-list.html'
})
export class GridListComponent extends PostListComponent {}