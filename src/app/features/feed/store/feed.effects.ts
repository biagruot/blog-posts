import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadFeedAction,
  loadFeedSuccessAction,
  loadFeedFailureAction,
  updateSearchAction,
  nextPageAction,
  previousPageAction,
  clearSearchAction,
  deletePostAction,
  deletePostSuccessAction,
  deletePostFailureAction,
} from './feed.actions';
import { DELETE_POST, SEARCH_POSTS } from './feed.graphql';
import { GetPostsResponse } from 'src/app/models/post.types';
import { PAGE_SIZE } from 'src/app/models/constants';
import { Store } from '@ngrx/store';
import { selectCurrentPage, selectSearch } from './feed.selectors';

@Injectable()
export class FeedEffects {
  /**
   * Constructs a new FeedEffects.
   * @param actions$ The NGRX actions observable.
   * @param apollo The Apollo GraphQL client.
   * @param store The NGRX store.
   */
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
    private store: Store
  ) {}

  /**
   * Effect to fetch the feed with pagination from the GraphQL API
   */
  loadFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        loadFeedAction,
        updateSearchAction,
        clearSearchAction,
        nextPageAction,
        previousPageAction
      ),
      concatLatestFrom(() => [
        this.store.select(selectSearch),
        this.store.select(selectCurrentPage),
      ]),
      switchMap(([_, search, currentPage]) =>
        this.apollo
          .query<GetPostsResponse>({
            query: SEARCH_POSTS,
            variables: {
              page: currentPage,
              query: search,
              limit: PAGE_SIZE,
            },
          })
          .pipe(
            map(result =>
              loadFeedSuccessAction({
                response: result.data.posts,
              })
            ),
            catchError(error => of(loadFeedFailureAction({ error })))
          )
      )
    );
  });

  /**
   * Effect to delete an existing post through the GraphQL API
   */
  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePostAction),
      switchMap(({ id }) =>
        this.apollo.mutate({ mutation: DELETE_POST, variables: { id } }).pipe(
          map(() => {
            alert('Post deleted successfully!');
            return deletePostSuccessAction({ id });
          }),
          catchError(error => of(deletePostFailureAction({ error })))
        )
      )
    );
  });
}
