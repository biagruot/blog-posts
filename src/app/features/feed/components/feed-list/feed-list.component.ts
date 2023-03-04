import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.types';
import { deletePostAction } from '../../store/feed.actions';
import { selectPosts } from '../../store/feed.selectors';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedListComponent {
  /**
   * An Observable of the posts in the feed.
   * @type {Observable<Post[]>}
   */
  public posts$: Observable<Post[]> = this.store.select(selectPosts);

  /**
   * Constructs a new FeedComponent.
   * @param store The NGRX store.
   */
  constructor(private store: Store) {}

  /**
   * Delete a post from the feed.
   * @param id The ID of the post to delete.
   */
  public deletePost(id: string) {
    this.store.dispatch(deletePostAction({ id }));
  }
}
