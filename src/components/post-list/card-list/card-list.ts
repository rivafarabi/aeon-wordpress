import { Component } from '@angular/core';
import { PostListComponent } from '../post-list.component';

@Component({
    selector: 'card-list',
    templateUrl: 'card-list.html'
})
export class CardListComponent extends PostListComponent {
}