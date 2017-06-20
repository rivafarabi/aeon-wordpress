import { Component } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { PostListComponent } from '../post-list.component';
import { ViewportModule } from 'angular2-viewport';

@Component({
    selector: 'card-list',
    templateUrl: 'card-list.html'
})
export class CardList extends PostListComponent {
}