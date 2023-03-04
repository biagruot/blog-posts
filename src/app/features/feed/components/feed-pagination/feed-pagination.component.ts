import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationLinks } from 'src/app/models/post.types';
import { nextPageAction, previousPageAction } from '../../store/feed.actions';
import {
  selectCurrentPage,
  selectPagination,
} from '../../store/feed.selectors';

@Component({
  selector: 'app-feed-pagination',
  templateUrl: './feed-pagination.component.html',
  styleUrls: ['./feed-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPaginationComponent {
  /**
   * An Observable of the pagination metadata for the feed.
   * @type {Observable<FeedPagination>}
   */
  public pagination$: Observable<PaginationLinks> =
    this.store.select(selectPagination);

  /**
   * An Observable of the current page.
   * @type {Observable<number>}
   */
  public currentPage$: Observable<number> =
    this.store.select(selectCurrentPage);

  /**
   * Constructs a new FeedComponent.
   * @param store The NGRX store.
   */
  constructor(private store: Store) {}

  /**
   * Emits an event indicating that the user wants to go to the next page.
   * @returns {void}
   */
  public onNextPage(): void {
    this.store.dispatch(nextPageAction());
  }

  /**
   * Emits an event indicating that the user wants to go to the previous page.
   * @returns {void}
   */
  public onPrevPage(): void {
    this.store.dispatch(previousPageAction());
  }
}
