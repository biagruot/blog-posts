import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  Subscription,
  filter,
  debounceTime,
  distinctUntilChanged,
  Observable,
} from 'rxjs';
import {
  clearSearchAction,
  updateSearchAction,
} from '../../store/feed.actions';
import { selectSearch } from '../../store/feed.selectors';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedSearchComponent implements OnInit, OnDestroy {
  /**
   * An Observable of the search query for the feed.
   * @type {Observable<string>}
   */
  public search$: Observable<string> = this.store.select(selectSearch);

  public form = new FormGroup({
    search: new FormControl(),
  });

  private searchFormSubscription: Subscription | undefined;

  /**
   * Constructs a new FeedSearchComponent.
   * @param store The NGRX store.
   */
  constructor(private store: Store) {}

  ngOnInit() {
    this.initSearchFormSubscription();
    this.store.dispatch(updateSearchAction({ search: '' }));
  }

  ngOnDestroy() {
    // Unsubscribe from the form value changes subscriptions to prevent memory leaks
    this.searchFormSubscription?.unsubscribe();
  }

  /**
   * Clears the search query.
   */
  public clearSearch() {
    this.form.get('search')?.setValue('');
    this.store.dispatch(clearSearchAction());
  }

  /**
   * Initializes the search form subscription.
   */
  private initSearchFormSubscription() {
    this.searchFormSubscription = this.form
      .get('search') // get the search form control
      ?.valueChanges.pipe(
        filter((value: string) => value.length > 1), // only emit a value if it is longer than 1 character
        debounceTime(1000), // wait for 1 second after the latest value change before emitting
        distinctUntilChanged() // only emit a value if it is different from the previous value
      )
      .subscribe((search: string) => {
        this.store.dispatch(updateSearchAction({ search }));
      });
  }
}
