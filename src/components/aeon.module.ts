import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular'

/**
 * Import External Module
 */
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

/**
 * Import Directive
 */
import { SquareDirective } from '../directives/square.directive'

/**
 * Export Component Module
 */
import { CategoryThumbnailList } from './category-list/category-thumbnail-list/category-thumbnail-list';
import { BigCardList } from './post-list/big-card-list/big-card-list';
import { CardList } from './post-list/card-list/card-list';
import { GridList } from './post-list/grid-list/grid-list';
import { HeaderSlides } from './post-list/header-slides/header-slides';
import { HeaderAuthor } from './header-author/header-author';
import { HeaderTransparent } from './header-transparent/header-transparent';

@NgModule({
   declarations: [
      SquareDirective,
      CategoryThumbnailList,
      CardList,
      GridList,
      HeaderAuthor,
      HeaderSlides,
      HeaderTransparent
   ],
   imports: [
      IonicModule,
      IonicImageLoader,
      MomentModule
   ],
   exports: [
      CategoryThumbnailList,
      CardList,
      GridList,
      HeaderAuthor,
      HeaderSlides,
      HeaderTransparent
   ]
})
export class AeonModule {}