import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedFeatureState } from './feed.reducers';

/**
 * Selector for the feed feature state.
 */
export const selectFeedState = createFeatureSelector<FeedFeatureState>('feed');

/**
 * Selector for the posts list.
 */
export const selectPosts = createSelector(
  selectFeedState,
  (state: FeedFeatureState) => state.posts
);

/**
 * Selector for the pagination metadata.
 */
export const selectPagination = createSelector(
  selectFeedState,
  (state: FeedFeatureState) => state.pagination
);

/**
 * Selector for the current page.
 */
export const selectCurrentPage = createSelector(
  selectFeedState,
  (state: FeedFeatureState) => state.currentPage
);

/**
 * Selector for the search query.
 */
export const selectSearch = createSelector(
  selectFeedState,
  (state: FeedFeatureState) => state.search
);

/**
 * Selector for the UI status.
 */
export const selectUiStatus = createSelector(
  selectFeedState,
  (state: FeedFeatureState) => state.uiStatus
);

/**
 * Selector for the error state.
 */
export const selectError = createSelector(
  selectFeedState,
  (state: FeedFeatureState) => state.error
);
