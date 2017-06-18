import { Component } from '@angular/core';
import { SquareDirective } from '../directive/square.directive';
import { CategoryListComponent } from '../category-list.component';

@Component({
   selector: 'category-thumbnail-list',
   templateUrl: 'category-thumbnail-list.html'
})
export class CategoryThumbnailList extends CategoryListComponent {}