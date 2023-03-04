import { createAction, props } from '@ngrx/store';
import { GetPostsOptions, PostsPage } from 'src/app/models/post.types';

enum FeedActionTypes {
  LoadFeed = '[Feed] Load Feed',
  LoadFeedSuccess = '[Feed] Load Feed Success',
  LoadFeedFailure = '[Feed] Load Feed Failure',
  CreatePost = '[Feed] Create Post',
  CreatePostSuccess = '[Feed] Create Post Success',
  CreatePostFailure = '[Feed] Create Post Failure',
  DeletePost = '[Feed] Delete Post',
  DeletePostSuccess = '[Feed] Delete Post Success',
  DeletePostFailure = '[Feed] Delete Post Failure',
  UpdateSearch = '[Feed] Update Search',
  ClearSearch = '[Feed] Clear Search',
  NextPage = '[Feed] Next Page',
  PreviousPage = '[Feed] Previous Page',
}

/**
 * Load Feed Action - Action dispatched to load feed.
 */
export const loadFeedAction = createAction(
  FeedActionTypes.LoadFeed,
  props<{ options: GetPostsOptions }>()
);

/**
 * Load Feed Success Action - Action dispatched when load feed operation is successful.
 */
export const loadFeedSuccessAction = createAction(
  FeedActionTypes.LoadFeedSuccess,
  props<{ response: PostsPage }>()
);

/**
 * Load Feed Failure Action - Action dispatched when load feed operation fails.
 */
export const loadFeedFailureAction = createAction(
  FeedActionTypes.LoadFeedFailure,
  props<{ error: any }>()
);

/**
 * Update Search Action - Action dispatched to search feed.
 */
export const updateSearchAction = createAction(
  FeedActionTypes.UpdateSearch,
  props<{ search: string }>()
);

/**
 * Clear Search Action - Action dispatched to clear search feed.
 */
export const clearSearchAction = createAction(FeedActionTypes.ClearSearch);

/**
 * Next Page Action - Action dispatched to change feed page.
 */
export const nextPageAction = createAction(FeedActionTypes.NextPage);

/**
 * Previous Page Action - Action dispatched to change feed page.
 */
export const previousPageAction = createAction(FeedActionTypes.PreviousPage);

/**
 * Delete Post Action - Action dispatched to delete a post.
 */
export const deletePostAction = createAction(
  FeedActionTypes.DeletePost,
  props<{ id: string }>()
);

/**
 * Delete Post Success Action - Action dispatched when delete post operation is successful.
 */
export const deletePostSuccessAction = createAction(
  FeedActionTypes.DeletePostSuccess,
  props<{ id: string }>()
);

/**
 * Delete Post Failure Action - Action dispatched when delete post operation fails.
 */
export const deletePostFailureAction = createAction(
  FeedActionTypes.DeletePostFailure,
  props<{ error: any }>()
);
