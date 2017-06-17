import { Component } from '@angular/core';
import { PostListComponent } from '../post-list.component';

@Component({
    selector: 'big-card-list',
    templateUrl: 'big-card-list.html'
})
export class BigCardList extends PostListComponent {}