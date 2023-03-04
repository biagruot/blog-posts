import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeedUiStatus } from 'src/app/models/constants';
import { selectUiStatus, selectError } from './store/post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  /**
   * The UI status for the post.
   * @type {FeedUiStatus}
   */
  public feedUIStatus = FeedUiStatus;

  /**
   * An Observable indicating whether the post is currently loading.
   * @type {Observable<PostUiStatus>}
   */
  public uiStatus$: Observable<FeedUiStatus> =
    this.store.select(selectUiStatus);

  /**
   * An Observable representing any errors that occurred while loading the post.
   * @type {Observable<any>}
   */
  public error$: Observable<any> = this.store.select(selectError);

  /**
   * Constructs a new PostComponent.
   * @param store The NGRX store.
   */
  constructor(private store: Store) {}
}
