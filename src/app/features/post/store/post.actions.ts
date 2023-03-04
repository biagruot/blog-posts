import { createAction, props } from '@ngrx/store';
import {
  CreatePostRequest,
  CreatePostResponse,
} from 'src/app/models/post.types';

enum PostActionTypes {
  CreatePost = '[Feed] Create Post',
  CreatePostSuccess = '[Feed] Create Post Success',
  CreatePostFailure = '[Feed] Create Post Failure',
}

/**
 * Create Post Action - Action dispatched to create a new post.
 */
export const createPostAction = createAction(
  PostActionTypes.CreatePost,
  props<{ input: CreatePostRequest }>()
);

/**
 * Create Post Success Action - Action dispatched when create post operation is successful.
 */
export const createPostSuccessAction = createAction(
  PostActionTypes.CreatePostSuccess,
  props<{ response: CreatePostResponse }>()
);

/**
 * Create Post Failure Action - Action dispatched when create post operation fails.
 */
export const createPostFailureAction = createAction(
  PostActionTypes.CreatePostFailure,
  props<{ error: any }>()
);
