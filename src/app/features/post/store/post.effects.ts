import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { switchMap, map, catchError, of } from 'rxjs';
import {
  createPostAction,
  createPostSuccessAction,
  createPostFailureAction,
} from './post.actions';
import { CREATE_POST } from './post.graphql';

@Injectable()
export class PostEffects {
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
   * Effect to create a new post through the GraphQL API
   */
  createPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createPostAction),
      switchMap(({ input }) =>
        this.apollo.mutate({ mutation: CREATE_POST, variables: input }).pipe(
          map((result: any) => {
            alert('Post created successfully!');
            return createPostSuccessAction({
              response: result.data.createPost,
            });
          }),
          catchError(error => of(createPostFailureAction({ error })))
        )
      )
    );
  });
}
