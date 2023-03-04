import { createFeature, createReducer, on } from '@ngrx/store';
import { FeedUiStatus } from 'src/app/models/constants';
import {
  createPostAction,
  createPostFailureAction,
  createPostSuccessAction,
} from './post.actions';

/**
 * The state for the post feature.
 */
export interface PostFeatureState {
  id: string;
  body: string;
  title: string;
  uiStatus: FeedUiStatus;
  error: any;
}

/**
 * The initial state for the post feature.
 * @type {PostFeatureState}
 */
export const initialState: PostFeatureState = {
  id: '',
  body: '',
  title: '',
  uiStatus: FeedUiStatus.IS_LOADED,
  error: null,
};

/**
 * Reducer for the post feature state.
 * @param state The current state.
 * @param action The action to reduce.
 * @returns The new state.
 * @type {Reducer<PostFeatureState>}
 */
export const postFeature = createFeature({
  name: 'post',
  reducer: createReducer(
    initialState,
    on(
      createPostAction,
      (state, action): PostFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.IS_LOADING,
        error: null,
      })
    ),
    on(
      createPostSuccessAction,
      (state): PostFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.IS_LOADED,
        error: null,
      })
    ),
    on(
      createPostFailureAction,
      (state, action): PostFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.HAS_ERROR,
        error: action.error,
      })
    )
  ),
});
