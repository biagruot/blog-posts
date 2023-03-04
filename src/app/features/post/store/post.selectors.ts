import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostFeatureState } from './post.reducers';

/**
 * Selector for the post feature state.
 */
export const selectPostState = createFeatureSelector<PostFeatureState>('post');

export const selectId = createSelector(
  selectPostState,
  (state: PostFeatureState) => state.id
);

export const selectBody = createSelector(
  selectPostState,
  (state: PostFeatureState) => state.body
);

export const selectTitle = createSelector(
  selectPostState,
  (state: PostFeatureState) => state.title
);

export const selectUiStatus = createSelector(
  selectPostState,
  (state: PostFeatureState) => state.uiStatus
);

export const selectError = createSelector(
  selectPostState,
  (state: PostFeatureState) => state.error
);
