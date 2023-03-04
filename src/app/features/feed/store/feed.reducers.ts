import { createFeature, createReducer, on } from '@ngrx/store';
import { FeedUiStatus } from 'src/app/models/constants';
import { PaginationLinks, Post } from 'src/app/models/post.types';
import {
  loadFeedAction,
  loadFeedSuccessAction,
  loadFeedFailureAction,
  updateSearchAction,
  clearSearchAction,
  nextPageAction,
  previousPageAction,
  deletePostAction,
  deletePostSuccessAction,
  deletePostFailureAction,
} from './feed.actions';

/**
 * The state for the feed feature.
 */
export interface FeedFeatureState {
  posts: Post[];
  pagination: PaginationLinks;
  currentPage: number;
  search: string;
  uiStatus: FeedUiStatus;
  error: any;
}

/**
 * The initial state for the feed feature.
 * @type {FeedFeatureState}
 */
export const initialState: FeedFeatureState = {
  posts: [],
  pagination: {
    first: {
      page: 1,
      limit: 0,
    },
    prev: null,
    next: {
      page: 2,
      limit: 0,
    },
    last: {
      page: 10,
      limit: 0,
    },
  },
  currentPage: 1,
  search: '',
  uiStatus: FeedUiStatus.IS_LOADING,
  error: null,
};

/**
 * Reducer for the feed feature state.
 * @param state The current state.
 * @param action The action to reduce.
 * @returns The new state.
 * @type {Reducer<FeedFeatureState>}
 */
export const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(
      loadFeedAction,
      (state, { options }): FeedFeatureState => ({
        ...state,
        search: options.query || state.search,
        currentPage: options.page || state.currentPage,
        uiStatus: FeedUiStatus.IS_LOADING,
        error: null,
      })
    ),
    on(
      loadFeedSuccessAction,
      (state, { response }): FeedFeatureState => ({
        ...state,
        posts: response.data,
        pagination: {
          // If the response doesn't have links, we set the last page to 0
          // so that the pagination component doesn't show any pages.
          ...(response.links || {
            last: {
              page: 1,
            },
          }),
        },
        search: state.search,
        currentPage: response.links ? state.currentPage : 1,
        uiStatus: response.data.length
          ? FeedUiStatus.IS_LOADED
          : FeedUiStatus.NO_RESULTS,
        error: null,
      })
    ),
    on(
      loadFeedFailureAction,
      (state, { error }): FeedFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.HAS_ERROR,
        error: error,
      })
    ),
    on(
      updateSearchAction,
      (state, { search }): FeedFeatureState => ({
        ...state,
        currentPage: 1,
        uiStatus: FeedUiStatus.IS_LOADING,
        search,
      })
    ),
    on(
      clearSearchAction,
      (state): FeedFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.IS_LOADING,
        search: '',
      })
    ),
    on(
      nextPageAction,
      (state): FeedFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.IS_LOADING,
        currentPage: state.currentPage + 1,
      })
    ),
    on(
      previousPageAction,
      (state): FeedFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.IS_LOADING,
        currentPage: state.currentPage - 1,
      })
    ),
    on(
      deletePostAction,
      (state): FeedFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.IS_LOADING,
      })
    ),
    on(
      deletePostSuccessAction,
      (state, { id }): FeedFeatureState => ({
        ...state,
        posts: state.posts.filter(post => post.id !== id),
        uiStatus: FeedUiStatus.IS_LOADED,
      })
    ),
    on(
      deletePostFailureAction,
      (state, { error }): FeedFeatureState => ({
        ...state,
        uiStatus: FeedUiStatus.HAS_ERROR,
        error,
      })
    )
  ),
});
