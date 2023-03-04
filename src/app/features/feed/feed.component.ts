import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeedUiStatus } from 'src/app/models/constants';
import { selectError, selectUiStatus } from './store/feed.selectors';

/**
 * An Angular component for displaying a feed of posts.
 */
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {
  /**
   * The UI status for the feed.
   * @type {FeedUiStatus}
   */
  public feedUIStatus = FeedUiStatus;

  /**
   * An Observable indicating whether the feed is currently loading.
   * @type {Observable<FeedUiStatus>}
   */
  public uiStatus$: Observable<FeedUiStatus> =
    this.store.select(selectUiStatus);

  /**
   * An Observable representing any errors that occurred while loading the feed.
   * @type {Observable<any>}
   */
  public error$: Observable<any> = this.store.select(selectError);

  /**
   * Constructs a new FeedComponent.
   * @param store The NGRX store.
   */
  constructor(private store: Store) {}
}
