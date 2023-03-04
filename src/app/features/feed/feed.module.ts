import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { StoreModule } from '@ngrx/store';
import { feedFeature } from './store/feed.reducers';
import { FeedEffects } from './store/feed.effects';
import { EffectsModule } from '@ngrx/effects';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedPaginationComponent } from './components/feed-pagination/feed-pagination.component';
import { SharedModule } from '../../shared/shared.module';
import { FeedSearchComponent } from './components/feed-search/feed-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FeedComponent,
    FeedListComponent,
    FeedPaginationComponent,
    FeedSearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FeedRoutingModule,
    StoreModule.forFeature(feedFeature),
    EffectsModule.forFeature([FeedEffects]),
  ],
})
export class FeedModule {}
